import { initializeTimes, updateTimes } from "./Main";
import { fetchAPI } from "../utils/api";

jest.mock("../utils/api", () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));

describe("booking time reducer", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("initializeTimes returns a non-empty array from fetchAPI", () => {
    const mockedTimes = ["17:00", "18:30", "20:00"];
    fetchAPI.mockReturnValue(mockedTimes);

    const result = initializeTimes();

    expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
    expect(result).toEqual(mockedTimes);
    expect(result.length).toBeGreaterThan(0);
  });

  test("updateTimes calls fetchAPI using the selected date", () => {
    const mockedTimes = ["17:30", "19:00"];
    fetchAPI.mockReturnValue(mockedTimes);

    const result = updateTimes(["17:00"], {
      type: "date-change",
      date: "2030-06-15",
    });

    expect(fetchAPI).toHaveBeenCalledTimes(1);
    const calledDate = fetchAPI.mock.calls[0][0];
    expect(calledDate.getFullYear()).toBe(2030);
    expect(calledDate.getMonth()).toBe(5);
    expect(calledDate.getDate()).toBe(15);
    expect(result).toEqual(mockedTimes);
  });

  test("updateTimes returns existing state for unrelated actions", () => {
    const state = ["17:00", "18:00"];
    expect(updateTimes(state, { type: "unknown" })).toBe(state);
    expect(fetchAPI).not.toHaveBeenCalled();
  });
});
