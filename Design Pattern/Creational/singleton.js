class Singleton {
    constructor() {
      if (!Singleton.instance) {
        Singleton.instance = this;
      }
      return Singleton.instance;
    }
  }
  
  const instance3 = new Singleton();
  const instance4 = new Singleton();
  
  console.log(instance1 === instance2);
  
  
  class Singleton {
    constructor() {
      const i = this.constructor.instance
      if (i) {
        return i
      }
      this.constructor.instance = this
    }
  }
  
  const instance1 = new Singleton();
  const instance2 = new Singleton();
  
  console.log(instance1 === instance2);



  // monostate

  class CEO {
    get name() {
        return CEO._name
    }

    set name(name) {
        CEO._name = name
    }
}

CEO._name = 'John';// it becomes a proto

const ceo1 = new CEO();
ceo1.name = 'test1'

const ceo2 = new CEO();
ceo2.name = 'test2'

// Problems
const fs = require('fs');
const path = require('path');

class MyDatabase
{
  constructor()
  {
    const instance = this.constructor.instance;
    if (instance) {
      return instance;
    }

    this.constructor.instance = this;


    console.log(`Initializing database`);
    this.capitals = {};

    let lines = fs.readFileSync(
      path.join(__dirname, 'capitals.txt')
    ).toString().split('\r\n');

    for (let i = 0; i < lines.length/2; ++i)
    {
      this.capitals[lines[2*i]] = parseInt(lines[2*i+1]);
    }
  }

  getPopulation(city)
  {
    // possible error handling here
    return this.capitals[city];
  }
}

// ↑↑↑ low-level module

// ↓↓↓ high-level module

class SingletonRecordFinder
{
  totalPopulation(cities)
  {
    return cities.map(
      city => new MyDatabase().getPopulation(city)
    ).reduce((x,y) => x+y);
  }
}

class ConfigurableRecordFinder
{
  constructor(database)
  {
    this.database = database;
  }

  totalPopulation(cities)
  {
    return cities.map(
      city => this.database.getPopulation(city)
    ).reduce((x,y) => x+y);
  }
}

class DummyDatabase
{
  constructor()
  {
    this.capitals = {
      'alpha': 1,
      'beta': 2,
      'gamma': 3
    };
  }

  getPopulation(city)
  {
    // possible error handling here
    return this.capitals[city];
  }
}

describe('singleton database', function()
{
  it('is a singleton', function()
  {
    const db1 = new MyDatabase();
    const db2 = new MyDatabase();
    expect(db1).toBe(db2);
  });

  it('calculates total population', function()
  {
    let rf = new SingletonRecordFinder();
    let cities = ['Seoul', 'Mexico City'];
    let tp = rf.totalPopulation(cities);
    expect(tp).toEqual(17400000+17500000);
  });

  it('calculates total population better', function()
  {
    let db = new DummyDatabase();
    let rf = new ConfigurableRecordFinder(db);
    expect(rf.totalPopulation(['alpha', 'gamma'])).toEqual(4);
  });
});