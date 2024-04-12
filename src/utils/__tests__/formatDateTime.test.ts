import { getFormattedTime } from "../formatDateTime";
describe("getFormattedTime", () => {
  const testData = [
    { date: "2023-02-16T06:24:41.220Z", expected: "07:24 a.m." },
    { date: "2023-02-16T21:46:41.646Z", expected: "22:46 p.m." },
    { date: "", expected: "Invalid date" },
  ];
  test.each(testData)("getFormattedTime($date)", ({ date, expected }) => {
    expect(getFormattedTime(date)).toBe(expected);
  });
});
