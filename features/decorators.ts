class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  // Use decorators to change, modify any property or method of a targeted class
  @logError
  pilot(): void {
    throw new Error();
    console.log('Swish');
  }
}

// Decorators
function logError(target: any, key: any, desc: PropertyDescriptor): void {
  const method = desc.value;

  desc.value = () => {
    try {
      method();
    } catch (err) {
      console.log('ERROR FOUND!');
    }
  };
}

new Boat().pilot();