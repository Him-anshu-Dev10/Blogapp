import React, { useState } from "react";
import { useAppContext } from "../../context/appContext";
import toast from "react-hot-toast";

const Login = () => {
  const { axios, setToken, navigate } = useAppContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/admin/login", {
        email,
        password,
      });

      if (data.success) {
        toast.success("Login Successful");

        localStorage.setItem("token", data.token);
        setToken(data.token);
        axios.defaults.headers.common["Authorization"] = data.token;
        navigate("/admin");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("Login Failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Admin Login
        </h2>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 text-sm mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 rounded-md hover:bg-blue-700 transition-all cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
