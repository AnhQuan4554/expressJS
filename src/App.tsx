import React from "react";
import "./App.css";
import Register from "./component/register/index";
import Sigin from "./component/signin/index";
import { Routes, Route } from "react-router-dom";
import PostChildren from "./component/pageChildren/PostChildren";
import Post_manager from "./component/Home/Post_manager";
import Overview from "./component/Home/Overview";
import Location from "./component/Home/Location";
import Reward from "./component/Home/Reward";
import Payment from "./component/Home/Payment";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sigin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/postChildren" element={<PostChildren />} />
        <Route path="/post_manager" element={<Post_manager />} />
        <Route path="/location" element={<Location />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/reward" element={<Reward />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
