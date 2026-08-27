import marioAdrianA from "../assets/mario-adrian-a.jpg";
import marioAdrianB from "../assets/mario-adrian-b.jpg";

function Chicago() {
  return (
    <section className="section" aria-labelledby="about-little-lemon-title">
      <div className="container chicago-grid">
        <div className="chicago-copy">
          <h2 className="section-title" id="about-little-lemon-title">Little Lemon</h2>
          <p className="hero-subtitle" style={{ color: "var(--primary-green)", marginBottom: "16px" }}>
            Chicago
          </p>
          <p>
            Little Lemon is a family-owned Mediterranean restaurant in the heart of Chicago.
            Founded by brothers Mario and Adrian, the restaurant combines traditional Mediterranean recipes with a modern culinary approach, creating a relaxed neighborhood dining experience centered on fresh ingredients.
          </p>

          <div className="chicago-features">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Authentic Recipes</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Locally Sourced</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Crafted Drinks</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Cozy Atmosphere</span>
            </div>
          </div>
        </div>

        <div className="chicago-images" aria-label="Little Lemon chefs Mario and Adrian">
          <img src={marioAdrianA} alt="Two Little Lemon chefs working together in the kitchen" />
          <img src={marioAdrianB} alt="Two Little Lemon chefs smiling in the kitchen" />
        </div>
      </div>
    </section>
  );
}

export default Chicago;
