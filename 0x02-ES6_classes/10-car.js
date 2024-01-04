// Vroom

const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    // Creating a private symbol property for cloneCar
    this[cloneSymbol] = this.cloneCar.bind(this);
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  // Method to clone a car
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
