import { useState } from "react";
import { Link } from "react-router-dom";
import greekSalad from "../assets/greek-salad.jpg";
import bruschetta from "../assets/bruchetta.svg";
import lemonDessert from "../assets/lemon-dessert.jpg";

const menuItems = [
  {
    id: 1,
    name: "Greek Salad",
    category: "Starters",
    price: "$12.99",
    badge: "Popular",
    image: greekSalad,
    description: "Crisp cucumbers, vine tomatoes, olives, red onion, and creamy feta cheese with olive oil dressing."
  },
  {
    id: 2,
    name: "Bruschetta",
    category: "Starters",
    price: "$5.99",
    badge: "Best Seller",
    image: bruschetta,
    description: "Grilled garlic sourdough bread topped with sweet tomatoes, fresh basil, and balsamic reduction."
  },
  {
    id: 3,
    name: "Mediterranean Grilled Salmon",
    category: "Mains",
    price: "$22.50",
    badge: "Chef Choice",
    image: greekSalad,
    description: "Wild salmon fillet grilled with lemon herbs, served alongside wild rice and roasted asparagus."
  },
  {
    id: 4,
    name: "Lemon Dessert",
    category: "Desserts",
    price: "$5.00",
    badge: "Signature",
    image: lemonDessert,
    description: "Traditional lemon sponge cake layered with tangy lemon curd and topped with candied citrus."
  },
  {
    id: 5,
    name: "Baklava Special",
    category: "Desserts",
    price: "$6.50",
    badge: "Traditional",
    image: lemonDessert,
    description: "Crispy phyllo pastry layered with chopped pistachios and sweetened with spiced honey syrup."
  },
  {
    id: 6,
    name: "Fresh Mint Lemonade",
    category: "Beverages",
    price: "$4.50",
    badge: "Refreshing",
    image: bruschetta,
    description: "House-made lemonade blended with organic crushed mint leaves and sparkling spring water."
  }
];

const categories = ["All", "Starters", "Mains", "Desserts", "Beverages"];

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="page-shell" aria-labelledby="menu-page-title">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <h1 className="page-title" id="menu-page-title">Our Menu</h1>
            <p className="page-intro">
              Explore authentic Mediterranean dishes crafted with fresh, local ingredients.
            </p>
          </div>

          <div style={{ maxWidth: "320px", width: "100%" }}>
            <input
              type="search"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 18px",
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--border-light)",
                fontSize: "15px",
                outline: "none"
              }}
            />
          </div>
        </div>

        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-button ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="order-grid">
          {filteredItems.map((item) => (
            <article className="special-card" key={item.id}>
              <div className="special-card-image-wrap">
                <span className="card-badge">{item.badge}</span>
                <img src={item.image} alt={item.name} />
              </div>
              <div className="special-card-body">
                <div className="card-heading-row">
                  <h3 className="card-title">{item.name}</h3>
                  <p className="price">{item.price}</p>
                </div>
                <p className="card-copy">{item.description}</p>
                <Link className="secondary-button" to="/order-online" style={{ minHeight: "44px", width: "100%" }}>
                  Order Online 🛵
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MenuPage;
