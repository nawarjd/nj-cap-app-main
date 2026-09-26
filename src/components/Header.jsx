import { Link } from "react-router-dom";
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
    <header className="header">
      <div className="inner_header_container">
        <Link to="/" aria-label="Little Lemon home">
          <img src={logo} alt="Little Lemon" className="logo" />
        </Link>
        <nav aria-label="Primary navigation">
          <Navbar navbar={navbar} onNavigate={() => setNavbar(false)} />
        </nav>
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
      </div>
    </header>
  );
};

export default Header;
