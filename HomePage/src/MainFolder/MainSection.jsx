import React from "react";

export default function MainSection() {
  return (
    <div>
      <div className="main">
        <div className="written-section">
          <h2 className="h2-welcome">WELCOME</h2>
          <h2 className="h2-main">Smart ideas for your brand here</h2>
          <p className="p-main">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            delectus vitae enim quo eveniet obcaecati at velit cupiditate
            molestiae illum?
          </p>
          <button class="button-75" role="button">
            <span class="text">Contact Us Now</span>
          </button>
        </div>
        <div className="img-section">
          <img src="custom-software-development.png" alt="" />
        </div>
      </div>
    </div>
  );
}
