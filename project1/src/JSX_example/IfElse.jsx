import Example1 from "./Example1";
import Example2 from "./Example2";

export default function IfElse() {
  let loggin = true;
  if (loggin) {
    return <Example2 />;
  } else {
    return <Example1 />;
  }
}
