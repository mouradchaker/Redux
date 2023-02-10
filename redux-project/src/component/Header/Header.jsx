import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <h1> Coderz Academy </h1>
      <p> Hello {props.isChanged && props.name}</p>
    </div>
  );
}

export default Header;
