class Parent {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    sleep() {}
    goToWork() {}
    eat() {}
    cook() {}
}
// wrong child can't go to work
class child extends Parent {

}

// fix will be in LSP.js
class Human {
    sleep() {}
    name() {}
    eat() {}
}

class Parent extends Human {}
class child extends Human {}