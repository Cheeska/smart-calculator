class SmartCalculator {
  constructor(initialValue) {
    this.value = initialValue;
  }

  add(number) {
    this.value = this.value + number;
    return this;
  }
  
  subtract(number) {
      this.value = this.value - number;
      return this.value;
  }

  multiply(number) {
      this.value = this.value * number;
      return this.value;
  }

  devide(number) {
      this.value = this.value / number;
      return this.value;
  }

  pow(number) {

      this.value = Math.pow(this.value, number);
      return this.value;
  }
}

module.exports = SmartCalculator;

