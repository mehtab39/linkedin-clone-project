import React from "react";
import "./Rightfooter.css";

function Footer() {
  return (
    <div className="container ">
      <div className="element new1">
        <div>About</div>
        <div>Accessibility</div>
        <div>Help Center </div>
      </div>

      <div className="element1 new1">
        <div>Privacy Terms </div>
        <div> Ad Choices</div>
      </div>

      <div className="element new1">
        <div>Adevertising </div>
        <div> Business Services</div>
      </div>

      <div className="element1 new1">
        <div>Get the Linkedin app</div>
        <div> More</div>
      </div>

      <div className="new3">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
            alt=""
          />
        </div>

        <div className="new31">
          <div>LinkedIn</div>
          <div>Corporation</div>
          <div>©</div>
          <div>2022</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
