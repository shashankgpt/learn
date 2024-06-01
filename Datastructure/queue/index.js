class Queue {
    constructor(n) {
        this.front = this.rear = 0
        this.capacity = n;
        this.data = new Array(n)
    }

    enQueue(d) {
        if (this.capacity === this.rear) {
            console.log('full')
            return;
        }

        this.data[this.rear] = d;
        this.rear++
    }

    deQueue() {
        if(this.front === this.capacity) {
            console.log('empty')
            return;
        }
        return this.data[this.front++]
    }
}

const q = new Queue(4);
q.enQueue('h')
q.enQueue('e')
q.enQueue('l')
q.enQueue('l')

q.deQueue()
