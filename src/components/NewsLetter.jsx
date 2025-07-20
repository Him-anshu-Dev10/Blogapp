import React from "react";

const NewsLetter = () => {
  return (
    // Outer div for the entire newsletter section
    <div className="flex flex-col items-center justify-center text-center space-y-2 my-32">
      {/* Removed the redundant inner div that wrapped the h1 */}
      <h1 className="md:text-4xl text-2xl font-semibold">Never miss a Blog!</h1>
      {/* Corrected opacity syntax text-gray-500/70 to text-gray-500 opacity-70 */}
      {/* Corrected 'Subsribe' typo in paragraph text */}
      <p className="md:text-lg text-gray-500 opacity-70 pb-8">
        Subscribe to get the latest Blog, new Tech, and exclusive news.
      </p>
      {/* Corrected max-w-2*1 to max-w-2xl */}
      {/* Used h-12 as md:h-13 is not standard, or use arbitrary value like h-[3.25rem] */}
      <form className="flex items-center justify-between w-full max-w-2xl md:h-12 h-12 border border-gray-300 rounded-full overflow-hidden">
        <input
          // Corrected texr-gray-500 to text-gray-500
          className="h-full outline-none w-full px-3 text-gray-500 bg-transparent" // Removed redundant border and rounded classes as parent form handles it. bg-transparent important!
          type="email" // Use type="email" for email inputs
          placeholder="Enter your email id"
          required
        />
        <button
          // Corrected rounded-1-none to rounded-l-none (assuming form is rounded-full)
          className="md:px-12 px-8 h-full text-white bg-blue-500 rounded-r-full hover:bg-blue-600 transition-colors duration-200 whitespace-nowrap"
          type="submit"
        >
          Subscribe {/* Corrected typo */}
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
