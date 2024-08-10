class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('Beep beep');
  }
}

// class Car extends Vehicle {
//   private drive = function (): void {
//     console.log('Vroom vroom');
//   };

//   hasDrivingCar() {
//     this.drive();
//   }

//   honkNow(): void {
//     this.honk();
//   }
// }

const vehicle = new Vehicle('orange');
vehicle.color;

// const car = new Car();
// car.hasDrivingCar();
// car.honkNow();
