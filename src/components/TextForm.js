import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Cleared to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value); // this will change the value of text
  };

  const [text, setText] = useState("");

  // text = "changing the value of text" // Wrong way to change the state
  // setText = "changing the value of setText" // Right way to change the state
  const countNonEmptyStrings = arr => arr.filter(str => str.trim() !== "").length;


  return (
    <>
      <div className="container" style ={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style ={{backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white'}}
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Covert to Upper Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Covert to Lower Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Text
        </button>
      </div>

      <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}} >
        <h2>Your text summary</h2>
        <p>
          {countNonEmptyStrings(text.split(" ")) } words and {countNonEmptyStrings(text.split(""))} characters
        </p>
        <p>{0.008 * countNonEmptyStrings(text.split(" "))} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
