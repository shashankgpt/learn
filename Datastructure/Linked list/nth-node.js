// Write a function to get Nth node in a Linked List
class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    } 
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
node1.next = node2;
node2.next = node3;
let head = node1

const getNode = (pos) => {
    let i = 1;
    let node = head;
    while(i<pos) {
        node = node.next;
        i++
    }
    return node;
}

console.log(head);
console.log(getNode(2))