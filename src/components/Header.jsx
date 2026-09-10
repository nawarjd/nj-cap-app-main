import React from "react";
import Navbar from "./Navbar";
import logo from "../assets/logoipsum-435.svg";


const Header = () => {
  return (
    <>
      <img src={logo} alt="Logo" />
      <Navbar />
    </>
  );
};

export default Header;
