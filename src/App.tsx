import React from "react";
import "./App.css";
import Register from "./component/register/index";
import Sigin from "./component/signin/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "./component/Home/index";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/Signin" element={<Sigin />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
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
