import React from "react";

export default function NavBar() {
  return (
    <div>
      <nav>
        <i class="fa-solid fa-bars  bar-nav"></i>
        <img src="logo.avif" alt="" className="logo"/>
        <div className="bars">
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-user"></i>
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
      </nav>
    </div>
  );
}
