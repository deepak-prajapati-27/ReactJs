export default function MapFunction07() {
  let marks = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  let name = ["deepak", "rahul", "tarun", "gaurav"];
  return (
    <div>
      {marks.map((e, i) => {
        return <h1 key={i}>{e}</h1>;
      })}
      {name.map((e, i) => {
        return <p key={i}>{e}</p>;
      })}
    </div>
  );
}
