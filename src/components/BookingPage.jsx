import BookingForm from "./BookingForm";

const BookingPage = ({ availableTimes, dispatch, submitForm, submissionError }) => {
  return (
    <main className="booking_page">
      <div className="booking_intro">
        <h1>Reserve a table</h1>
        <p>Join us for a fresh Mediterranean meal in the heart of Chicago.</p>
      </div>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
        submissionError={submissionError}
      />
    </main>
  );
};

export default BookingPage;
