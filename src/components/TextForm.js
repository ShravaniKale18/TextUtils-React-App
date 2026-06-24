import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const wordCount =
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className="container my-3">
      <h1>{props.heading}</h1>

      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          Enter your text below
        </label>

        <textarea
          id="myBox"
          className="form-control shadow-sm"
          rows="8"
          value={text}
          onChange={handleOnChange}
          placeholder="Type or paste your text here..."
        ></textarea>
      </div>

      {/* Buttons */}
      <div className="mb-4">
        <button
          className="btn btn-success mx-2"
          onClick={handleUpClick}
        >
          ⬆ Uppercase
        </button>

        <button
          className="btn btn-warning mx-2"
          onClick={handleLowClick}
        >
          ⬇ Lowercase
        </button>

        <button
          className="btn btn-danger mx-2"
          onClick={handleClearClick}
        >
          🗑 Clear
        </button>
      </div>

      {/* Summary Card */}
      <div className="card shadow p-4">
        <h2 className="mb-3">Text Summary</h2>

        <div className="row text-center">
          <div className="col-md-4">
            <h3>{wordCount}</h3>
            <p>Words</p>
          </div>

          <div className="col-md-4">
            <h3>{text.length}</h3>
            <p>Characters</p>
          </div>

          <div className="col-md-4">
            <h3>{(0.008 * wordCount).toFixed(2)}</h3>
            <p>Minutes Read</p>
          </div>
        </div>

        <hr />

        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview. Enter some text above."}
        </p>
      </div>
    </div>
  );
}