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
        return this;
    }
  
    multiply(number) {
        this.value = this.value * number;
        return this;
    }
  
    devide(number) {
        this.value = this.value / number;
        return this;
    }
  
    pow(number) {
  
        this.value = Math.pow(this.value, number);
        return this;
    }
  
    valueOf() {
        return eval(this.value);
      }
  }
  
  //module.exports = SmartCalculator;
  
  const calculator = new SmartCalculator(2);
  
  const value = calculator
      .add(2)
      .multiply(2);
  console.log(value);