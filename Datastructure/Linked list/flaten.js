class Node {
    constructor(val, next = null, child = null) {
        this.data = val;
        this.next = next;
        this.child = child
    } 
}
// 10->5->12->7->11->4->20->13->17->6->2->16->9->8->3->19->15 
const node10 = new Node(10);
const node5 = new Node(5);
const node12 = new Node(12);
const node7 = new Node(7);
const node11 = new Node(11);
const node4 = new Node(4);
const node20 = new Node(20);
const node13 = new Node(13);
const node17 = new Node(17);
const node6 = new Node(6);
const node2 = new Node(2);
const node16 = new Node(16);
const node9 = new Node(9);
const node8 = new Node(8);
const node3 = new Node(3);
const node19 = new Node(19);
const node15 = new Node(15);

node10.next = node5
node10.child = node4;

node4.next = node20;
node20.next = node13;
node20.child = node2;

node13.child = node16;
node16.child = node3;

node17.next = node6;
node17.child = node9;

node9.next = node8;
node9.child = node19
node19.next = node15;

node5.next = node12;
node12.next = node7;
node7.next = node11;
node7.child = node17
node17.next = node6;

// console.log(JSON.stringify(node10))

const findTail = (node) => {
    let tail = node;
    while(tail.next) {
        tail = tail.next;
    }
    return tail;
}

const flaten = (head)=> {
let current = head;
let tail = findTail(head);

while(current) {
    if (current && current.child){
    tail.next = current.child;
    tail = findTail(tail);
    current.child = null;
    }
    current = current.next;
}
return head;

}

console.log(JSON.stringify(flaten(node10)));