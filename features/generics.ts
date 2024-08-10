class HoldNumbers {
  constructor(public collection: number[]) {}

  getElement(index: number): number {
    return this.collection[index];
  }
}

const holdNumbers = new HoldNumbers([1, 2, 4]);

class HoldStrings {
  collection: string[];

  constructor(collection: string[]) {
    this.collection = collection;
  }

  getElement(index: number): string {
    return this.collection[index];
  }
}

// Using generics as argument in class we can make usable code
const holdStrings = new HoldStrings(['a', 'b', 'c']);

class HoldAnything<T> {
  collection: T[];

  constructor(collection: T[]) {
    this.collection = collection;
  }

  get(index: number): T {
    return this.collection[index];
  }
}

new HoldAnything<string>(['d', 'e', 'f']);
new HoldAnything<number>([4, 5, 6]);

// Generics with functions
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['alpha', 'beta', 'gamma']);
printAnything<number>([8, 3, 5]);

// Generic constraints
class Car {
  print(): void {}
}

class House {
  print(): void {}
}

interface Printable {
  print(): void;
}

function classOfHouseOrCar<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].print());
  }
}

// classOfHouseOrCar([1, 2, 4]);
classOfHouseOrCar<House>([new House(), new House()]);
classOfHouseOrCar<Car>([new Car(), new Car()]);
