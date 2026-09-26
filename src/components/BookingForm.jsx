import { useState } from "react";

const getToday = () => {
  const today = new Date();
  const timezoneOffset = today.getTimezoneOffset() * 60_000;
  return new Date(today.getTime() - timezoneOffset).toISOString().slice(0, 10);
};

const BookingForm = ({ availableTimes, dispatch, submitForm, submissionError }) => {
  const [date, setDate] = useState(getToday);
  const [time, setTime] = useState(availableTimes[0] ?? "");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("Birthday");
  const selectedTime = availableTimes.includes(time)
    ? time
    : availableTimes[0] ?? "";
  const today = getToday();
  const guestCount = Number(guests);
  const isFormValid =
    date >= today &&
    availableTimes.includes(selectedTime) &&
    Number.isInteger(guestCount) &&
    guestCount >= 1 &&
    guestCount <= 10 &&
    ["Birthday", "Anniversary"].includes(occasion);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isFormValid) return;
    submitForm(new FormData(event.currentTarget));
  };

  return (
    <form className="booking_form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={date}
        min={today}
        onChange={(event) => {
          const selectedDate = event.target.value;
          setDate(selectedDate);
          dispatch({ type: "UPDATE_TIMES", date: selectedDate });
        }}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        value={selectedTime}
        onChange={(event) => setTime(event.target.value)}
        required
      >
        <option value="" disabled>
          {availableTimes.length > 0 ? "Choose a time" : "No times available"}
        </option>
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

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

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={occasion}
        onChange={(event) => setOccasion(event.target.value)}
        required
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      {!isFormValid && (
        <p className="form_validation_message" role="status">
          Choose a valid date and available time, and enter 1–10 guests.
        </p>
      )}

      {submissionError && <p className="form_error_message" role="alert">{submissionError}</p>}

      <button className="main_btn" type="submit" disabled={!isFormValid}>
        Make Your reservation
      </button>
    </form>
  );
};

export default BookingForm;
