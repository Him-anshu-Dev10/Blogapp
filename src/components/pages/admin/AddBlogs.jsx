import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { assets, blogCategories } from "../../../assets/assets";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const AddBlogs = () => {
  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setsubTitle] = useState("");
  const [category, setCategory] = useState("Startup");
  const [ispublished, setIsPublished] = useState(false);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  // ✅ submit handler
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const description = quillRef.current.root.innerHTML;

      // 1. formdata banao
      const formData = new FormData();
      formData.append(
        "blog",
        JSON.stringify({
          title,
          subTitle,
          description,
          category,
          isPublished: ispublished,
        })
      );
      formData.append("image", image);

      // 2. axios request
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
      className="flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll"
    ></form>
  );
};

export default AddBlogs;
