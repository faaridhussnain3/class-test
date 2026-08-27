import { Link } from "react-router-dom";

function ConfirmedBooking() {
  return (
    <section className="container confirmation-card" aria-labelledby="confirmation-title">
      <div className="confirmation-badge" aria-hidden="true">
        ✓
      </div>
      <h1 className="page-title" id="confirmation-title">Booking Confirmed!</h1>
      <p>Your reservation at Little Lemon has been successfully recorded.</p>
      <p style={{ fontSize: "16px", color: "var(--text-muted)", marginBottom: "36px" }}>
        A confirmation reminder has been prepared. We look forward to welcoming you for an exceptional Mediterranean dining experience!
      </p>
      <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
        <Link className="primary-button" to="/">Return Home</Link>
        <Link className="secondary-button" to="/menu">Explore Menu</Link>
      </div>
    </section>
  );
}

export default ConfirmedBooking;
