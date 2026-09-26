import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import InfoSection from "./sections/InfoSection";
import WeekSpecialsSection from "./sections/WeekSpecialsSection";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import { useReducer, useState } from "react";
import { initializeTimes, updateTimes } from "./bookingTimes";

/* global submitAPI */

const SimplePage = ({ title, children }) => (
  <main className="simple_page">
    <h1>{title}</h1>
    {children}
  </main>
);

const Main = () => {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    undefined,
    initializeTimes,
  );
  const [submissionError, setSubmissionError] = useState("");

  const submitForm = (formData) => {
    setSubmissionError("");

    try {
      if (typeof submitAPI !== "function") {
        setSubmissionError(
          "Reservations are temporarily unavailable. Please try again later.",
        );
        return;
      }

      if (submitAPI(formData)) {
        navigate("/confirmed");
        return;
      }

      setSubmissionError(
        "We could not confirm your reservation. Please choose another time and try again.",
      );
    } catch {
      setSubmissionError(
        "We could not confirm your reservation. Please try again later.",
      );
    }
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<InfoSection />} />
      <Route path="/menu" element={<WeekSpecialsSection />} />
      <Route
        path="/reservations"
        element={
          <BookingPage
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
            submissionError={submissionError}
          />
        }
      />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
      <Route
        path="/order-online"
        element={
          <SimplePage title="Order Online">
            <p>Choose your favorite Little Lemon dishes for pickup or delivery.</p>
          </SimplePage>
        }
      />
      <Route
        path="/login"
        element={
          <SimplePage title="Login">
            <p>Sign in to manage your reservations and orders.</p>
          </SimplePage>
        }
      />
    </Routes>
  );
};

export default Main;
