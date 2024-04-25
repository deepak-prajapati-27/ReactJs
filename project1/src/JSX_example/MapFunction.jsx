export default function MapFunction() {
  let sub = ["C", "C++", "java", "python"];
  return (
    <div>
      {sub.map((e, i) => {
        return <h1 key={i}>{e}</h1>;
      })}
    </div>
  );
}
