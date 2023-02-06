
import { useState } from 'react';
import Logo from '../../images/foodadda.png';
import { Link } from 'react-router-dom';
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
const NavBar = () => {
  const cartItems = useSelector((store)=>store.cart.items);
  console.log(cartItems);
  return (
    <div className="nav-items">
      <ul className="flex">
        <li className="p-2 m-2 bg-white rounded-md w-24 text-center hover:bg-gray-200"><Link to="/">Home</Link></li>
        <li className="p-2 m-2 bg-white rounded-md w-24 text-center hover:bg-gray-200"><Link to="/about">About Us</Link></li>
        <li className="p-2 m-2 bg-white rounded-md w-24 text-center hover:bg-gray-200"><Link to="/contact">Contact</Link></li>
        <li className="p-2 m-2 bg-white rounded-md w-24 text-center hover:bg-gray-200"><Link to="/cart">Cart - {cartItems.length}</Link></li>
        <li className="p-2 m-2 bg-white rounded-md w-24 text-center hover:bg-gray-200"><Link to="/instamart">Instamart</Link></li>
      </ul>
    </div>
  );
};

const Header = () => {
  const[loggedIn, setLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="flex flex-wrap justify-between bg-cyan-500 shadow-lg">
      <img
        className="w-28"
        src={Logo}
      />
      <NavBar />
      {loggedIn ? (
        <button onClick={() => setLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Login</button>
      )}
      <h1>{isOnline ? "✅" : "🔴"}</h1>
    </div>
    
  );
};
export default Header;
