import Car from './car'; // Import the Car class from car.js

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor);

    // Private attributes with underscores
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  // Override the cloneCar method
  cloneCar() {
    // Return a new instance of the Car class with the same name and model
    return new Car(this._name, this._model);
  }
}

export default EVCar;
