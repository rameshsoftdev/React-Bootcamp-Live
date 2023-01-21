
import { useState } from 'react';
import Logo from '../../images/foodadda.png';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className="nav-items">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const Header = () => {
  const[loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="header">
      <img
        className="logo"
        src={Logo}
      />
      <NavBar />
      {
        loggedIn ? <button onClick={()=>setLoggedIn(false)}>Logout</button> : <button onClick={()=>setLoggedIn(true)}>Login</button>
      }
    </div>
  );
};
export default Header;
