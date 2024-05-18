/**
 * so You are calling foo.Bar)
so This assumes that foo is in the same process as Bar
What if, later on, you want to put all Foo-related o1
into a separate process
• Can you avoid changing your code?
Proxy to the rescue!
• Same interface, entirely different behavior
so This is called a communication proxy
• Other types: logging, virtual, guarding, ...
 * 1. Value Proxy, 2. Property Proxy, 3. Protection Proxy, 4. Virtual Proxy
 * 
 */

/** Value Proxy */
/** Value Proxy */

class Percentage
{
  constructor(percent)
  {
    this.percent = percent; // 0 to 100
  }

  toString() // typecast 
  {
    return `${this.percent}%`;
  }

  valueOf() // typecast to number
  {
    return this.percent/100;
  }
}

let fivePercent = new Percentage(5);
console.log(`${fivePercent} of 50 is ${50*fivePercent}`);

/** Property Proxy */

class Property
{
  constructor(value, name='')
  {
    this._value = value;
    this.name = name;
  }

  get value() { return this._value; }
  set value(newValue)
  {
    if (this._value === newValue)
      return;
    console.log(`Assigning ${newValue} to ${this.name}`);
    this._value = newValue;
  }
}

class Creature
{
  constructor()
  {
    this._agility = new Property(10, 'agility');
  }

  get agility() { return this._agility.value; }
  set agility(value) {
    this._agility.value = value;
  }
}

let c = new Creature();
c.agility = 12;
c.agility = 13;

/** Protection Proxy */
class Car
{
  drive()
  {
    console.log('Car being driven');
  }
}

class CarProxy
{
  constructor(driver)
  {
    this.driver = driver;
    this._car = new Car();
  }

  drive()
  {
    if (this.driver.age >= 16)
      this._car.drive();
    else
      console.log('Driver too young');
  }
}

class Driver
{
  constructor(age)
  {
    this.age = age;
  }
}

let car = new Car();
car.drive();

let car2 = new CarProxy(new Driver(12)); // try 22
car2.drive();

/** Virtual Proxy */

class Image
{
  constructor(url)
  {
    this.url = url;
    console.log(`Loading image from ${this.url}`);
  }

  draw()
  {
    console.log(`Drawing image ${this.url}`);
  }
}

class LazyImage
{
  constructor(url)
  {
    this.url = url;
  }

  draw()
  {
    if (!this.image)
      this.image = new Image(this.url);
    this.image.draw();
  }
}

function drawImage(img)
{
  console.log('About to draw the image');
  img.draw();
  console.log('Done drawing the image');
}

let img = new LazyImage('http://pokemon.com/pikachu.png');
drawImage(img);