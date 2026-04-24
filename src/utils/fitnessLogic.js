export const calculateBMR = (weight, height, age, gender) => {
  let bmr = 10 * weight + 6.25 * height - 5 * age;
  return gender === "male" ? bmr + 5 : bmr - 161;
};

export const calculateTDEE = (bmr, activityLevel = 1.2) => {
  return Math.round(bmr * activityLevel);
};