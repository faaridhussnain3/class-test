import { getTodayDateString } from "./date";

export function validateBookingForm({ date, time, guests, occasion }) {
  const guestsNumber = Number(guests);
  const isDateValid = Boolean(date) && date >= getTodayDateString();
  const isTimeValid = Boolean(time);
  const isGuestCountValid =
    Number.isInteger(guestsNumber) && guestsNumber >= 1 && guestsNumber <= 10;
  const isOccasionValid = Boolean(occasion);

  return isDateValid && isTimeValid && isGuestCountValid && isOccasionValid;
}
