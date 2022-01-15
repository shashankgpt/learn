// Given two lists sorted in increasing order, create and return a new list representing the intersection of the two lists. The new list should be made with its own memory — the original lists should not be changed. 

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
const node6 = new Node(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node6;
let head1 = node1;


const node5 = new Node(2);
const node7 = new Node(3);
const node8 = new Node(4);

node5.next = node7;
node7.next = node8;
let head2 = node5;

const intersectionNode = (head1, head2) => {
    let current1 = head1;
    let current2 = head2;
    let startNode;
    let listPointer
    while(current1 && current2) {
        if (current2.data === current1.data) {
            const addNode = new Node(current1.data);
            if (!startNode) {
                startNode = addNode;
                listPointer = addNode;
            } else {
                listPointer.next = addNode;
                listPointer = listPointer.next;
            }
            current1 = current1.next;
            current2 = current2.next;   
        } else if (current2.data > current1.data) {
            current1 = current1.next;
        } else {
            current2 = current2.next;
        }
    }
    return startNode;
}

console.log(intersectionNode(head1, head2));

