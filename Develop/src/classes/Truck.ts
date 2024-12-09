// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';
import { constructor } from 'assert';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck { 
  vin: string;
     make: string;
     model: string;
    year: number;
    color: string;
    weight: number;
    topSpeed: number;
    wheels: Wheel[] | undefined;
    towingCapacity: number;
    

  // TODO: Declare properties of the Truck class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)

  // TODO: Create a constructor that accepts the properties of the Truck class
  constructor(
    vin: string,
     make: string, 
     model: string,
    year: number,
    color: string,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number,
    // TODO: The constructor should call the constructor of the parent class, Vehicle
  ) {
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
  }
}
    // TODO: The constructor should initialize the properties of the Truck class
   
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not

    constructor(wheels?: Wheel[]) {
      if (!wheels || wheels.length !== 4) {
          // Create 4 new default wheels
          this.wheels = [
              new Wheel(),
              new Wheel(),
              new Wheel(),
              new Wheel()
          ];
      } else {
          // Use the provided wheels
          this.wheels = wheels;  // Note: lowercase 'wheels', not 'Wheels'
      }
  }

     
   
   
  
  // TODO: Implement the tow method from the AbleToTow interface

  tow(Vehicle: Truck | Motorbike | Car): void {
    // TODO: Get the make an model of the vehicle if it exists
    const vehicleType = `${Vehicle.make} ${Vehicle.model}`,
    // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
    // TODO: If it is, log that the vehicle is being towed
    // TODO: If it is not, log that the vehicle is too heavy to be towed
    if (vehicle.weight <= this.towingCapacity) {
      console.log (`Now towing Vehicle`);
    } else {
      console.log(`Cannot tow Vehicle - exceeds maximum towing capacity of lbs`);
    }
  }

  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails(),
    console.log(`Truck VIN: ${this.vin}`),
    console.log(`Truck Make: ${this.make}`),
    console.log(`Truck Year: ${this.year}`),
    console.log(`Truck Weight: ${this.weight}`),
    console.log(`Truck Top Speed: ${this.topSpeed} mph`),
    console.log(`Truck Color: ${this.color}`),
    console.log(`Towing Capacity: ${this.towingCapacity}lbs`),
  }
    // TODO: The method should call the printDetails method of the parent class
    // TODO: The method should log the details of the Truck
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
this.wheels.forEach((wheel: 
  { getDiameter: () => any; getTireBrand: () => any; }, index: number) => {
  console.log(`Wheel ${index + 1}: ${wheel.getDiameter()} inch with ${wheel.getTireBrand()} tire`);
})

// Export the Truck class as the default export
export default Truck;
function tow(vehicle: any, arg1: number) {
  throw new Error('Function not implemented.');
}

function printDetails() {
  throw new Error('Function not implemented.');
}

