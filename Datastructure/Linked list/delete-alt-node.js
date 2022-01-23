// Delete alternate nodes of a Linked List

class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    }
}

let node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);
const node8 = new Node(8);
const node9 = new Node(9);
const node10 = new Node(10);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
node8.next = node9;
node9.next = node10;

const alternateNode = (head) => {
    let deleteList = true;

    let prev = head;
    let current = head.next;

    while(current) {
        if(deleteList) {
            prev.next = current.next;
        }
        deleteList = !deleteList;
        prev = current;
        current = current.next
        
    }
    return head
}

console.log(JSON.stringify(alternateNode(node1)))