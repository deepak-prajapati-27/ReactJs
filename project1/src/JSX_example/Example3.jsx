import React from "react";

export default function Example3() {
  const subject = "deepak";
  const name = <p>deepak</p>; //we can direct write here html code+
  return (
    <div>
      <h1>my name is {subject}</h1>
      {name}
    </div>
  );
}
