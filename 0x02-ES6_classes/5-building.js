/**
 * Building class represents an abstract building with square footage.
 * Subclasses must extend this class and provide an implementation for the evacuationWarningMessage method.
 */
export default class Building {
  /**
   * Constructor for the Building class.
   * @param {number} sqft - The square footage of the building.
   */
  constructor(sqft) {
    // Ensure that the class is not instantiated directly
    if (this.constructor === Building) {
      throw new Error('Abstract class Building cannot be instantiated directly.');
    }

    // Check if the extended class overrides evacuationWarningMessage
    const props = Object.getOwnPropertyNames(this.constructor.prototype);
    if (!props.find((e) => e === 'evacuationWarningMessage')) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    // Set the square footage
    this._sqft = sqft;
  }

  /**
   * Getter for the square footage of the building.
   * @returns {number} - The square footage.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Setter for the square footage of the building.
   * @param {number} value - The new square footage value.
   * @throws {TypeError} - Throws an error if the provided value is not a number.
   */
  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = value;
  }
}
