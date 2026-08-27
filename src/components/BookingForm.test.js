import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { getTodayDateString } from "../utils/date";

const defaultProps = {
  availableTimes: ["17:00", "18:00", "19:00"],
  dispatch: jest.fn(),
  submitForm: jest.fn(() => true),
};

beforeEach(() => {
  jest.clearAllMocks();
});

test("applies HTML5 validation attributes to booking fields", () => {
  render(<BookingForm {...defaultProps} />);

  const dateInput = screen.getByLabelText(/choose date/i);
  const timeSelect = screen.getByLabelText(/choose time/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  const occasionSelect = screen.getByLabelText(/occasion/i);

  expect(dateInput).toBeRequired();
  expect(dateInput).toHaveAttribute("type", "date");
  expect(dateInput).toHaveAttribute("min", getTodayDateString());

  expect(timeSelect).toBeRequired();

  expect(guestsInput).toBeRequired();
  expect(guestsInput).toHaveAttribute("type", "number");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
  expect(guestsInput).toHaveAttribute("step", "1");

  expect(occasionSelect).toBeRequired();
});

test("keeps submit button disabled when the form is invalid", () => {
  render(<BookingForm {...defaultProps} />);
  expect(screen.getByRole("button", { name: /make your reservation/i })).toBeDisabled();
});

test("enables submit when the form becomes valid", () => {
  render(<BookingForm {...defaultProps} />);

  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: getTodayDateString() },
  });

  expect(screen.getByRole("button", { name: /make your reservation/i })).toBeEnabled();
});

test("dispatches the selected date to update available times", () => {
  render(<BookingForm {...defaultProps} />);

  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: "2030-06-15" },
  });

  expect(defaultProps.dispatch).toHaveBeenCalledWith({
    type: "date-change",
    date: "2030-06-15",
  });
});

test("submits valid form data", () => {
  render(<BookingForm {...defaultProps} />);

  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: getTodayDateString() },
  });
  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: "4" },
  });
  fireEvent.change(screen.getByLabelText(/occasion/i), {
    target: { value: "Anniversary" },
  });

  fireEvent.click(screen.getByRole("button", { name: /make your reservation/i }));

  expect(defaultProps.submitForm).toHaveBeenCalledWith(
    expect.objectContaining({
      date: getTodayDateString(),
      time: "17:00",
      guests: 4,
      occasion: "Anniversary",
    })
  );
});
