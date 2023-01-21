
import { useState } from 'react';
import Logo from '../../images/foodadda.png';
const NavBar = () => {
  return (
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
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
