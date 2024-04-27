// Open Closed Principle



class Product {
    constructor(name, color, size) {
        this.name = name;
        this.color = color;
        this.size = size;
    }
}

// We will keep on modifying as filter increase
class Filter {
    filterByColor(products, color) {
        return products.filter(product => product.color === color);
    }

    filterBySize(products, size) {

    }

    filterBySizeAndColor(products, size, color) {
    }
}

// fixing it

class colorSpecification {
    constructor(color) {
        this.color = color;
    }

    isSatisfied(product) {
        return product.color === this.color;
    }
}

class sizeSpecification {
    constructor(size) {
        this.size = size;
    }

    isSatisfied(product) {
        return product.size === this.size;
    }
}


class andSpecification {
    constructor(...specs) {
        this.specs = specs;
    }

    isSatisfied(product) {
        return this.specs.every(spec => spec.isSatisfied(product));
    }
}
let Product = new Product("samsung", "black", "large");
let f1 = new colorSpecification("black");
let f2 = new sizeSpecification("large");
let filter = new andSpecification({f1, f2});
