import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
      <TextForm heading="Enter Your Text Below"/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
