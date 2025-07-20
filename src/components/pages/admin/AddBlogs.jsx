import React, { useEffect, useState } from "react";
import { assets, blogCategories } from "../../../assets/assets";
import Quill from "quill";
import { useRef } from "react";
import "quill/dist/quill.snow.css";

const addBlogs = () => {
  const [image, setImage] = useState(false); //false for no file is  bydefault no selected image
  const [title, setTitle] = useState("");
  const [subTitle, setsubTitle] = useState("");
  const [category, setCategory] = useState("Startup");
  const [ispublished, setIsPublished] = useState(false);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };
  const generateContent = async () => {};
  useEffect(() => {
    // initiate only once

    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll"
    >
      <div className="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded">
        <p>Upload Thumbnail</p>
        <label htmlFor="image">
          <img
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt="this is space for image upload "
            className="mt-2 h-16 rounded cursor-pointer"
          />
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </label>
        <p className="mt-4">Blog Title</p>
        <input
          type="text"
          placeholder="Tile name "
          required
          className="w-full max-w-large mt-2 p-2 border border-gray-300 outline-none rounded"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <p className="mt-4">Sub Title</p>
        <input
          type="text"
          placeholder="subtitle "
          required
          className="w-full max-w-large mt-2 p-2 border border-gray-300 outline-none rounded"
          onChange={(e) => setsubTitle(e.target.value)}
          value={subTitle}
        />
        <p className="mt-4">Blog Description </p>
        <div className=" max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative ">
          <div ref={editorRef}></div>
          <button
            className="absolute bottom-1  right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5  hover:underline cursor-pointer"
            type="button"
            onClick={generateContent}
          >
            Genrate with AI
          </button>
        </div>
        <p className="mt-4">Blog Category</p>
        <select
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          className="mt-2 px-3 py-2 border text-gray-500 border-gray-500 outline-none rounded"
          name="category"
        >
          <option value=""> Select Category </option>
          {blogCategories.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <div className="flex gap-2 mt-4">
          <p>Published now</p>
          <input
            type="checkbox"
            checked={ispublished}
            className="scale-125 cursor-pointer"
            onChange={(e) => setIsPublished(e.target.checked)}
          />
        </div>

        <button
          className="mt-8 w-40 h-10 bg-blue-600 text-white text-sm rounded cursor-pointer"
          type="submit"
        >
          Add Blog
        </button>
      </div>
    </form>
  );
};

export default addBlogs;
