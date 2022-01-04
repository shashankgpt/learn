// Recursive function to print reverse of a Linked List

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

const reverseListPrint = (h) => {
    
    if(h) {
    reverseListPrint(h.next)
    console.log(h.data)
    }
}

console.log(JSON.stringify(reverseListPrint(node1)));