/**
 * » Complicated objects (e.g., cars) aren't designed from scratch
• They reiterate existing designs
so An existing (partially or fully constructed) design is a
Prototype
» We make a copy (clone) the prototype and customize it
• Requires 'deep copy' support
» We make the cloning convenient (e.g., via a Factory)
 */

/**
 * Create copy of an fully or partially constructed object
 * There should be method object existing property and create a new object
 */

class Address
{
  constructor(suite, streetAddress, city)
  {
    this.suite = suite;
    this.streetAddress = streetAddress;
    this.city = city;
  }

  toString()
  {
    return `Suite ${this.suite}, ` +
      `${this.streetAddress}, ${this.city}`;
  }
}

class Employee // renamed
{
  constructor(name, address)
  {
    this.name = name;
    this.address = address; //!
  }

  toString()
  {
    return `${this.name} works at ${this.address}`;
  }

  greet()
  {
    console.log(
      `Hi, my name is ${this.name}, ` +
      `I work at ${this.address.toString()}` //!
    );
  }
}

class Serializer
{
  constructor(types){
    this.types = types;
  }

  markRecursive(object)
  {
    // anoint each object with a type index
    let idx = this.types.findIndex(t => {
      return t.name === object.constructor.name;
    });
    if (idx !== -1)
    {
      object['typeIndex'] = idx;

      for (let key in object)
      {
        if (object.hasOwnProperty(key) && object[key] != null)
          this.markRecursive(object[key]); // ^^^^^^^^^^ important
      }
    }
  }

  reconstructRecursive(object)
  {
    if (object.hasOwnProperty('typeIndex'))
    {
      let type = this.types[object.typeIndex];
      let obj = new type();
      for (let key in object)
      {
        if (object.hasOwnProperty(key) && object[key] != null) {
          obj[key] = this.reconstructRecursive(object[key]);
        }
      }
      delete obj.typeIndex;
      return obj;
    }
    return object;
  }

  clone(object)
  {
    this.markRecursive(object);
    let copy = JSON.parse(JSON.stringify(object));
    return this.reconstructRecursive(copy);
  }
}

class EmployeeFactory
{
  static _newEmployee(proto, name, suite)
  {
    let copy = EmployeeFactory.serializer.clone(proto);
    copy.name = name;
    copy.address.suite = suite;
    return copy;
  }

  static newMainOfficeEmployee(name, suite)
  {
    return this._newEmployee(
      EmployeeFactory.main, name, suite
    );
  }

  static newAuxOfficeEmployee(name, suite)
  {
    return this._newEmployee(
      EmployeeFactory.aux, name, suite
    );
  }
}

EmployeeFactory.serializer = new Serializer([Employee, Address]);

EmployeeFactory.main = new Employee(null,
  new Address(null, '123 East Dr', 'London'));
EmployeeFactory.aux = new Employee(null,
  new Address(null, '200 London Road', 'Oxford'));

// basically an object with default property
let john = EmployeeFactory.newMainOfficeEmployee('John', 4321);
let jane = EmployeeFactory.newAuxOfficeEmployee('Jane', 222);

console.log(john.toString());
console.log(jane.toString());

// New example

class Car {
  constructor(wheels, engine) {
    this.wheels = wheels;
    this.engine = engine;
  }
  start() {
      
  }
}


class CarPrototype {
    static clone(proto) {
        return new Car(proto.wheels, proto.engine);
    }
}

const c1 = new Car(4, 'V8');
const c2 = CarPrototype.clone(c1);
c1.wheels = 5;
