// Nth node from the end of a Linked List
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
const node6 = new Node(6);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
let head = node1

const getNodeFromLast = (pos) => {
    let i = 1;
    let nodePointer1 = head;
    while(i<pos) {
        nodePointer1 = nodePointer1.next;
        i++;
    }
    let nodePointer2 = head;
    while(nodePointer1.next !== null) {
        nodePointer1 = nodePointer1.next;
        nodePointer2 = nodePointer2.next
    }
    return nodePointer2;
}

// console.log(head);
console.log(getNodeFromLast(3));