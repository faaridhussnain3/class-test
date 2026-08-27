import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo-wrap">
              <img className="footer-logo" src={logo} alt="Little Lemon" />
            </div>
            <p className="footer-about">
              Bringing authentic Mediterranean flavors, fresh ingredients, and warm hospitality to Chicago since 1995.
            </p>
          </div>

          <section aria-labelledby="footer-nav-title">
            <h2 className="footer-title" id="footer-nav-title">
              Navigation
            </h2>
            <ul className="footer-list">
              <li><Link className="footer-link" to="/">Home</Link></li>
              <li><Link className="footer-link" to="/about">About Us</Link></li>
              <li><Link className="footer-link" to="/menu">Our Menu</Link></li>
              <li><Link className="footer-link" to="/booking">Reservations</Link></li>
              <li><Link className="footer-link" to="/order-online">Order Online</Link></li>
              <li><Link className="footer-link" to="/login">Login</Link></li>
            </ul>
          </section>

          <section aria-labelledby="contact-title">
            <h2 className="footer-title" id="contact-title">Contact</h2>
            <address style={{ fontStyle: "normal" }}>
              <ul className="footer-list">
                <li>📍 123 Lemon Street, Chicago, IL</li>
                <li>📞 <a className="footer-link" href="tel:+13125550190">+1 312 555 0190</a></li>
                <li>✉️ <a className="footer-link" href="mailto:hello@littlelemon.example">hello@littlelemon.example</a></li>
              </ul>
            </address>
          </section>

          <section aria-labelledby="social-title">
            <h2 className="footer-title" id="social-title">Social Media</h2>
            <ul className="footer-list">
              <li><a className="footer-link" href="https://www.instagram.com/" target="_blank" rel="noreferrer">📷 Instagram</a></li>
              <li><a className="footer-link" href="https://www.facebook.com/" target="_blank" rel="noreferrer">📘 Facebook</a></li>
            </ul>
          </section>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Little Lemon Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
