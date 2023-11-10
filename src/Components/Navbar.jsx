import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  function closeSidebar() {
    setShowSidebar(false);
  }

  return (
    <>
      <div className="navbar container-navbar">
        <Link to="/" className="logo">
          Use<span>Recipes</span>
        </Link>

        <div className="nav-links">
          <Link to="/"> Home</Link>
          <Link to="/Recipes">Recipes</Link>
          <Link to="/Setting">Setting</Link>
          <Link to="/Contact">Contact</Link>
        </div>

        <div
          onClick={() => setShowSidebar(true)}
          className={showSidebar ? "sidebar-icon active" : "sidebar-icon"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {showSidebar && <Sidebar close={closeSidebar} />}
    </>
  );
}
