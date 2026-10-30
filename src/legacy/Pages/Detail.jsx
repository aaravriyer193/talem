import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase";
import Spinner from "../Components/Blog/BlogSpinner";
import { useAuth } from "../contexts/AuthContext";
import XIcon from "../assets/social-icons/x.svg?react";
import LinkedinIcon from "../assets/social-icons/linkedin.svg?react";
import EmailIcon from "../assets/social-icons/email.svg?react";
import HeartIcon from "../assets/heart.svg?react";
import BlogCTABanner from "../Components/Blog/BlogCTABanner";

import { CiHashtag } from "react-icons/ci";
import Footer from "../Components/common/Footer";

const Detail = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [blog, setBlog] = React.useState(null);
  let currentLocation = window.location.href;

  const TableItem = (props) => (
    <span className="text-blue-900 rounded-full font-outfit">
      {props.number}
    </span>
  );

  React.useEffect(() => {
    const getBlogDetail = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "blogs", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setBlog(docSnap.data());
        } else {
          console.error("Blog does not exist with the given ID");
          toast.error("Blog does not exist with the given ID");
        }
      } catch (error) {
        console.error("Error fetching blog details:", error);
        toast.error("Error fetching blog details");
      } finally {
        setLoading(false);
      }
    };

    getBlogDetail();
  }, [id]);

  const handleShareX = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${currentLocation}&text=Check out this amazing blog on Talem!&via=talem`,
      "twitter-share",
      "width=626,height=436"
    );
    return false;
  };

  const handleShareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/feed/?shareActive=true&text=Check out this blog from Talem! ${currentLocation} %23NewPost`,
      "li-share",
      "width=626,height=436"
    );
    return false;
  };

  const handleShareEmail = () => {
    const subject = encodeURIComponent("Check out this link!");
    const body = encodeURIComponent(
      `I found this interesting link and wanted to share it with you: ${currentLocation}`
    );

    window.open(
      `mailto:?subject=${subject}&body=${body}`,
      "email-share",
      "width=626,height=436"
    );
  };

  if (loading) {
    return <Spinner />;
  }

  const handleAddFavourite = async () => {
    if (!blog) {
      toast.error("The blog is not valid");
      return;
    }

    try {
      const userRef = doc(db, "users", user.email);
      await updateDoc(userRef, {
        favouriteBlog: arrayUnion({
          id,
          image: blog?.imgUrl || "none",
          title: blog?.title,
        }),
      });
      toast.success("Blog added to favorites");
    } catch (error) {
      console.error("Error adding favorite blog:", error);
      toast.error("Error adding favorite blog");
    }
  };

  const handleHeadingClick = (headingId) => {
    document.getElementById(headingId).scrollIntoView({ behavior: "smooth" });
  };

  const headingRenderer = (level, props) => {
    const { children } = props;
    const HeadingTag = `h${level}`;

    // Define class names for different heading levels with responsive text sizes
    const className = `text-gray-900 mb-4 
      ${
        level === 1
          ? "text-4xl sm:text-3xl md:text-5xl"
          : level === 2
          ? "text-3xl sm:text-2xl md:text-4xl"
          : level === 3
          ? "text-2xl sm:text-xl md:text-3xl"
          : level === 4
          ? "text-xl sm:text-lg md:text-xl"
          : level === 5
          ? "text-lg sm:text-md md:text-lg"
          : "text-md sm:text-sm md:text-md"
      }`;

    return <HeadingTag className={className}>{children}</HeadingTag>;
  };

  return (
    <>
      <div className="single font-outfit">
        <Helmet>
          <html lang="en" />
          <title>{`${blog?.title} - Talem Blog`}</title>
          <meta charSet="utf-8" />
          <meta name="author" content={blog?.author} />
          <meta name="description" content={blog?.description} />
          <meta property="og:type" content="article" />
        </Helmet>

        <div className="flex justify-center my-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 font-outfit select-text mt-10">
          <div className="relative flex gap-x-1 items-center bg-blue-900 py-2 px-4 rounded-md text-white">
            <CiHashtag className="w-6 h-6"/>
            <span className="text-lg lg:text-xl">{blog?.category}</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-5">
          <div className="flex flex-col items-center text-center">
            <h1 className="six-title font-semibold text-gray-900 font-outfit mb-4">
              {blog?.title}
            </h1>

            <div className="text-center mb-5">
              <div className="flex flex-col font-light sm:flex-row justify-center items-center text-base sm:text-xl gap-1 mt-3">
                <p>{blog?.createdAt} | By</p>
                <p className="main-gradient font-semibold">
                  {blog?.author}
                </p>
              </div>
            </div>

            <div className="flex gap-2 cursor-pointer mb-5">
              <div className="bg-cyan-600 rounded-full p-2">
                <XIcon onClick={handleShareX} />
              </div>
              <div className="bg-cyan-600 rounded-full p-2">
                <LinkedinIcon onClick={handleShareLinkedIn} />
              </div>
              <div className="bg-cyan-600 rounded-full p-2">
                <EmailIcon onClick={handleShareEmail} />
              </div>
            </div>

            {blog?.imgUrl && (
              <img
                src={blog.imgUrl}
                alt="Blog Cover"
                className="w-full max-w-full h-auto object-cover rounded-md mb-4"
              />
            )}
          </div>
        </div>

        <div className="max-w-3xl container mx-auto my-10">
            <div className="space-y-2 bg-blue-50 py-8 px-10 rounded-lg">
                <h2 className="text-blue-900 font-medium tracking-tight three-title">Table of Contents</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 text-left items-start gap-4">
                  {blog?.sections?.map((section, index) => (
                    <div
                      key={index}
                      className="cursor-pointer transition300scale text-blue-500 p-2 bg-blue-100 rounded-md border-[1.4px] border-blue-200 flex gap-x-1 justify-center h-auto"
                      onClick={() =>
                        handleHeadingClick(
                          section.title.toLowerCase().replace(/ /g, "-")
                        )
                      }
                    >
                      <TableItem number={`${index + 1}.`}/> {section.title}
                    </div>
                  ))}
              </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="lg:w-3/4 mx-auto">
            <div className="flex flex-col items-center">
              <div className="max-w-xs lg:max-w-3xl w-full px-4 text-left leading-8 font-light">
                {blog?.sections?.map((section, index) => (
                  <div
                    key={index}
                    id={section.title.toLowerCase().replace(/ /g, "-")}
                    className="mb-6"
                  >
                    <h1 className="three-title font-medium tracking-tight text-blue-800">
                      {section.title}
                    </h1>
                    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
                    <ReactMarkdown
                      rehypePlugins={[rehypeRaw]}
                      Components={{
                        h1: (props) => headingRenderer(1, props),
                        h2: (props) => headingRenderer(2, props),
                        h3: (props) => headingRenderer(3, props),
                        h4: (props) => headingRenderer(4, props),
                        h5: (props) => headingRenderer(5, props),
                        h6: (props) => headingRenderer(6, props),
                      }}
                    >
                      {section.markdown}
                    </ReactMarkdown>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          className="fixed flex bottom-4 left-4 hover:scale-110 bg-blue-400 text-white py-3 px-4 rounded-lg items-center font-semibold"
          onClick={handleAddFavourite}
        >
          <HeartIcon />
          <span className="ml-1">Add favourite</span>
        </button>

        <BlogCTABanner />
      </div>
      <Footer />
    </>
  );
};

export default Detail;
