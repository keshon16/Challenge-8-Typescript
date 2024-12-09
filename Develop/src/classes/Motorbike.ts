// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[] = [];
  // TODO: Declare properties of the Motorbike class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])

  // TODO: Create a constructor that accepts the properties of the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[] = []

  ) { 
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
  }
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Motorbike class
    // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
    if (wheels: number, length: number): boolean {
      if (wheels === 2 && length > 0) {
        return true;
      }
      return false;
    }

    

  // TODO: Implement the wheelie method
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
Wheelie(): void {
  console.log(`Moterbike ${this.make} ${this.model} is doing a wheelie`),
}
}
  // TODO: Override the printDetails method from the Vehicle class
  // TODO: The method should call the printDetails method of the parent class
  // TODO: The method should log the details of the Motorbike
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
class motorbike {
    // Add void return type
    printDetails(): void {
      console.log(`Motorbike VIN: ${this.vin}`);
      console.log(`Motorbike Make: ${this.make}` );
      console.log(`Motorbike Year: ${this.year}`);
      console.log(`Motorbike Color: ${this.color}`);
      console.log(`Motorbike Model: ${this.model}`);
      console.log(`Motorbike Weight: ${this.weight}`);
      console.log(`Motorbike topSpeed:${this.topSpeed}`);
      console.log(`Motorbike Wheels: ${this.wheels}`);
        
    }
  
  
  }

// Export the Motorbike class as the default export
export default Motorbike;


