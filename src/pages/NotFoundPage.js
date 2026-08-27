import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="container confirmation-card" style={{ margin: "64px auto" }}>
      <div className="confirmation-badge" style={{ background: "rgba(244, 206, 20, 0.25)", color: "#b48500" }}>
        🍋
      </div>
      <h1 className="page-title">404 - Page Not Found</h1>
      <p style={{ fontSize: "18px", color: "var(--text-muted)", margin: "12px 0 32px" }}>
        Oops! The page you were looking for seems to have squeezed away.
      </p>
      <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
        <Link className="primary-button" to="/">Return Home</Link>
        <Link className="secondary-button" to="/menu">View Menu</Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
