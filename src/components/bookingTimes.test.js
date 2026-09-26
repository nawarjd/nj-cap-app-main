import { afterEach, describe, expect, it, vi } from "vitest";
import { initializeTimes, updateTimes } from "./bookingTimes.js";

const mockTimes = ["17:00", "18:30", "20:00"];

afterEach(() => vi.unstubAllGlobals());

describe("booking time helpers", () => {
  it("initializeTimes returns times from fetchAPI for today's date", () => {
    let requestedDate;
    vi.stubGlobal("fetchAPI", (date) => {
      requestedDate = date;
      return mockTimes;
    });

    expect(initializeTimes()).toEqual(mockTimes);
    expect(requestedDate).toBeInstanceOf(Date);
    expect(requestedDate.toDateString()).toBe(new Date().toDateString());
  });

  it("updateTimes fetches times for the date in the dispatched action", () => {
    const selectedDate = "2026-09-30";
    let requestedDate;
    vi.stubGlobal("fetchAPI", (date) => {
      requestedDate = date;
      return mockTimes;
    });

    expect(
      updateTimes([], { type: "UPDATE_TIMES", date: selectedDate }),
    ).toEqual(mockTimes);
    expect(requestedDate.getFullYear()).toBe(2026);
    expect(requestedDate.getMonth()).toBe(8);
    expect(requestedDate.getDate()).toBe(30);
  });

  it("updateTimes leaves state unchanged for other actions", () => {
    const currentTimes = ["19:00"];

    expect(updateTimes(currentTimes, { type: "OTHER_ACTION" })).toBe(currentTimes);
  });
});
