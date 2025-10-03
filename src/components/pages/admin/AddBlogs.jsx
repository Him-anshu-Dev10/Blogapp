import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { blogCategories } from "../../../assets/assets";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const AddBlogs = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  // ✅ submit handler
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const description = quillRef.current.root.innerHTML;

      const formData = new FormData();
      formData.append(
        "blog",
        JSON.stringify({
          title,
          subTitle,
          description,
          category,
          isPublished,
        })
      );
      if (image) formData.append("image", image);

      const res = await axios.post(
        "http://localhost:5000/api/blogs/add",
        formData,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      console.log("Response:", res.data);
      alert(res.data.message || "Blog added successfully ✅");
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Something went wrong ❌");
    }
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll p-6"
    >
      {/* Title */}
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-4 px-4 py-2 border rounded"
        required
      />

      {/* Subtitle */}
      <input
        type="text"
        placeholder="Blog Subtitle"
        value={subTitle}
        onChange={(e) => setSubTitle(e.target.value)}
        className="w-full mb-4 px-4 py-2 border rounded"
        required
      />

      {/* Category */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full mb-4 px-4 py-2 border rounded"
      >
        {blogCategories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Quill Editor */}
      <div ref={editorRef} className="h-40 bg-white mb-4"></div>

      {/* Image Upload */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        className="mb-4"
      />

      {/* Publish Toggle */}
      <label className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          checked={isPublished}
          onChange={(e) => setIsPublished(e.target.checked)}
        />
        Publish this blog
      </label>

      {/* Submit */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        Submit Blog
      </button>
    </form>
  );
};

export default AddBlogs;
