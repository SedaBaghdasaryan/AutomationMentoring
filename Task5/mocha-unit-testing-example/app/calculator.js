class Calculator {

  add(p1, p2) {
    this.validate(p1, p2);
    return p1 + p2;
  }

  validate(param1, param2) {
    if (this.isUndefined(param1) || this.isUndefined(param2)) {
      throw new Error('Undefined Number!');
    }

    if (this.isNull(param1) || this.isNull(param2)) {
      throw new Error('The parameter is null...');
    }

    if (isNaN(param1) || isNaN(param2)) {
      throw new Error('Not a Number!');
    }
  }

  isUndefined(param) {
    return typeof param === 'undefined';
  }

  isNull(param) {
    return param === null
  }

  multiply(p1, p2) {
    this.validate(p1, p2);
    return p1 * p2;
  }

}
module.exports = Calculator;