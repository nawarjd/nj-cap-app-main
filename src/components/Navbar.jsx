import { Link } from "react-router-dom";

const Navbar = ({ navbar, onNavigate }) => {
  return (
    <ul id="site-navigation" className={`navbar${navbar ? " is-open" : ""}`}>
      <li><Link to="/" onClick={onNavigate}>Home</Link></li>
      <li><Link to="/about" onClick={onNavigate}>About</Link></li>
      <li><Link to="/menu" onClick={onNavigate}>Menu</Link></li>
      <li><Link to="/reservations" onClick={onNavigate}>Reservations</Link></li>
      <li><Link to="/order-online" onClick={onNavigate}>Order Online</Link></li>
      <li><Link to="/login" onClick={onNavigate}>Login</Link></li>
    </ul>
  );
};

export default Navbar;
