import Example1 from "./Example1";
import Example4 from "./Example4";

export default function Example5() {
  let login = true;
  return <div>{login ? <p>logged in successfully</p> : <Example1 />}</div>;
}
