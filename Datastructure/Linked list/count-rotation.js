// Count rotations in sorted and rotated linked list

class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    } 
}

const node1 = new Node(15);
const node2 = new Node(18);
const node3 = new Node(5);
const node4 = new Node(8);
const node5 = new Node(11);
const node6 = new Node(12);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

const count = (head) => {
    let count = 0;
    let current = head;
    while(current.next) {
        if (current.data > current.next.data) {
            return count + 1;
        } 
        count++;
        current = current.next;
    }
    return count
}

console.log(count(node1))