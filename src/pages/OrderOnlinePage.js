import { useState } from "react";
import greekSalad from "../assets/greek-salad.jpg";
import bruschetta from "../assets/bruchetta.svg";
import lemonDessert from "../assets/lemon-dessert.jpg";

const items = [
  { id: 1, name: "Greek Salad", price: 12.99, image: greekSalad, description: "Crisp vegetables, olives, feta cheese, olive oil dressing." },
  { id: 2, name: "Bruschetta", price: 5.99, image: bruschetta, description: "Grilled bread with tomato, garlic, and fresh basil." },
  { id: 3, name: "Lemon Dessert", price: 5.00, image: lemonDessert, description: "Delicate lemon cake with citrus zest glaze." },
];

function OrderOnlinePage() {
  const [cart, setCart] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  const addToCart = (id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[id] > 1) {
        updated[id] -= 1;
      } else {
        delete updated[id];
      }
      return updated;
    });
  };

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  const totalPrice = items.reduce((sum, item) => {
    return sum + (cart[item.id] || 0) * item.price;
  }, 0);

  const handleCheckout = () => {
    setOrderPlaced(true);
    setCart({});
  };

  return (
    <section className="page-shell">
      <div className="container">
        <div style={{ marginBottom: "32px" }}>
          <h1 className="page-title">Order Online</h1>
          <p className="page-intro">Select your dishes for fast Mediterranean delivery or pickup.</p>
        </div>

        {orderPlaced ? (
          <div className="confirmation-card" style={{ margin: "24px 0" }}>
            <div className="confirmation-badge">🛵</div>
            <h2 className="section-title">Order Received!</h2>
            <p>Your order has been placed successfully and is being prepared fresh in our kitchen.</p>
            <button className="primary-button" onClick={() => setOrderPlaced(false)}>
              Order More Items
            </button>
          </div>
        ) : (
          <div className="booking-layout">
            <div className="order-grid">
              {items.map((item) => {
                const qty = cart[item.id] || 0;
                return (
                  <div key={item.id} className="order-card">
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "var(--radius-md)" }}
                      />
                      <div className="card-heading-row" style={{ marginTop: "16px" }}>
                        <h3 className="card-title">{item.name}</h3>
                        <span className="price">${item.price.toFixed(2)}</span>
                      </div>
                      <p className="card-copy" style={{ fontSize: "14px", margin: "8px 0 16px" }}>
                        {item.description}
                      </p>
                    </div>

                    {qty === 0 ? (
                      <button className="primary-button" onClick={() => addToCart(item.id)} style={{ width: "100%" }}>
                        Add to Order +
                      </button>
                    ) : (
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "var(--highlight-light)", padding: "6px 12px", borderRadius: "var(--radius-md)" }}>
                        <button className="outline-button" onClick={() => removeFromCart(item.id)} style={{ minHeight: "36px", padding: "0 14px" }}>
                          -
                        </button>
                        <span style={{ fontWeight: 800, fontSize: "16px" }}>{qty} in cart</span>
                        <button className="primary-button" onClick={() => addToCart(item.id)} style={{ minHeight: "36px", padding: "0 14px" }}>
                          +
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <aside className="booking-note-card">
              <h2>Your Order</h2>
              {totalItems === 0 ? (
                <p style={{ color: "var(--text-muted)" }}>Your cart is empty. Add items to get started!</p>
              ) : (
                <div>
                  <ul className="booking-info-list" style={{ marginBottom: "20px" }}>
                    {items.map((item) => {
                      const qty = cart[item.id];
                      if (!qty) return null;
                      return (
                        <li key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div>
                            <strong>{item.name}</strong>
                            <div style={{ fontSize: "13px", color: "var(--text-muted)" }}>Qty: {qty}</div>
                          </div>
                          <span style={{ fontWeight: 700 }}>${(item.price * qty).toFixed(2)}</span>
                        </li>
                      );
                    })}
                  </ul>

                  <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: "16px", marginBottom: "20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 800, fontSize: "18px" }}>
                      <span>Subtotal</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>

                  <button className="primary-button" onClick={handleCheckout} style={{ width: "100%" }}>
                    Proceed to Checkout →
                  </button>
                </div>
              )}
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}

export default OrderOnlinePage;
