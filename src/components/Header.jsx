import Navbar from "./Navbar";
import logo from "../assets/Logo.svg";
import { IoMenu } from "react-icons/io5";


const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="Little Lemon Logo" className="logo" />
      <Navbar />
      <div className='menu_icon'><IoMenu /></div>
    </nav>
  );
};

export default Header;
