import React, { useState } from "react";
import './Navbar.css'

const Navbar = () => {
  const [isSwapped, setIsSwapped] = useState(false);
//   const switchCoin = (event) => {
//     setIsSwapped(event.target.value);
//   };
  return (
    <div className="navbar">
      <h1 className="logo" style={{fontSize:"2rem"}}>
        CryptoTracker
        <span style={{ color: "var(--blue)", fontSize: "2rem" }}>.</span>
      </h1>
      
    </div>
  );
};

export default Navbar;
