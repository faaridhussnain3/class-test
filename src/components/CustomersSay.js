const reviews = [
  { name: "Amina", initials: "AM", role: "Verified Diner", rating: 5, text: "Fresh food, friendly service and a very easy reservation experience. The lemon dessert was unforgettable!" },
  { name: "Daniel", initials: "DK", role: "Local Foodie", rating: 5, text: "The Greek salad was excellent and the atmosphere felt warm and relaxed. Ideal spot for family dinners." },
  { name: "Sofia", initials: "SR", role: "Regular Guest", rating: 4, text: "Great Mediterranean flavors and a welcoming team. The online reservation process was completely smooth." },
  { name: "Marcus", initials: "MJ", role: "First Time Guest", rating: 5, text: "Booking online was simple and the staff had our table ready on time. Outstanding food and hospitality." },
];

function CustomersSay() {
  return (
    <section className="section testimonials-section" aria-labelledby="testimonials-title">
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
          <h2 className="section-title" id="testimonials-title">Testimonials</h2>
          <p className="page-intro" style={{ margin: "8px auto 0" }}>
            Here is what our valued guests say about their dining experience at Little Lemon.
          </p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review) => (
            <article className="testimonial-card" key={review.name}>
              <div className="rating" aria-label={`${review.rating} out of 5 stars`}>
                <span aria-hidden="true">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</span>
              </div>
              <div className="reviewer-row">
                <span className="avatar" aria-hidden="true">{review.initials}</span>
                <div className="reviewer-info">
                  <strong>{review.name}</strong>
                  <span>{review.role}</span>
                </div>
              </div>
              <blockquote style={{ marginTop: "8px" }}>“{review.text}”</blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;
