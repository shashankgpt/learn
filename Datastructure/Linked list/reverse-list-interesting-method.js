// Iteratively Reverse a linked list using only 2 pointers (An Interesting Method)

class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    } 
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const reverseList = () => {
    let prev = null;
    let current = node1;
    while(current) {
        const currentNext = current.next;
        current.next = prev;
        prev = current; // need to increment prev as well
        current = currentNext;
    }
    return prev;
}

console.log(JSON.stringify(reverseList()));