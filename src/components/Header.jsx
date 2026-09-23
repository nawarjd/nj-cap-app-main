import Navbar from "./Navbar";
import logo from "../assets/Logo.svg";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";


const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const handleOpenMenu = () => {
    setNavbar((prev) => !prev);
  };

  return (
    <nav className="header">
      <img src={logo} alt="Little Lemon Logo" className="logo" />
      <Navbar navbar={navbar} />
      <button
        type="button"
        className="menu_icon"
        onClick={handleOpenMenu}
        aria-label={navbar ? "Hide navigation menu" : "Show navigation menu"}
        aria-expanded={navbar}
        aria-controls="site-navigation"
      >
        {navbar ? <IoClose /> : <IoMenu />}
      </button>
    </nav>
  );
};

export default Header;