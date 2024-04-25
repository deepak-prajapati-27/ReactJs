import Example1 from "./Example1";
import Example2 from "./Example2";

export default function IfElse2() {
  let loggin = false;
  let Element;
  if (loggin) {
    Element = <h1>deepak</h1>;
  } else {
    Element = <Example1 />;
  }
  return Element;
}
