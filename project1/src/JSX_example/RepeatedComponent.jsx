import Example1 from "./Example1";
import Example5 from "./Example5";

export default function RepeatedComponent() {
  let list = [1, 1, 1];
  return (
    <div>
      {list.map((e, i) => {
        return <Example5 key={i} />;
      })}
    </div>
  );
}
