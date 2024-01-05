export default class Building {
  constructor(sqft) {
    // Ensure that the class is not instantiated directly
    if (this.constructor === Building) {
      throw new Error('Abstract class Building cannot be instantiated directly.');
    }

    // Check if the extended class overrides evacuationWarningMessage
    if (!('evacuationWarningMessage' in this.constructor.prototype)) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    // Set the square footage
    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Setter for sqft with type check
  set sqft(value) {
    if (typeof value !== 'number' && !(value instanceof Number)) {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = value;
  }
}
