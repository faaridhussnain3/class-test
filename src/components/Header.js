import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import Nav from "./Nav";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="container header-inner">
        <Link className="logo-link" to="/" aria-label="Little Lemon home" onClick={closeMobileMenu}>
          <img className="site-logo" src={logo} alt="Little Lemon" />
        </Link>

        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>

        <Nav isOpen={mobileOpen} onClose={closeMobileMenu} />
      </div>
    </header>
  );
}

export default Header;
