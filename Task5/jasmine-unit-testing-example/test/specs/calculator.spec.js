const Calculator = require('../../app/calculator.js');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

describe('calculator', function() {
  let factorial, spy;

  beforeEach(() => {
    calculator = new Calculator();
    spy = chai.spy.on(calculator, 'calculator');
  });

  afterEach(() => {
    calculator = null;
  });

  it('should return 9 when called with numbers 3 and 6', function() {
    expect(calculator.add(3, 6)).to.be.equal(9);
  });

  it('should return 10 when called with numbers 2 and 5', function() {
    expect(calculator.multiply(2, 5)).to.be.equal(10);
  });

  it('should throw "Undefined Number!" when called with only number 7', function() {
    let callWithErrorAdd = () => calculator.add(7);
    let callWithErrorMultiply = () => calculator.multiply(7);
    expect(spy).to.be.a.spy;
    expect(callWithErrorAdd).to.throw('Undefined Number!');
    expect(callWithErrorMultiply).to.throw('Undefined Number!');
  });

  it('should throw "Not a Number!" when called with number 7 and string AAA ', function() {
    let callWithErrorAdd = () => calculator.add(7, "AAA");
    let callWithErrorMultiply = () => calculator.multiply(7, "AAA");
    expect(spy).to.be.a.spy;
    expect(callWithErrorAdd).to.throw('Not a Number!');
    expect(callWithErrorMultiply).to.throw('Not a Number!');
  });

  it('should throw "The parameter is null..." when called with null and number 5 ', function() {
    let callWithErrorAdd = () => calculator.add(null, 5);
    let callWithErrorMultiply = () => calculator.multiply(null, 5);
    expect(spy).to.be.a.spy;
    expect(callWithErrorAdd).to.throw('The parameter is null...');
    expect(callWithErrorMultiply).to.throw('The parameter is null...');
  });
});