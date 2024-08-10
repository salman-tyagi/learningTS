interface Printable {
  summary(): string;
}

const oldCivic = {
  carName: 'Civic',
  year: 2000,
  isBroken: false,
  summary(): string {
    return `Name: ${this.carName}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My ${this.color} color drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (vehicle: Printable): void => {
  console.log(vehicle.summary());
};

printSummary(oldCivic);
printSummary(drink);
