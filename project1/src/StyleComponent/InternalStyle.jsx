export default function InternalStyle() {
  const internalstyle = {
    myh1: {
      color: "red",
    },
    myp: {
      color: "green",
      backgroundColor: "black",
    },
  };
  return (
    <div>
      <h1 style={internalstyle.myh1}>deepak prajapati</h1>
      <p style={internalstyle.myp}>deepak</p>
    </div>
  );
}
