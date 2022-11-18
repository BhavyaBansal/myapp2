import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Converted to Uppercase","success");
    // console.log("Uppercase was clicked");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted to Lowercase","success");
    // console.log("Lowercase was clicked");
  };
  const removeSpacesOnClick = () => {
    let newt = text.split(/[ ]+/);
    setText(newt.join(" "));
    props.showalert("Extra Spaces has been removed","success");
  };
  const handleClearClick = () => {
    setText("");
    props.showalert("Text Cleared","success");
  };
  const handleCopyClick = () => {
    var text = document.getElementById("mytext");
    text.select();
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text.value);
    props.showalert("Text Copied!!","success");
  };
  const handleOnChange = (event) => {
    // console.log("Change Made");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mytext"
            rows="10"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#343a40",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-outline-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-outline-primary mx-1 my-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0}
          className="btn btn-outline-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button disabled={text.length === 0} className="btn btn-outline-primary mx-1 my-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button disabled={text.length === 0}
          className="btn btn-outline-primary mx-1 my-1"
          onClick={removeSpacesOnClick}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length * 0.008} minutes read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview."}</p>
      </div>
    </>
  );
}
