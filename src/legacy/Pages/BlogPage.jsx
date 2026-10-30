import React, { useState, useEffect } from 'react';
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  doc,
  deleteDoc
} from 'firebase/firestore';
import { db } from '../firebase'; 
import { toast } from 'react-toastify'; 
import { useAuth } from '../contexts/AuthContext';
import { getIdTokenResult } from 'firebase/auth';
import Spinner from '../Components/Blog/BlogSpinner';
import Footer from '../Components/common/Footer'

const InfoTag = ({ tag, info }) => {
  return (
    <div className="flex text-sm font-light space-x-1 text-black">
      <p className="font-semibold">{tag}</p>
      <p>{info}</p>
    </div>
  );
};

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]); // To handle search
  const categories = ["All", "💻 Technology", "🏫 College", "🚀 ECs"];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [lastVisible, setLastVisible] = useState(null);
  const [hide, setHide] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (user) {
        try {
          const idTokenResult = await getIdTokenResult(user);
          setIsAdmin(!!idTokenResult.claims.admin); // Check if the admin claim is true
        } catch (error) {
          console.error('Error fetching admin status:', error);
        }
      }
    };

    checkAdminStatus();
  }, [user]);

  const image_link =
    'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  const max_length = 150;

  const truncate = (str) => {
    return str.length > max_length ? str.substring(0, max_length) + '...' : str;
  };

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const blogRef = collection(db, 'blogs');
      const order = 'desc';
      const blogQuery = query(
        blogRef,
        orderBy('timestamp', order),
        limit(4)
      );
      const docSnapshot = await getDocs(blogQuery);
      const fetchedBlogs = docSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setBlogs(fetchedBlogs);
      setFilteredBlogs(fetchedBlogs); // Initialize filteredBlogs
      setLastVisible(docSnapshot.docs[docSnapshot.docs.length - 1]);
      
      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error('Failed to fetch blogs');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = () => {
    // Filter blogs based on search query
    const lowerCaseQuery = searchQuery.toLowerCase();
    const results = blogs.filter(blog => 
      blog.title.toLowerCase().includes(lowerCaseQuery) ||
      blog.description.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredBlogs(results);
    setHide(true); // Show filtered results
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        setLoading(true);
        await deleteDoc(doc(db, 'blogs', id));
        toast.success('Blog deleted successfully');
        fetchBlogs(); // Refresh the blog list
      } catch (error) {
        console.error(error);
        toast.error('Failed to delete blog');
      } finally {
        setLoading(false);
      }
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="min-h-screen font-outfit">
        <div className="bg-extra-light-blue h-1/2 flex items-center">
          <div className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10 container max-w-screen-lg mx-auto">
            <div className="max-w-lg text-center md:text-left">
              <h1 className="font-bold text-4xl md:text-6xl mb-8">Talem Blogs</h1>
              <p className="font-light text-base md:text-lg">
                Welcome to Talem Blog Platform! This is your one gateway to everything high school.
              </p>
              <hr className="border-2 border-[#3897d3] w-[87px] mt-4 mx-auto md:mx-0" />
            </div>
            <div className="flex items-center justify-center">
              <img
                src={image_link}
                className="rounded-2xl h-48 md:h-72 w-full object-cover"
                alt="Blog illustration"
              />
            </div>
          </div>
        </div>

        <div className="shape-divider">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <div className="container max-w-screen-lg mx-auto flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-16 z-10 relative mt-3">
          <div className="w-full md:w-2/3 flex flex-col">
            <h1 className="pl-3 lg:pl-0 text-2xl md:text-4xl text-gray-500">
              Blog Posts
            </h1>
            <div className="px-4 space-y-6">
              {filteredBlogs
                .filter(blog => selectedCategory === 'All' || blog.category === selectedCategory)
                .map((blog) => (
                  <div
                    onClick={() => window.location.href = `/detail/${blog.id}`}
                    key={blog.id}
                    className="border rounded-lg w-full h-56 bg-white shadow-xl hover:scale-105 cursor-pointer duration-500 mt-4 font-light text-gray-500 p-6 flex flex-col"
                  >
                    <h3 className="text-xl md:text-2xl">{blog.title}</h3>
                    <div className="flex flex-col md:flex-row space-x-0 md:space-x-5 mt-5">
                      <InfoTag tag="Published:" info={new Date(blog.timestamp?.toDate()).toLocaleDateString()} />
                      <InfoTag tag="Category:" info={blog.category} />
                      <InfoTag tag="Written by:" info={blog.author || 'Unknown'} />
                    </div>
                    <div className="mt-7 flex-1 overflow-hidden">
                      <p className="text-gray-500 text-sm line-clamp-3">
                        {truncate(blog.description)}
                      </p>
                    </div>
                    {isAdmin && (
                      <button
                        className="mt-4 bg-red-500 text-white rounded-lg py-2 px-4"
                        onClick={(e) => { e.stopPropagation(); handleDelete(blog.id); }}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                ))}
            </div>
          </div>

          <div className="flex flex-col w-full md:w-1/3 px-4 lg:px-0">
            <h1 className="text-xl md:text-2xl font-light text-gray-600 mb-3">Browse Categories</h1>
            <div className="flex space-y-3">
              <div className="h-40 w-0.5 bg-gray-300" />
              <div className="flex flex-col space-y-3 ml-4">
                {categories.map((category, index) => (
                  <span
                    key={index}
                    className={`cursor-pointer ${selectedCategory === category ? 'font-bold' : ''}`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
            <h1 className="text-xl md:text-2xl font-light text-gray-600 mb-3 mt-3">Search a blog</h1>
            <input
              className="rounded-lg py-2.5 px-4 placeholder:font-light mb-4 border w-full"
              placeholder="Search here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="uppercase bg-sky-500 text-sm rounded-lg py-2 px-6 text-white mb-4 w-full md:w-auto"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

        </div>
        {/* The spacer */}
        <div className="mb-16" />
      </div>
      <Footer />
    </>
  );
};

export default App;
