export default function SwitchCase() {
  let userRole = "admin";
  switch (userRole) {
    case "admin":
      return <h1>admin panel</h1>;
    case "customer":
      return <h1>customer panel</h1>;
    case "supplier":
      return <h1>supplier panel</h1>;
    default:
      return <h1>no data</h1>;
  }
}
