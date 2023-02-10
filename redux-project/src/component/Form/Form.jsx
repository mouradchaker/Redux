import React from "react";
import "./Form.css";

function Form() {
  return (
    <form>
      <div className="form-group">
        <input type="text" placeholder="Enter Name" />
      </div>

      <div className="form-group">
        <input type="email" placeholder="Enter Email" />
      </div>

      <div className="form-group">
        <input type="submit" placeholder="Add User" />
      </div>
    </form>
  );
}

export default Form;
