// Pairwise swap elements of a given linked list

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

const swap = () => {
    let pointer1 = head;
    let pointer2 = head.next;
    while (pointer1.next !== null || pointer2) {
        [pointer1.data, pointer2.data] = [pointer2.data, pointer1.data]
        pointer1 = pointer2.next;
        pointer2 = pointer1.next
    } 


}

console.log(JSON.stringify(head));
swap()
console.log(JSON.stringify(head));