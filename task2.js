const car1 = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
};

const car2 = {
  color: "Blue",
  fuelType: "Petrol",
};

const mergedCar = {
  ...car1,
  ...car2,
};

console.log(mergedCar);
