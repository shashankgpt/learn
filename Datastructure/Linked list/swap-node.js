// Swap nodes in a linked list without swapping data

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
let head = node1

const swap = (x,y) => {
    if(x===y) {
        return;
    }
    let node = head;
    let node1 = null;
    let prevNode1 = null;
    while(node.next !==null) {
       if(node.data === x) {
        node1 = node;
       }
       if(!node1) {
       prevNode1 = node;
       }
       node = node.next;
    }
    node = head;
    let node2 = null;
    let prevNode2 = null;
    while(node.next !==null) {
        if(node.data === y) {
         node2 = node;
        }
        if(!node2) {
        prevNode2 = node;
        }
        node = node.next;
     }
     if(node1 !== null && node2 !== null) {
         const tempNode2Next = node2.next;
         node2.next = node1.next;
         prevNode1.next = node2;

         node1.next = tempNode2Next;
         prevNode2.next = node1
     }
}
console.log(JSON.stringify(head));
swap(2,6)
console.log(JSON.stringify(head));