import BookingForm from "../components/BookingForm";

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section className="page-shell" aria-labelledby="booking-page-title">
      <div className="container">
        <div className="booking-hero-card">
          <h1 className="page-title" id="booking-page-title">Reserve a Table</h1>
          <p className="page-intro">
            Choose your preferred date, time, party size and occasion. Available times
            update automatically when you select a date.
          </p>
        </div>

        <div className="booking-layout">
          <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />

          <aside className="booking-note-card" aria-label="Reservation information">
            <h2>Before You Book</h2>
            <ul className="booking-info-list">
              <li className="booking-info-item">
                <span className="booking-info-icon">👥</span>
                <div>
                  <strong>Party Size</strong>
                  <p>Reservations are available for parties of 1 to 10 guests.</p>
                </div>
              </li>

              <li className="booking-info-item">
                <span className="booking-info-icon">📅</span>
                <div>
                  <strong>Date Selection</strong>
                  <p>Bookings can be made for today or any future date.</p>
                </div>
              </li>

              <li className="booking-info-item">
                <span className="booking-info-icon">⏱️</span>
                <div>
                  <strong>Hold Time</strong>
                  <p>Tables are held for up to 15 minutes past the reservation time.</p>
                </div>
              </li>

              <li className="booking-info-item">
                <span className="booking-info-icon">🎉</span>
                <div>
                  <strong>Special Occasions</strong>
                  <p>Let us know if you're celebrating so we can make it memorable.</p>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default BookingPage;
