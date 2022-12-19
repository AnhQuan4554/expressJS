import React, { useState } from "react";
import "./App.css";
import Register from "./component/register/index";
import Sigin from "./component/signin/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "./component/Home/index";
import PostChildren from "./component/pageChildren/PostChildren";
import Post_manager from "./component/Home/Post_manager";
import Overview from "./component/Home/Overview";
import Location from "./component/Home/Location";
import Reward from "./component/Home/Reward";
import Payment from "./component/Home/Payment";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function App() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<PageHome index={index} />} /> */}
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
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
