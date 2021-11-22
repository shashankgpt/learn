// Move last element to front of a given Linked List - Re do

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
const node7 = new Node(7);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
let head = node1;

const lastToFront = () => {
    let node = head;
    let first = head;
    let last = null
    let prevLast = null
    while(node !==null) {
        if(node.next === null) {
            last = node;
        }
        if(!last) {
        prevLast = node;
        }
        node = node.next

    }
    const temp = first.next;
    first.next = null
   prevLast.next = first;
   last.next = temp
   head = last
}

lastToFront();

console.log(head.next.next.next.next)