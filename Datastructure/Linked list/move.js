// Move all occurrences of an element to end in a linked list

class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    } 
}

const node1 = new Node(6);
const node2 = new Node(6);
const node3 = new Node(7);
const node4 = new Node(6);
const node5 = new Node(3);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const move = (head, key) => {
    let prev = null;
    let current = head;
    let tail = current;

    while(tail.next) {
        tail = tail.next;
    }
    let stop = tail;

    while(current && current !== stop) {
        const next = current.next;
        if (current.data === key) {
            if (prev) prev.next = current.next;
            else head = head.next
            current.next = null;
            tail.next = current;
            tail = current;
        } else {
            prev = current;
        }
        current = next;
    }

    return head;
}

console.log(JSON.stringify(move(node1, 6)))