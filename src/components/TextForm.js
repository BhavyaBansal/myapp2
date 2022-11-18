import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // console.log("Uppercase was clicked");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    // console.log("Lowercase was clicked");
  };
  const removeSpacesOnClick = () => {
    let newt = text.split(/[ ]+/);
    setText(newt.join(" "));
  };
  const handleClearClick = () => {
    setText("");
  };
  const handleCopyClick = () => {
    var text = document.getElementById("mytext");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleOnChange = (event) => {
    // console.log("Change Made");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mytext"
            rows="10"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={removeSpacesOnClick}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{text.split(" ").length * 0.008} minutes read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
