// Decimal Equivalent of Binary Linked List

class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    } 
}

const node1 = new Node(0);
const node2 = new Node(0);
const node3 = new Node(0);
const node4 = new Node(1);
const node5 = new Node(1);
const node6 = new Node(0);
const node7 = new Node(0);
const node8 = new Node(1);
const node9 = new Node(0);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
node8.next = node9;


let power = 0;
let sum = 0

const findValue = (head) => {
    if(!head) {
        return sum;
    }
    findValue(head.next); 
    sum = sum + ( head.data * Math.pow(2, power))
    power++;
    return sum;
}

console.log(findValue(node1));