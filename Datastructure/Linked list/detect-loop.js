// Detect loop in a linked list
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
node5.next = node2;

let head = node1;

const detectLoopHashing = () => {
    let h = head;
    const set = new Set();
    while(h !== null) {
        if (set.has(h)) {
            return 'Detected'
        }
        set.add(h)
        h = h.next;
    }
    return 'Not Detected'
}

const detectLoopPointer = () => {
    let nodePointer1 = head;
    let nodePointer2 = head;
    while(nodePointer2 !== null) {
        nodePointer1 = nodePointer1.next;
        nodePointer2 = nodePointer2.next.next;
        console.log(nodePointer1, nodePointer2, '\n')
        if(nodePointer1 == nodePointer2) {
            return 'Detected';
        }
    }
    return 'Not  Detected';
}

console.log(detectLoopPointer())
// console.log(detectLoopHashing())