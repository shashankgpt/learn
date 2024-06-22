class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    }
}

const node1 = new Node(35);
const node2 = new Node(20);
const node3 = new Node(30);
const node4 = new Node(90);
const node5 = new Node(40);
const node6 = new Node(50);
const node7 = new Node(70);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

const sort = (head) => {
    let prev = head;
    let current = head.next
    let start = head;
    while(start) {
    while(current) {
        if(prev.data > current.data) {
            [prev.data, current.data] = [current.data, prev.data]
        }
        prev = current;
        current = current.next;
    }
    start = start.next;
}

    return head;
}

console.log(JSON.stringify(sort(node1)))