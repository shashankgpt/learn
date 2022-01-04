// Reverse a Linked List in groups of given size | Set 1 (in progress)

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

// console.log(JSON.stringify(node1))

const groupReverse = (list, k) => {
    let current = list;
    let start = list;
    let prev = null;
    let counter = 1;
    while(current) {
        if(counter === k) {
            const currentNext = current.next;
            let list = reverseList(start, current);
            list.next = currentNext;
            console.log(prev, list);
            if(prev) {
            prev.next = list
            } else {
            prev = list;
            }
            
            prev = current;
            start = current.next;
            counter = 0;
        }
        counter = counter +1;
        current = current.next;
    }
    return prev;
}

const reverseList = (start, end) => {
    let current = start;
    let prev = null;
    while (current !== end) {
        const currentNext = current.next;
        current.next = prev;
        prev = current; // need to increment prev as well
        current = currentNext
    }
    current.next = prev;
    
    return current;
}

console.log(groupReverse(node1, 3));

console.log(JSON.stringify(node1))