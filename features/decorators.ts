/**
 * Use decorators to change, modify any property or method of a targeted class
 * We can also use decorator for the static methods and static properties as well
 */
@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  /**
   * Use decorators to change, modify any property or method of a targeted class
   * @param speed parameter argument for first index
   * @param hasValue parameter argument for second index
   */
  @logError('Something went wrong!')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator hasValue: boolean
  ): void {
    if (speed) {
      console.log('Swish');
    } else {
      throw new Error();
    }
  }
}

/**
 * Decorator factory function to customize arguments value
 * @param message argument for decorator factory function which return the decorator function
 * @param desc { value: body of method, enumerable: boolean, editable:
 * boolean, configurable: boolean 'able to delete' }
 * @returns decorator function
 */
function logError(message: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
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
 * an instance of class and only methods can be accessed easily due to
 * inheritance
 * @param target prototype
 * @param key method name as string
 */
function testDecorator(target: any, key: string): void {
  console.log(key);
}

/**
 * We can use decorator for the argument in methods of class as
 * parameterDecorator
 * @param target prototype of class
 * @param key the method, where decorator set
 * @param index index for the parameterDecorator for every argument
 */
function parameterDecorator(target: any, key: string, index: number): void {
  console.log(key);
  console.log(index);
}

/**
 * We can use decorator for class also
 * @param constructor typeof Boat
 */
function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}
