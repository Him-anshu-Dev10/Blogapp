import React, { useState } from "react";
import { blog_data, blogCategories } from "../assets/assets";
import { motion } from "framer-motion";
import Blogcard from "./Blogcard";

const Bloglist = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div>
      <div className="flex justify-center gap-4 sm:gap-8 my-10">
        {blogCategories.map((item) => (
          <div key={item}>
            <button
              onClick={() => setMenu(item)}
              className={`
                cursor-pointer
                px-5 py-2
                border border-gray-300
                rounded-full
                text-sm
                text-gray-500
                bg-white
                hover:bg-gray-100
                transition-colors duration-200
                whitespace-nowrap
                relative z-10
                ${
                  menu === item &&
                  `
                  text-white
                  bg-transparent
                  border-blue-500
                `
                }
              `}
            >
              {item}
              {menu === item && (
                <motion.div
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute inset-0 h-full w-full -z-10 bg-blue-500 rounded-full" // Ensure -z-10 is configured
                ></motion.div>
              )}
            </button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40">
        {blog_data
          .filter((blog) => (menu === "All" ? true : blog.category === menu))
          .map((blog) => (
            <Blogcard key={blog.id} blog={blog} />
          ))}
      </div>
    </div>
  );
};

export default Bloglist;
