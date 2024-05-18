/**
 * Objects use other objects' fields/methods through
inheritance and composition
» Composition lets us make compound objects
• E.g., a mathematical expression composed of simple expressions; or
• A shape group made of several different shapes
so Composite design pattern is used to treat both single (scalar)
and composite objects uniformly
 */

/**
 * Composite
A mechanism for treating individual
(scalar) objects and compositions of
objects in a uniform manner.
https://www.geeksforgeeks.org/composite-design-pattern-javascript-design-patterns/
 */

class Component {
  print() {
    throw new Error("Override this method");
  }

  size() {
    throw new Error("Override this method");
  }
}

class File extends Component {
  constructor(name, size, location) {
    super();
    this.name = name;
    this.size = size;
    this.location = location;
  }

  print() {
    console.log(
      `The File with the name ${this.name} whose size is ${this.size} KB, present is ${this.location}`
    );
  }

  size() {
    return this.size;
  }
}

class Folder extends Component {
  constructor(name) {
    super();
    this.name = name;
    this.files = [];
  }

  add(file) {
    this.files.push(file);
  }

  delete(file) {
    const idx = this.children.indexOf(file);
    if (index !== -1) {
      this.files.splice(idx, 1);
    }
  }

  print() {
    // it is recursion
    console.log(`Folder: ${this.name}`);
    this.files.forEach((file) => {
      file.print();
    });
  }
}
const file = new File("document.txt", 10, "c:/users/downloads");
const folder = new Folder("users");
folder.add(file);

const root = new Folder("Root");
root.add(folder);

console.log("File system structure:");
root.print();


/**
 * New Example
 */

class SingleValue
{
  constructor(value)
  {
    this.value = value;
  }

  sum() {
    return this.value;
  }
}

class ManyValues
{
  constructor()
  {
    this.values = [];
  }

  push(value) {
    this.values.push(value);
  }

  sum() {
    return this.values.reduce((a, b) => a + b, 0);
  }
 }

function sum(values) {
  return values.reduce((a, b) => a + b.sum(), 0);
}