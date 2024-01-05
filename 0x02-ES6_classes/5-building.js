/**
 * Building class represents a building with square footage.
 * Subclasses must extend this class and provide an implementation for the evacuationWarningMessage method.
 */
class Building {
  /**
   * Constructor for the Building class.
   * @param {number} sqft - The square footage of the building.
   */
  constructor(sqft) {
    // Ensure that the class is not instantiated directly
    if (this.constructor === Building) {
      // Check if the extended class overrides evacuationWarningMessage
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }

    // Set the square footage
    this.sqft = sqft;
  }

  /**
   * Setter for the square footage of the building.
   * @param {number} sqft - The new square footage value.
   * @throws {TypeError} - Throws an error if the provided value is not a number.
   */
  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = sqft;
  }

  /**
   * Getter for the square footage of the building.
   * @returns {number} - The square footage.
   */
  get sqft() {
    return this._sqft;
  }
}

export default Building;
