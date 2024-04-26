export default function RepeatedTable() {
  const rollno = [1, 2, 3, 4, 5];
  const name = ["Deepak", "garuav", "arma", "tarun", "rahul"];
  const marks = [99, 80, 100, 90, 10];
  const result = ["pass", "pass", "pass", "pass", "fail"];
  return (
    <div>
      <table>
        <tr>
          {rollno.map((e, i) => {
            return <td key={i}>{e}</td>;
          })}
        </tr>

        <tr>
          {name.map((e, i) => {
            return <td key={i}>{e}</td>;
          })}
        </tr>
        <tr>
          {marks.map((e, i) => {
            return <td key={i}>{e}</td>;
          })}
        </tr>
        <tr>
          {result.map((e, i) => {
            return <td key={i}>{e}</td>;
          })}
        </tr>
      </table>
    </div>
  );
}
