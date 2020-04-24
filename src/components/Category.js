import React, { useRef, useState } from "react";
import Python from "./Python";

const Category = ({ onSubmit }) => {
  const lang = useRef();
  const handleClick = (arg) => {
    onSubmit(arg);
  };
  return (
    <div id="mainCatDiv">
      <div
        ref={lang}
        id="pythonDiv"
        name="python"
        onClick={() => handleClick("python")}
      >
        <Python />
        <h1>Python</h1>
        <p>
          Python is an interpreted, object-oriented, high-level programming
          language with dynamic semantics.Python's simple, easy to learn syntax
          emphasizes readability and therefore reduces the cost of program
          maintenance.
        </p>
      </div>

      <div id="jsDiv" onClick={() => handleClick("javascript")}>
        <h1>Javascript</h1>
      </div>
      <div id="reactDiv">
        <h1>React</h1>
      </div>
      <div id="rubyDiv">
        <h1>Ruby</h1>
      </div>
    </div>
  );
};
export default Category;
