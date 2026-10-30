import React, { useState, useEffect } from "react";
import { db, storage } from "../firebase";
import { useParams } from "react-router-dom";
import {
  addDoc,
  collection,
  getDoc,
  updateDoc,
  serverTimestamp,
  doc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";
import ImageFilesSvg from "../assets/image_files.svg?react";
import MarkdownEditor from "@uiw/react-markdown-editor";

const initialState = {
  title: "",
  trending: "no",
  category: "",
  description: "",
  sections: [],
};

const categoryOptions = [
  "💻 Technology", "🏫 College", "🚀 ECs"
];

const AddEditBlog = () => {
  const { authenticate, user } = useAuth();
  const { id } = useParams();
  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState(null);
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editing, setEditing] = useState({});

  const handleDragOver = (e) => {
    e.preventDefault(); // Prevent default behavior (Prevent file from being opened)
    e.stopPropagation();
  };

  // Handle drop event
  const handleDrop = (e) => {
    e.preventDefault(); // Prevent default behavior (Prevent file from being opened)
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]); // Set the file from the drop
    }
  };

  useEffect(() => {
    const isAuth = authenticate();
    if (isAuth && id) {
      const getBlogDetail = async () => {
        const docRef = doc(db, "blogs", id);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
          setForm(snapshot.data());
        }
      };
      getBlogDetail();
    }
  }, [id, authenticate]);

  useEffect(() => {
    if (file) {
      const uploadFile = async () => {
        const storageRef = ref(storage, `blog/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            toast.error(error.message);
          },
          async () => {
            const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
            toast.info("Image uploaded successfully");
            setForm((prev) => ({ ...prev, imgUrl: downloadUrl }));
          }
        );
      };
      uploadFile();
    }
  }, [file]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleTrending = (e) => setForm({ ...form, trending: e.target.value });

  const onCategoryChange = (e) =>
    setForm({ ...form, category: e.target.value });

  const handleAddSections = () => {
    if (markdown.trim()) {
      setForm((prev) => ({
        ...prev,
        sections: [...prev.sections, { title, markdown }],
      }));
      setMarkdown("");
      setTitle("");
    }
  };

  const handleSaveEditedSect = (index) => {
    setForm((prev) => {
      const updatedSections = [...prev.sections];
      updatedSections[index] = {
        ...editing,
        markdown: editing.markdown,
      };
      return { ...prev, sections: updatedSections };
    });
    setEditingIndex(null);
  };

  const handleDeleteSections = (index) => {
    setForm((prev) => ({
      ...prev,
      sections: prev.sections.filter((_, i) => i !== index),
    }));
  };

  const handleEditSection = (index) => {
    setEditingIndex(index === editingIndex ? null : index);
    if (index !== editingIndex) {
      const section = form.sections[index];
      setEditing({ title: section.title, markdown: section.markdown });
    } else {
      setEditing({ title: "", markdown: "" });
    }
  };

  const convertDate = () => {
    const dateObject = new Date();
    return dateObject.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('cool')
    const { title, category, trending, description } = form;
    if (category && title && description && trending) {
      const blogData = {
        ...form,
        timestamp: serverTimestamp(),
        author: user.displayName,
        userId: user.uid,
        ...(id ? {} : { createdAt: convertDate() }),
      };

      try {
        if (id) {
          await updateDoc(doc(db, "blogs", id), blogData);
          console.log("Blog updated successfully");
        } else {
          await addDoc(collection(db, "blogs"), blogData);
          console.log("Blog created successfully");
        }
      } catch (err) {
        toast.error(err.message);
        console.error(err.message)
      }
    } else {
      toast.error("All fields are mandatory to fill");
    }
  };

  return (
    <div className="flex justify-center py-8">
      <div className="w-full max-w-3xl bg-white rounded-lg p-8">
        <div className="flex flex-col items-start mb-4">
          <div className="container">
            <div className="col-12">
              <div className="flex justify-start py-3 text-lg md:text-2xl lg:text-3xl font-medium">
                <span>Let's get the </span>
                <span className="mx-1 font-bold bg-gradient-to-r from-cyan-700 to-blue-500 bg-clip-text text-transparent">
                  details
                </span>
                <span>out of the way!</span>
              </div>
            </div>
            <p className="text-start text-gray-400 font-medium text-sm lg:text-base">
              Create a blog for Talem Blog Platform (TB).
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="py-3">
            <input
              type="text"
              className="w-full border rounded-xl py-3 placeholder:pl-5"
              placeholder="Title"
              name="title"
              value={form.title}
              onChange={handleChange}
            />
          </div>
          <div className="py-3">
            <p className="lg:text-lg font-semibold text-start">
              Is it a trending blog?
            </p>
            <div className="mt-3 flex flex-col">
              {["yes", "no"].map((value) => (
                <div key={value} className="flex mb-2">
                  <input
                    type="radio"
                    className="form-check-input size-5 cursor-pointer"
                    value={value}
                    name="trendingOption"
                    checked={form.trending === value}
                    onChange={handleTrending}
                  />
                  <label htmlFor="trendingOption" className="ml-5">
                    {value.charAt(0).toUpperCase() + value.slice(1)}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="py-3">
            <div className="py-3">
              <input
                type="text"
                className="w-full border rounded-xl py-3 placeholder:pl-5"
                placeholder="Section title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <MarkdownEditor
              value={markdown}
              height="200px"
              onChange={setMarkdown}
            />

            <button
              type="button"
              className="bg-blue-700 text-white rounded-lg px-5 py-2 mt-3 flex"
              onClick={handleAddSections}
            >
              Add Section
            </button>

            {form.sections.length > 0 && (
              <div className="py-5">
                {form.sections.map((section, index) => (
                  <div
                    key={index}
                    className="mb-4 p-4 border rounded-lg shadow-md"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold">{section.title}</h3>
                      <div>
                        <button
                          type="button"
                          className="bg-green-500 text-white px-3 py-1 rounded-lg"
                          onClick={() => handleEditSection(index)}
                        >
                          {editingIndex === index ? "Save" : "Edit"}
                        </button>
                        <button
                          type="button"
                          className="bg-red-500 text-white px-3 py-1 rounded-lg ml-2"
                          onClick={() => handleDeleteSections(index)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    {editingIndex === index ? (
                      <div>
                        <input
                          type="text"
                          className="w-full border rounded-xl py-2"
                          value={editing.title}
                          onChange={(e) =>
                            setEditing((prev) => ({
                              ...prev,
                              title: e.target.value,
                            }))
                          }
                        />
                        <MarkdownEditor
                          value={editing.markdown}
                          height="200px"
                          onChange={(value) =>
                            setEditing((prev) => ({ ...prev, markdown: value }))
                          }
                        />
                        <button
                          type="button"
                          className="bg-blue-500 text-white rounded-lg px-5 py-2 mt-3"
                          onClick={() => handleSaveEditedSect(index)}
                        >
                          Save Changes
                        </button>
                      </div>
                    ) : (
                      <MarkdownEditor.Markdown source={section.markdown} />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="py-3">
            <select
              name="category"
              value={form.category}
              onChange={onCategoryChange}
              className="w-full border rounded-xl py-3 px-4"
            >
              <option value="" disabled>
                Select a category
              </option>
              {categoryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="py-3">
            <textarea
              name="description"
              placeholder="Write your description here..."
              className="w-full border rounded-xl py-3 placeholder:pl-5"
              value={form.description}
              onChange={handleChange}
            />
          </div>
          <div className="py-3">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center justify-center w-full h-64 border-2 border-blue-900 border-dashed rounded-lg bg-blue-50"
                onDragOver={handleDragOver} // Handle drag over
                onDrop={handleDrop} // Handle drop
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <ImageFilesSvg />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF</p>
                </div>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </label>
            </div>
          </div>
          <div className="py-3">
            <button
              type="submit"
              className="bg-blue-700 text-white rounded-lg px-5 py-2 mt-3"
            >
              {id ? "Update Blog" : "Create Blog"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditBlog;
