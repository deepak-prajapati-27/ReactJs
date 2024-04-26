import "./css/Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="nav-bar">
        <h1 className="nav-h1">Shivaaa.</h1>
        <ul className="nav-ul">
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Contact us</li>
        </ul>
        <div className="tools">
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-chart-simple chart-logo"></i>
        </div>
      </nav>
    </div>
  );
}
