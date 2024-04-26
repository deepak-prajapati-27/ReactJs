import React from "react";
import FunctionComponent02 from "./FunctionComponent02";

export default function FunctionComponent01() {
  return (
    <div>
      <h1>Function Component</h1>
      <p>react js</p>
      <FunctionComponent02 />
      {/* here we have called function component 2       */}
    </div>

    //here we have to write everything in div and if we write outside it wont work
  );
}
