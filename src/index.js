class SmartCalculator {

    /*
  constructor(initialValue) {

      this.operators = new Array();
      this.stack = new Array();
      this.stack.push(initialValue);
  }

  add(number) {

      this.operators.push('+');
      this.stack.push(number);
     
      return this;
  }

  subtract(number) {
      this.operators.push('-');
      this.stack.push(number);
      return this;
  }

  multiply(number) {
      this.operators.push('*');
      this.stack.push(number);
      return this;
  }

  devide(number) {
      this.operators.push('/');
      this.stack.push(number);
      return this;
  }

  pow(number) {
      this.operators.push('^');
      this.stack.push(number);
      return this;
  }

  valueOf() {
      var firstNumber = 0;
      var secondNumber = 0;

      for(var i= 0; i<this.operators.length; i++){
          for(var j= 0; j<this.stack.length; j++){

              if(this.operators[i] === '+') {
                  this.stack[j] = this.stack[j+1]+this.stack[j-1];
                  this.stack.splice(j + 1, 1);
                  this.stack.splice(j - 1, 1);
                  j = 0;
              }
              if(this.operators[i] === '-') {
                  this.stack[j] = this.stack[j-1]-this.stack[j+1];
                  this.stack.splice(j + 1, 1);
                  this.stack.splice(j - 1, 1);
                  j = 0;
              }
              if(this.operators[i] === '*') {
                  this.stack[j] = this.stack[j+1]*this.stack[j-1];
                  this.stack.splice(j + 1, 1);
                  this.stack.splice(j - 1, 1);
                  j = 0;
              }
              if(this.operators[i] === '/') {
                  this.stack[j] = this.stack[j-1]/this.stack[j+1];
                  this.stack.splice(j + 1, 1);
                  this.stack.splice(j - 1, 1);
                  j = 0;
              }
              else{
                  continue;
              }
              console.log(this.stack);
              j=0;
          }
      }
      return this.stack[0];
    }
}

//module.exports = SmartCalculator;

const calculator = new SmartCalculator(2);

const value = calculator
    .add(2)
    .multiply(2);

console.log(value);
    */

    constructor(initialValue) {

        this.value = String(initialValue);
    }

    add(number) {
        this.value =  this.value + '+' + String(number);
        return this;
    }

    subtract(number) {
        this.value =  this.value + '-' + String(number);
        return this;
    }

    multiply(number) {
        this.value =  this.value + '*' + String(number);
        return this;
    }

    devide(number) {
        this.value =  this.value + '/' + String(number);
        return this;
    }

    pow(number) {
        this.value =  this.value + '**' + String(number);
        return this;
    }

    valueOf(){
        return eval(this.value);
    }
}

module.exports = SmartCalculator;