import { useEffect, useMemo, useState } from "react";
import { getTodayDateString } from "../utils/date";
import { validateBookingForm } from "../utils/bookingValidation";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState(availableTimes[0] || "");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("Birthday");
  const [submitError, setSubmitError] = useState("");

  const today = getTodayDateString();

  useEffect(() => {
    if (!availableTimes.includes(time)) {
      setTime(availableTimes[0] || "");
    }
  }, [availableTimes, time]);

  const formData = useMemo(
    () => ({ date, time, guests: Number(guests), occasion }),
    [date, time, guests, occasion]
  );

  const isFormValid = validateBookingForm({ date, time, guests, occasion });

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    setSubmitError("");

    dispatch({
      type: "date-change",
      date: selectedDate,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitError("");

    if (!isFormValid) {
      setSubmitError("Please complete all reservation fields with valid values.");
      return;
    }

    const wasSubmitted = submitForm(formData);

    if (!wasSubmitted) {
      setSubmitError("We could not complete your reservation. Please try again.");
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate={false}>
      <fieldset>
        <legend>
          <span>Reservation Details</span>
        </legend>

        <div className="form-grid-2">
          <div className="form-field">
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              name="date"
              value={date}
              min={today}
              onChange={handleDateChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="10"
              step="1"
              value={guests}
              onChange={(event) => setGuests(event.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="res-time">
            <span>Choose time</span>
            {time && <span style={{ fontSize: "14px", color: "var(--primary-green)", fontWeight: 800 }}>Selected: {time}</span>}
          </label>
          <select
            id="res-time"
            name="time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
            required
          >
            {availableTimes.length === 0 ? (
              <option value="">No times available</option>
            ) : (
              availableTimes.map((availableTime) => (
                <option key={availableTime} value={availableTime}>
                  {availableTime}
                </option>
              ))
            )}
          </select>

          {availableTimes.length > 0 && (
            <div className="time-slots-grid" aria-label="Quick time selection">
              {availableTimes.map((t) => (
                <button
                  type="button"
                  key={t}
                  className={`time-slot-pill ${time === t ? "selected" : ""}`}
                  onClick={() => setTime(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={occasion}
            onChange={(event) => setOccasion(event.target.value)}
            required
          >
            <option value="Birthday">Birthday</option>
            <option value="Engagement">Engagement</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>
      </fieldset>

      {submitError && (
        <div className="form-error" role="alert">
          <span>⚠️</span>
          <span>{submitError}</span>
        </div>
      )}

      <button
        className="primary-button"
        type="submit"
        disabled={!isFormValid}
        aria-disabled={!isFormValid}
      >
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;
