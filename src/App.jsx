import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import Navbar from "./components/Navbar";
import Layout from "./components/pages/admin/Layout";
import Dashboard from "./components/pages/admin/Dashboard";
import Comments from "./components/pages/admin/Comments";
import AddBlogs from "./components/pages/admin/AddBlogs";
import ListBlogs from "./components/pages/admin/ListBlogs";
import Login from "./components/admins/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route element={<Navbar />} />
        <Route path="/admin" element={true ? <Layout /> : <Login />}>
          <Route index element={<Dashboard />} />
          <Route path="AddBlogs" element={<AddBlogs />} />
          <Route path="ListBlogs" element={<ListBlogs />} />
          <Route path="Comments" element={<Comments />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
