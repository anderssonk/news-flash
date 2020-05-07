import React from "react";
import Login from "./login/login"
const Header = () => {
  return (
    <div className="header header__title">
      <div className="page_title">
      <h1>News Flash!</h1>
      </div>
      <div className="login">
      <Login/>
      </div>
    </div>
  );
};

export default Header;
