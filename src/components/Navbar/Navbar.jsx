import React, { useState } from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">
        CryptoTracker
        <span style={{ color: "var(--blue)", fontSize: "50px" }}>.</span>
      </h1>
      
    </div>
  );
};

export default Navbar;
