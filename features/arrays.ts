const carMakers: string[] = ["tata", "maruti", "hyundai"];

const car = carMakers.pop();

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible array types
const flexibleArrays: (string | Date)[] = [new Date(), "2024-10-10"];

flexibleArrays.push("cat");
