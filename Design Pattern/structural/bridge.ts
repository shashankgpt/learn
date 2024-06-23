/**
 * https://dev.to/coly010/the-bridge-pattern-design-patterns-meet-the-frontend-46fc
 * Bridge
 * Instead of implementing multiple functions in the child. we takeaway implementation
 * to parent class
 * Here we have an abstraction and concrete implementation
 */

// Define an interface for the Implementation
interface Color {
    log(): string;
}

// Define an abstract class for the Abstraction
abstract class Shape {
    color: Color;

    constructor(color: Color) {
        this.color = color;
    }

    logMe() {
        console.log(`I am a ${this.color.log()} shape.`);
    }
}

// Create a Concrete Implementation
class Red implements Color {
    log() {
        return 'red';
    }
}

class Blue implements Color {
    log() {
        return 'blue';
    }
}

// Create a refined Abstraction that behaves slightly differently
class Circle extends Shape {
    constructor(color: Color) {
        super(color);
    }

    logMe() {
        console.log(`I am a ${this.color.log()} circle.`);
    }
}

class Triangle extends Shape {
    constructor(color: Color) {
        super(color);
    }
}

// Instantiate the circle with a concrete implementation
const circle = new Circle(new Red());
const triangle = new Triangle(new Blue());

circle.logMe();
// Output: I am a red circle.

triangle.logMe();
// Output: I am a blue shape



// Simply create a new Concrete Implementation, and supply that to the UserService instead:
// Create new implementation
export class MongoDBService implements IApiService {
   // etc
}

// Swap out the api service
const apiService = new MongoDbService();

// No need to change the rest!
const userService = new UserService(apiService);

userService.addNewUser({...} as User);