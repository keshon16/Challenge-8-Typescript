// import Driveable interface
import Driveable from '../interfaces/Driveable.js';

// Vehicle class that implements Driveable interface
class Vehicle implements Driveable {
  // Declare properties of the Vehicle class
  make: string;
     model: string;
    year: number;
    color: string;
    engineSize: number;
    transmission: string;
    started: boolean;
    currentSpeed: number;
  static model: any;
  static make: any;

  

  // Constructor for the Vehicle class
  constructor(
    make: string,
    model: string,
    year: number,
    color: string,
    engineSize: number,
    transmission: string
  ) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.engineSize = engineSize;
    this.transmission = transmission;
    this.started = false;
    this.currentSpeed = 0;
  }

  // Method to print vehicle details
  printDetails(): void {
    console.log(`Vehicle started: ${this.started}`);
    console.log(`Vehicle current speed: ${this.currentSpeed} mph`);
    console.log(`Vehicle current make: ${this.make}`);
    console.log(`Vehicle current model: ${this.model}`);
    console.log(`Vehicle current year: ${this.year}`);
    console.log(`Vehicle current color: ${this.color} `);
    console.log(`Vehicle current engineSize: ${this.engineSize}` );
    console.log(`Vehicle current transmission ${this.transmission}`);
  }

  // Method to start the vehicle
  start(): void {
    this.started = true;
    console.log(`The ${this.year} ${this.make} ${this.model} is now starting and running`);
  }

  // Method to accelerate the vehicle
  accelerate(change: number): void {
    // Check if the vehicle is started
    if (this.started) {
      this.currentSpeed += change;
      console.log(`${this.make} ${this.model} to ${this.currentSpeed} mph`);
    } else {
      console.log('Start the vehicle first');
    }
  }

  // Method to decelerate the vehicle
  decelerate(change: number): void {
    // Check if the vehicle is started
    if (this.started) {
      this.currentSpeed -= change;
      console.log(`${this.make} ${this.model} decelerated to ${this.currentSpeed} mph`);
    } else {
      console.log('Start the vehicle first');
    }
  }

  // Method to stop the vehicle
  stop(): void {
    this.currentSpeed = 0;
    this.started = false;
    console.log('Vehicle stopped');
  }

  // Method to turn the vehicle
  turn(direction: string): void {
    // Check if the vehicle is started
    if (this.started) {
      console.log(`Vehicle turned ${direction}`);
    } else {
      console.log('Start the vehicle first');
    }
  }

  // Method to reverse the vehicle
  reverse(): void { 
    // Check if the vehicle is started
    if (this.started) {
      if (this.currentSpeed === 0)
      console.log('Vehicle is now in reverse');
    } else { 
      console.log('Vehicle must be stopped before reversing')
  } {
      console.log('Start the vehicle first');
    }
  }
}




// Export the Vehicle class
export default Vehicle;
