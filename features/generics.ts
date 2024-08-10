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
