class Stack {
    constructor(n) {
        this.top = 0;
        this.capacity = n;
        this.stack = new Array(n)
    }

    push(x) {
        this.stack[this.top] = x;
        this.top++
    }

    pop(){
        const v = this.stack[--this.top];
        return v;
    }
}

const stack = new Stack(5);
stack.push('h')
stack.push('e')
stack.push('l')
stack.push('l')
stack.push('o')

stack.pop()