/* global fetchAPI */

const fallbackTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const getAvailableTimes = (date) =>
  typeof fetchAPI === "function" ? fetchAPI(date) : fallbackTimes;

export const initializeTimes = () => getAvailableTimes(new Date());

export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    const selectedDate = new Date(`${action.date}T00:00:00`);
    return getAvailableTimes(selectedDate);
  }

  return state;
};
