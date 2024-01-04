// Methods, static methods, computed methods names..... MONEY

export default class Currency {
  constructor(code, name) {
    this._setCode(code);
    this._setName(name);
  }

  // Getter and setter for code
  get code() {
    return this._code;
  }

  _setCode(code) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  _setName(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Method to display full currency
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
