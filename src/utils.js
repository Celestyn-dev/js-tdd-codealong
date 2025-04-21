// src/utils.js

export function currentAgeForBirthYear(birthYear) {
    const currentYear = new Date().getFullYear();
  
    if (birthYear > currentYear) {
      throw new Error("Birth year cannot be in the future");
    }
  
    return currentYear - birthYear;
  }
  