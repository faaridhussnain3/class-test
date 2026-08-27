import { validateBookingForm } from "./bookingValidation";
import { getTodayDateString } from "./date";

describe("validateBookingForm", () => {
  const validData = {
    date: getTodayDateString(),
    time: "18:00",
    guests: 2,
    occasion: "Birthday",
  };

  test("returns true for valid booking data", () => {
    expect(validateBookingForm(validData)).toBe(true);
  });

  test("returns false when date is missing", () => {
    expect(validateBookingForm({ ...validData, date: "" })).toBe(false);
  });

  test("returns false when time is missing", () => {
    expect(validateBookingForm({ ...validData, time: "" })).toBe(false);
  });

  test("returns false when guests are below the minimum", () => {
    expect(validateBookingForm({ ...validData, guests: 0 })).toBe(false);
  });

  test("returns false when guests exceed the maximum", () => {
    expect(validateBookingForm({ ...validData, guests: 11 })).toBe(false);
  });

  test("returns false when occasion is missing", () => {
    expect(validateBookingForm({ ...validData, occasion: "" })).toBe(false);
  });
});
