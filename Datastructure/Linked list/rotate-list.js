// Rotate a Linked List

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

const reverseList = (head) => {
    let current = head;
    let secondLast;
    while(current.next !== null) {
        secondLast = current;
        current = current.next;
    }
    let last = secondLast.next;
    secondLast.next = null;
    last.next = head;
    return last;
}

const reverseListC = (head) => {
    let current = head;
    let secondLast;
    while(current.next !== null) {
        secondLast = current;
        current = current.next;
    }
    let last = secondLast.next
    last.next = head;
    secondLast.next = null;
    return last;
}


console.log(reverseListC(node1))