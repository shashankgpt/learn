// Remove duplicates from a sorted linked list

class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    } 
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(2);
const node4 = new Node(3);
const node5 = new Node(4);
const node6 = new Node(4);
const node7 = new Node(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
const head = node1;

const removeDuplicate = () => {
    let prevPointer = head;
    let nextPointer = head.next;
    while(nextPointer.next !== null) {
        if(prevPointer.data === nextPointer.data) {
            prevPointer.next = nextPointer.next
        }
        prevPointer = nextPointer;
        nextPointer = nextPointer.next
    }
}
console.log(JSON.stringify(head))
removeDuplicate()
console.log(JSON.stringify(head))
// node5.next = node2;