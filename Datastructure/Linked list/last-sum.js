// Find the sum of last n nodes of the given Linked List

class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    } 
}

const node1 = new Node(10);
const node2 = new Node(6);
const node3 = new Node(8);
const node4 = new Node(4);
const node5 = new Node(12);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let sum = 0;
let count = 3;

const sumVal = (head) => {
    if (!head) {
        return null;
    }
    sumVal(head.next);
    if (count) {
        sum = sum + head.data; 
        count = count -1
    }
}
sumVal(node1);
console.log(sum)