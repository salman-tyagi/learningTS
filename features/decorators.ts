class Boat {
  @testDecorator
  color: string = 'red';

  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  // Use decorators to change, modify any property or method of a targeted class
  @logError('Something went wrong!')
  pilot(): void {
    throw new Error();
    console.log('Swish');
  }
}

// Decorators
function logError(message: string) {
  return function (target: any, key: any, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = () => {
      try {
        method();
      } catch (err) {
        console.log(message);
      }
    };
  };
}

/**
 * We can't access property of class, because decorators invoke before making
 * an instance of class and we can not access */
function testDecorator(target: any, key: any): void {
  console.log(target[key]); // undefined
  console.log(target.color); // undefined
}
