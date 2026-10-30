import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, limit } from 'firebase/firestore';
import { db } from '../../firebase'; // Make sure to import your configured Firestore instance
import underlineGradient from '../ScribbleComponents/underlinegradient.png';

export default function HomePosts() {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            const blogsRef = collection(db, 'blogs');
            const q = query(blogsRef, limit(3));
            const querySnapshot = await getDocs(q);
            const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setBlogPosts(posts);
        };

        fetchBlogPosts();
    }, []);

    return (
        <div className="h-max w-full max-w-[100rem] mx-auto md:px-10 lg:px-20 font-outfit">
            <h1 className="text-3xl text-center font-medium tracking-tight text-gray-900 sm:text-7xl select-none cursor-text">
                View Everything 
                <div className="main-gradient relative lg:mr-2">
                    Highschool 
                    <img 
                        src={underlineGradient}
                        className='-z-10 absolute right w-full -bottom-[2px] lg:-bottom-2 right-0'
                    />
                </div> 
                anywhere.
            </h1>

            <p className='text-center text-lg text-black font-normal mt-3'>
                Our blog posts inform you on everything highschool - from passion projects to extracurriculars to much more.
            </p> 

            <div className="mx-auto px-4 gap-y-4 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {blogPosts.map((post, index) => (
                    <a href={post.link} target="_blank" rel="noopener noreferrer" key={post.id} className="p-4 rounded-md group flex flex-col gap-y-4 transition duration-300 transform hover:scale-[1.01] border-2 border-slate-100">
                        <div className="bg-white rounded-md cursor-pointer">
                            <img
                                src={post.imgUrl}
                                alt="blog post title image"
                                className="w-full h-[20rem] object-cover rounded-md"
                            />
                        </div>
                        <div className="bg-slate-50 text-slate-800 p-4 -mt-2 rounded-md">
                            <p className="text-sm mb-1 font-normal">{post.date}</p>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2 transition duration-300">
                                {post.title}
                            </h3>
                            <p className="line-clamp-4">{post.content}</p>
                        </div>
                    </a>
                ))}
            </div>

            <div className='w-full flex items-center justify-center mt-4 text-md lg:text-xl font-outfit'>
                <span
                    className="inline-block cursor-not-allowed rounded bg-gray-100 px-5 py-2.5 font-medium text-gray-400"
                    aria-disabled="true"
                    title="Temporarily unavailable"
                >
                    Explore All Posts
                </span>
            </div>
        </div>
    );
}
