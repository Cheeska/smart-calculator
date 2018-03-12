class SmartCalculator {
  constructor(initialValue) {
    this.value = initialValue;
  }

  add(number) {
    return this.value + number;
  }
  
  subtract(number) {
    return  this.value - number;

  }

  multiply(number) {
    return this.value * number;
  }

  devide(number) {
    return this.value / number;
  }

  pow(number) {
    return Math.pow(this.value, number);
  }
}

module.exports = SmartCalculator;
