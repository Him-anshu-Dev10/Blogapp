import React, { useState } from "react";

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="w-full max-w-sm px-6 py-10 max-md:m-6 border border-blue-200 shadow-xl shadow-blue-100 rounded-lg">
        {" "}
        {/* Increased py-10 */}
        <div className="flex flex-col justify-center">
          <div className="w-full py-6 text-center">
            <h1 className="text-3xl font-bold">
              <span className="text-blue-600">Admin</span> Login
            </h1>
            <p className="font-light text-gray-700">
              Enter Your credential to access admin Panel
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-4 w-full sm:max-w-md text-gray-600"
          >
            {" "}
            {/* Added mt-4 for spacing */}
            <div className="flex flex-col mb-4">
              {" "}
              {/* Adjusted margin-bottom for inputs */}
              <label htmlFor="email" className="mb-1 text-gray-700 font-medium">
                Email
              </label>{" "}
              {/* Added mb-1 and improved styling */}
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                id="email" // Added id for accessibility
                required
                placeholder="Please Enter Your Email"
                className="border-b-2 border-gray-300 p-2 outline-none focus:border-blue-500 transition duration-200" // Corrected p-e to p-2 and added focus/transition
              />
            </div>
            <div className="flex flex-col mb-6">
              {" "}
              {/* Adjusted margin-bottom for inputs */}
              <label
                htmlFor="password"
                className="mb-1 text-gray-700 font-medium"
              >
                Password
              </label>{" "}
              {/* Added mb-1 and improved styling */}
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                id="password" // Added id for accessibility
                required
                placeholder="Please Enter Your Password"
                className="border-b-2 border-gray-300 p-2 outline-none focus:border-blue-500 transition duration-200" // Corrected p-e to p-2 and added focus/transition
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 font-medium bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
