interface Vehicle {
  name: string;
  year: number;
  isBroken: boolean;
}

const oldCivic = {
  name: "Civic",
  year: 2000,
  isBroken: false,
};

const newMaruti = {
  name: "Maruti",
  year: 2021,
  isBroken: false,
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.isBroken}`);
};

printVehicle(oldCivic);
printVehicle(newMaruti);
