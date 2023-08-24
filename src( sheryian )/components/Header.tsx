import React from "react";

function Header(props) {
  return (
    <>
      <div className="h-8 bg-green-500 flex items-center justfy-between">
        <h2>{props.user}</h2>
        <div>
          <h4>About</h4>
          <h4>Career</h4>
          <h4>Contact Us </h4>
          <h4>Account</h4>
        </div>
      </div>
    </>
  );
}

export default Header;
