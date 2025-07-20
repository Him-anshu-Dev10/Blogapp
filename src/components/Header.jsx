import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    // Corrected xl-mx-24 to xl:mx-24
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20 mb-8">
        {/* Corrected item-center to items-center */}
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border rounded-full text-sm">
          {/* Corrected typo: intigrated -> integrated */}
          <p> New :AI feature integrated</p>
          {/* Added meaningful alt text */}
          <img src={assets.star_icon} className="w-2.5" alt="Star Icon" />
        </div>
        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-normal text-gray-700">
          Your own <span className="text-blue-700">blogging</span>
          <br /> platform.
        </h1>
        {/* Corrected max-w-2*1 to max-w-2xl and m-auto to mx-auto */}
        <p className="my-6 sm:my-8 max-w-2xl mx-auto max-sm:text-xs">
          This is your space to think out loud ,to share what matters, and write
          without filters.Whether it's one word or thousand,your story starts
          right here.{" "}
        </p>
        <form
          action=""
          className="flex items-center w-full max-w-lg sm:max-w-lg mx-auto border border-gray-300 bg-white rounded-full overflow-hidden p-1"
        >
          <input
            type="text"
            placeholder="Search for Blogs "
            required
            className="w-full pl-4 outline-none text-gray-700"
          />
          <button
            className="bg-blue-700 text-white px-6 py-2 rounded-full hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      <img
        src={assets.gradientBackground}
        alt="Background Gradient"
        className="absolute top-[12.5rem] left-1/2 -translate-x-1/2 w-full max-w-4xl -z-10 opacity-50"
        // Added left-1/2 -translate-x-1/2 to horizontally center the absolute image
        // Added w-full max-w-4xl to ensure it spans but doesn't get too wide on large screens
      />
    </div>
  );
};

export default Header;
