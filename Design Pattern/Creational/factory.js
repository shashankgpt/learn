/**
 * 
 * Avoid if else in constructor
 * 
 * Object creation logic becomes too convoluted
so Initializer is not descriptive
• Name is always _init__
• Cannot overload with same sets of arguments with different names
• Can turn into 'optional parameter hell'
» Wholesale object creation (non-piecewise, unlike Builder) can
be outsourced to
• A separate method (Factory Method)
• That may exist in a separate class (Factory)
• Can create hierarchy of factories with Abstract Factory
 */

/**
 * Create of object soley wholesale (not piecewise) creation of object
 */

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const async = require('async');

class HotDrink
{
  consume() {}
}

class Tea extends HotDrink
{
  consume() {
    console.log('This tea is nice with lemon!');
  }
}

class Coffee extends HotDrink
{
  consume()
  {
    console.log(`This coffee is delicious!`);
  }
}

class HotDrinkFactory
{
  prepare(amount) { /* abstract */ }
}

class TeaFactory extends HotDrinkFactory
{
  prepare(amount) {
    console.log(`Grind some beans, boil water, pour ${amount}ml`);
    return new Coffee();
  }
}

class CoffeeFactory extends HotDrinkFactory
{
  prepare(amount) {
    console.log(`Put in tea bag, boil water, pour ${amount}ml`);
    return new Tea();
  }
}

let AvailableDrink = Object.freeze({
  coffee: CoffeeFactory,
  tea: TeaFactory
});

class HotDrinkMachine
{
  constructor()
  {
    this.factories = {};
    for (let drink in AvailableDrink)
    {
      this.factories[drink] = new AvailableDrink[drink]();
    }
  }

  makeDrink(type)
  {
    switch (type)
    {
      case 'tea':
        return new TeaFactory().prepare(200);
      case 'coffee':
        return new CoffeeFactory().prepare(50);
      default:
        throw new Error(`Don't know how to make ${type}`);
    }
  }

  interact(consumer)
  {
    rl.question('Please specify drink and amount ' +
      '(e.g., tea 50): ', answer => {
      let parts = answer.split(' ');
      let name = parts[0];
      let amount = parseInt(parts[1]);
      let d = this.factories[name].prepare(amount);
      rl.close();
      consumer(d);
    });
  }
}

let machine = new HotDrinkMachine();
// rl.question('which drink? ', function(answer)
// {
//   let drink = machine.makeDrink(answer);
//   drink.consume();
//
//   rl.close();
// });
machine.interact(
  function (drink) {
    drink.consume();
  }
);