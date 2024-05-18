/**
 * Adapter
 * Electrical devices have different interfaces
 * We cannot modify our gadgets to support every sockets
 * We need special devices to bridge the gap
 */

class Calculator {
    operation(num1, num2, operation) {
      switch (operation) {
        case 'multiplication':
          return num1 * num2;
        case 'division':
          return num1 / num2;
        default:
          return NaN;
      }
    }
  }
  
  const calculator = new Calculator();
  const multi = calculator.operation(1, 2, 'multiplication');
  console.log(multi ); //output 2
  
  const div = calculator.operation(10, 2, 'division');
  console.log(div); //output 5


  class NewCalculator {
    add(num1, num2) {
      return num1 + num2;
    }
    div(num1, num2) {
      return num1 / num2;
    }
    mult(num1, num2) {
      return num1 * num2;
    }
  }
  
  // we need to use New Calculator but calling will be same

  // old calculator

  const calculator1 = new Calculator();
  const multi1 = calculator.operation(1, 2, 'multiplication');
  console.log(multi1 ); //output 2

  class CalculatorAdapter {
    constructor() {
      this.calculator = new Calculator();
    }
    operation(num1, num2, operation) {
      switch (operation) {
        case "add":
          return this.calculator.add(num1, num2);
        case "multiplication":
          return this.calculator.mult(num1, num2);
        case "division":
          return this.calculator.div(num1, num2);
        default:
          return NaN;
      }
    }
  }

  const adapter = new CalculatorAdapter();
  const multi2 = adapter.operation(1, 2, 'multiplication'); 
  console.log(multi2 ); //output 2

  // line 45-47 & 67-69 are same but method it is using of new calculator