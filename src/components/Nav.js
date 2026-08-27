import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Menu", to: "/menu" },
  { label: "Reservations", to: "/booking" },
  { label: "Order Online", to: "/order-online" },
  { label: "Login", to: "/login" },
];

function Nav({ isOpen, onClose }) {
  const location = useLocation();

  return (
    <nav className={`site-nav ${isOpen ? "open" : ""}`} aria-label="Primary navigation">
      <ul>
        {navItems.map((item) => {
          const isActive =
            item.to === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(item.to);

          return (
            <li key={item.to}>
              <Link
                className={`nav-item-link ${isActive ? "active" : ""}`}
                to={item.to}
                onClick={onClose}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
