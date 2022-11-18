import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const removebodyclass=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
  }
  const toggleMode = (cls) => {
    removebodyclass();
    document.body.classList.add('bg-'+cls);
    // console.log(cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark Mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    } else if(mode === 'dark') {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }else{
      setMode(cls);
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} togglemode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showalert={showAlert}
                  mode={mode}
                  heading="Enter Your Text Below"
                />
              }
            ></Route>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
