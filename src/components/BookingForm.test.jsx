// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import BookingForm from "./BookingForm.jsx";

const availableTimes = ["17:00", "18:30", "20:00"];

const getToday = () => {
  const today = new Date();
  const timezoneOffset = today.getTimezoneOffset() * 60_000;
  return new Date(today.getTime() - timezoneOffset).toISOString().slice(0, 10);
};

const getYesterday = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const timezoneOffset = yesterday.getTimezoneOffset() * 60_000;
  return new Date(yesterday.getTime() - timezoneOffset).toISOString().slice(0, 10);
};

const renderBookingForm = (props = {}) => {
  const dispatch = vi.fn();
  const submitForm = vi.fn();
  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
      submitForm={submitForm}
      {...props}
    />,
  );
  return { dispatch, submitForm };
};

afterEach(cleanup);

describe("BookingForm validation", () => {
  it("applies HTML5 validation attributes to every field", () => {
    renderBookingForm();
    const date = screen.getByLabelText("Choose date");
    const time = screen.getByLabelText("Choose time");
    const guests = screen.getByLabelText("Number of guests");
    const occasion = screen.getByLabelText("Occasion");

    expect(date.type).toBe("date");
    expect(date.required).toBe(true);
    expect(date.min).toBe(getToday());

    expect(time.tagName).toBe("SELECT");
    expect(time.required).toBe(true);
    expect(Array.from(time.options).map((option) => option.value)).toEqual([
      "",
      ...availableTimes,
    ]);

    expect(guests.type).toBe("number");
    expect(guests.required).toBe(true);
    expect(guests.min).toBe("1");
    expect(guests.max).toBe("10");
    expect(guests.step).toBe("1");

    expect(occasion.tagName).toBe("SELECT");
    expect(occasion.required).toBe(true);
  });

  it("enables submission when all booking values are valid", () => {
    renderBookingForm();

    expect(
      screen.getByRole("button", { name: "Make Your reservation" }).disabled,
    ).toBe(false);
    expect(screen.queryByRole("status")).toBeNull();
  });

  it.each(["0", "11", "1.5"])(
    "disables submission for an invalid guest count (%s)",
    (guestCount) => {
      renderBookingForm();
      fireEvent.change(screen.getByLabelText("Number of guests"), {
        target: { value: guestCount },
      });

      expect(
        screen.getByRole("button", { name: "Make Your reservation" }).disabled,
      ).toBe(true);
      expect(screen.getByRole("status")).toBeTruthy();
    },
  );

  it("disables submission when the selected date is before today", () => {
    renderBookingForm();
    fireEvent.change(screen.getByLabelText("Choose date"), {
      target: { value: getYesterday() },
    });

    expect(
      screen.getByRole("button", { name: "Make Your reservation" }).disabled,
    ).toBe(true);
  });

  it("disables submission when no reservation times are available", () => {
    renderBookingForm({ availableTimes: [] });

    expect(screen.getByLabelText("Choose time").value).toBe("");
    expect(
      screen.getByRole("button", { name: "Make Your reservation" }).disabled,
    ).toBe(true);
  });

  it("announces a reservation submission error", () => {
    renderBookingForm({
      submissionError: "We could not confirm your reservation. Please try again later.",
    });

    expect(screen.getByRole("alert").textContent).toContain(
      "We could not confirm your reservation.",
    );
  });

  it("submits the form when its values are valid", async () => {
    const user = userEvent.setup();
    const { submitForm } = renderBookingForm();

    await user.click(screen.getByRole("button", { name: "Make Your reservation" }));

    expect(submitForm).toHaveBeenCalledOnce();
    const formData = submitForm.mock.calls[0][0];
    expect(formData.get("date")).toBe(getToday());
    expect(formData.get("time")).toBe(availableTimes[0]);
    expect(formData.get("guests")).toBe("1");
    expect(formData.get("occasion")).toBe("Birthday");
  });
});
