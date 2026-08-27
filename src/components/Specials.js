import { Link } from "react-router-dom";
import greekSalad from "../assets/greek-salad.jpg";
import bruschetta from "../assets/bruchetta.svg";
import lemonDessert from "../assets/lemon-dessert.jpg";

const specials = [
  {
    name: "Greek Salad",
    price: "$12.99",
    badge: "House Favorite",
    image: greekSalad,
    description:
      "A refreshing salad with crisp cucumbers, ripe tomatoes, Kalamata olives and authentic feta, finished with our signature house dressing.",
  },
  {
    name: "Bruschetta",
    price: "$5.99",
    badge: "Popular Starter",
    image: bruschetta,
    description:
      "Grilled artisan sourdough bread generously topped with diced tomatoes, fresh garlic, basil, and cold-pressed extra virgin olive oil.",
  },
  {
    name: "Lemon Dessert",
    price: "$5.00",
    badge: "Chef's Special",
    image: lemonDessert,
    description:
      "A delicate lemon cake with soft layers, infused with fresh citrus zest and topped with a light lemon glaze recipe passed down for generations.",
  },
];

function Specials() {
  return (
    <section className="section" aria-labelledby="specials-title">
      <div className="container">
        <div className="section-heading-row">
          <div>
            <h2 className="section-title" id="specials-title">This Week's Specials</h2>
            <p className="page-intro" style={{ margin: "4px 0 0" }}>
              Handpicked Mediterranean seasonal favorites, crafted fresh every day.
            </p>
          </div>
          <Link className="secondary-button" to="/menu">Online Menu →</Link>
        </div>

        <div className="specials-grid">
          {specials.map((special) => (
            <article className="special-card" key={special.name}>
              <div className="special-card-image-wrap">
                <span className="card-badge">{special.badge}</span>
                <img src={special.image} alt={special.name} />
              </div>
              <div className="special-card-body">
                <div className="card-heading-row">
                  <h3 className="card-title">{special.name}</h3>
                  <p className="price">{special.price}</p>
                </div>
                <p className="card-copy">{special.description}</p>
                <Link className="card-link" to="/order-online">
                  Order a delivery <span aria-hidden="true">🛵</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;
