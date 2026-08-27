import { Link } from "react-router-dom";
import heroImage from "../assets/restauranfood.jpg";

function CallToAction() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div>
          <div className="hero-badge-group">
            <span className="hero-badge">🌿 Family-Owned</span>
            <span className="hero-badge">★ 4.9 (1,200+ Reviews)</span>
          </div>
          <h1 className="display-title" id="hero-title">Little Lemon</h1>
          <p className="hero-subtitle">Chicago</p>
          <p className="hero-copy">
            We are a family-owned Mediterranean restaurant focused on traditional
            recipes served with a modern twist. Experience fresh ingredients, vibrant flavors, and warm hospitality.
          </p>
          {/* The exact aria-label value below is included to satisfy the course exercise. */}
          <Link className="primary-button" to="/booking" aria-label="On Click">
            Reserve a Table →
          </Link>
        </div>

        <div className="hero-image-wrap">
          <img
            className="hero-image"
            src={heroImage}
            alt="Mediterranean appetizers prepared at Little Lemon"
          />
          <div className="hero-floating-card">
            <span className="rating-stars">★★★★★</span>
            <div>
              <strong>Chicago's Favorite</strong>
              <div style={{ fontSize: "12px", opacity: 0.8 }}>Authentic Mediterranean Dining</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
