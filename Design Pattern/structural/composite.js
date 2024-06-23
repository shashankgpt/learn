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
Imagine you are creating a drawing application where you can 
draw basic shapes (like circles and rectangles) and combine these 
shapes to create complex drawings (like a house made of rectangles and 
  triangles).
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

/**
 * Imagine you are creating a drawing application where you can draw basic shapes (like circles and rectangles) and combine these shapes to create complex drawings (like a house made of rectangles and triangles).
 */
class Graphic {
  draw() {
    throw "This method should be overridden!";
  }
}

class Circle extends Graphic {
  draw() {
    console.log("Drawing a Circle");
  }
}

class Rectangle extends Graphic {
  draw() {
    console.log("Drawing a Rectangle");
  }
}
class CompositeGraphic extends Graphic {
  constructor() {
    super();
    this.children = [];
  }

  add(graphic) {
    this.children.push(graphic);
  }

  remove(graphic) {
    const index = this.children.indexOf(graphic);
    if (index > -1) {
      this.children.splice(index, 1);
    }
  }

  draw() {
    for (const child of this.children) {
      child.draw();
    }
  }
}

// Create individual shapes (leaves)
const circle1 = new Circle();
const circle2 = new Circle();
const rectangle = new Rectangle();

// Create a composite graphic
const drawing = new CompositeGraphic();
drawing.add(circle1);
drawing.add(circle2);
drawing.add(rectangle);

// Draw the entire composite graphic
drawing.draw();
