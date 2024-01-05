export default class Building {
  constructor(sqft) {
    // Check if the class is directly instantiated (not extended)
    if (this.constructor === Building) {
      throw new Error('Building class should be extended, not directly instantiated.');
    }

    // Check if the extended class overrides evacuationWarningMessage
    if (!('evacuationWarningMessage' in this.constructor.prototype)) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    // Set the square footage
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    // Ensure sqft is a number
    if (typeof value !== 'number') {
      throw new TypeError('Sqft must be a number');
    }

    this._sqft = value;
  }
}
