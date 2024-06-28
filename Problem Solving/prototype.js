function Animal() {
    this.name = 'Meow'
}

Animal.__proto__.speak = function() {
    console.log('ok')
} 
Animal.prototype.death = function() {
    console.log('death')
}

Animal.speak() // will work
Animal.death() // won't work

const a = new Animal()
a.death() // will work
a.speak() // won't work

/**
 * __proto__ is a property of an instance object.
prototype is a property of a constructor function.
 */

function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(this.name + " makes a noise.");
};

let dog = new Animal("Dog");

console.log(dog.__proto__ === Animal.prototype);  // Output: true
console.log(Animal.__proto__ === Function.prototype);  // Output: true
console.log(Animal.prototype.__proto__ === Object.prototype);  // Output: true

dog.speak();  // Output: Dog makes a noise.
