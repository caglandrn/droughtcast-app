import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ 
    padding: "1rem", 
    background: "#386c7c",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }}>
    <h2 style={{ margin: 0, color: "#d8f4f8" }}>Turkey Drought Map</h2>
    <div>
      <Link to="/" style={{ marginRight: "1rem", textDecoration: "none", color: "#d8f4f8" }}>Anasayfa</Link>
      <Link to="/about" style={{ textDecoration: "none", color: "#d8f4f8" }}>Hakkında</Link>
      <Link to="/data" style={{ textDecoration: "none", color: "#d8f4f8" }}>Veri</Link>
      <Link to="/contact" style={{ textDecoration: "none", color: "#d8f4f8" }}>İletişim</Link>
    </div>
  </nav>
);

export default Navbar;