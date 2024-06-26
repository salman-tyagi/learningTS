interface Reportable {
  // name: string;
  // year: number;
  // broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (vehicle: Reportable): void => {
  console.log(vehicle.summary());
};

printSummary(oldCivic);
printSummary(drink);
