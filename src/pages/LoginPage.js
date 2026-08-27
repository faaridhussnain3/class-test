import { useState } from "react";

function LoginPage() {
  const [activeTab, setActiveTab] = useState("login");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="page-shell">
      <div className="container">
        <div className="auth-card">
          <div className="auth-tabs">
            <button
              className={`auth-tab ${activeTab === "login" ? "active" : ""}`}
              onClick={() => { setActiveTab("login"); setSubmitted(false); }}
            >
              Sign In
            </button>
            <button
              className={`auth-tab ${activeTab === "register" ? "active" : ""}`}
              onClick={() => { setActiveTab("register"); setSubmitted(false); }}
            >
              Create Account
            </button>
          </div>

          {submitted ? (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div className="confirmation-badge">✨</div>
              <h2 className="section-title" style={{ fontSize: "32px" }}>
                {activeTab === "login" ? "Welcome Back!" : "Account Created!"}
              </h2>
              <p style={{ color: "var(--text-muted)", margin: "12px 0 24px" }}>
                {activeTab === "login"
                  ? "You have successfully signed in to your Little Lemon account."
                  : "Welcome to Little Lemon Rewards. You can now save your favorite dishes and reservations."}
              </p>
              <button className="primary-button" onClick={() => setSubmitted(false)} style={{ width: "100%" }}>
                Continue
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="booking-form" style={{ padding: 0, border: 0, boxShadow: "none" }}>
              <h2 style={{ fontFamily: "Markazi Text", fontSize: "36px", margin: "0 0 20px", color: "var(--highlight-dark)" }}>
                {activeTab === "login" ? "Sign In to Little Lemon" : "Join Little Lemon"}
              </h2>

              {activeTab === "register" && (
                <div className="form-field">
                  <label htmlFor="auth-name">Full Name</label>
                  <input type="text" id="auth-name" required placeholder="Jane Doe" />
                </div>
              )}

              <div className="form-field">
                <label htmlFor="auth-email">Email Address</label>
                <input type="email" id="auth-email" required placeholder="jane@example.com" />
              </div>

              <div className="form-field">
                <label htmlFor="auth-password">Password</label>
                <input type="password" id="auth-password" required placeholder="••••••••" />
              </div>

              <button className="primary-button" type="submit" style={{ width: "100%", marginTop: "12px" }}>
                {activeTab === "login" ? "Sign In →" : "Create Account →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
