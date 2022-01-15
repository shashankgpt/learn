// Reverse a Linked List in groups of given size
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
const node8 = new Node(8);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
let head = node1

const reverseAlternative = (list, k) => {
    let start = null;
    let current = list;
    let i = 0;
    while(current) {
        i = i + 1;
        if(i===k || !current.next) {
           const newStart = reverseList(start, current, k);
           start = newStart;
           current = newStart;
           i = 0
        }
        current = current.next;
    }
    return head; 
}

const reverseList = (prev, end, k) => {
    let previousNode = end.next || null;
    let newCurrent = prev ?  prev.next: head;
    let startingNode = prev ?  prev.next: head;
    let i = 0;
    while(newCurrent && i<k) {
        i = i + 1;
        const nextNode = newCurrent.next;
        newCurrent.next = previousNode;
        previousNode = newCurrent;
        newCurrent = nextNode;
    }
    if (!prev) {
        head = previousNode;
    } else {
        prev.next = previousNode;
    }
    return startingNode;
}

console.log("\n\nFinal",JSON.stringify(reverseAlternative(head,4)));