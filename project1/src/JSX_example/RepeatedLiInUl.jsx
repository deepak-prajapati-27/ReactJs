export default function RepeatedLiInUl() {
  const name = ["deepak", "verma", "gaurav", "tarun", "rahul"];
  return (
    <div>
      <ul>
        {name.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
      </ul>
    </div>
  );
}
