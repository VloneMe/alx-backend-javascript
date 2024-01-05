export default class Building {
  constructor(sqft) {
    // Ensure that the class is treated as abstract
    if (new.target === Building) {
      throw new TypeError('Abstract class Building cannot be instantiated directly.');
    }

    // Store attributes with underscores
    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Abstract method to be implemented by subclasses
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
