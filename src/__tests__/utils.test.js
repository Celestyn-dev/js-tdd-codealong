import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    const birthYear = 1984;
    const currentYear = new Date().getFullYear();
    const expectedAge = currentYear - birthYear;

    const ageOfPerson = currentAgeForBirthYear(birthYear);
    expect(ageOfPerson).toBe(expectedAge);
  });

  it("returns the current year for someone born in year 0", () => {
    const birthYear = 0;
    const currentYear = new Date().getFullYear();
    const expectedAge = currentYear;

    const age = currentAgeForBirthYear(birthYear);
    expect(age).toBe(expectedAge);
  });

  it("returns 0 for someone born this year", () => {
    const birthYear = new Date().getFullYear();
    const expectedAge = 0;

    const age = currentAgeForBirthYear(birthYear);
    expect(age).toBe(expectedAge);
  });

  it("throws an error for future birth years", () => {
    const birthYear = new Date().getFullYear() + 1;

    expect(() => currentAgeForBirthYear(birthYear)).toThrow("Birth year cannot be in the future");
  });
});
