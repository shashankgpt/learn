// Delete N nodes after M nodes of a linked list

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

const deleteNode = (head, skipNode, deleteNode) => {
let skipNo = skipNode;
let deleteNo = deleteNode;
let current = head;
let previous = head;

while(current) {
    let newCurrent = current.next
    let newPrev = current;
    if(skipNo === 0 && deleteNo === 0) {
        skipNo = skipNode - 1;
        deleteNo = deleteNode;
        console.log(skipNo, deleteNo, current)
    } else if(skipNo === 0 && deleteNo !== 0) {
            deleteNo = deleteNo -1;
            newPrev = previous;
            newCurrent = current.next ? current.next : null;
            newPrev.next = newCurrent;
            console.log('del',skipNo, deleteNo, current)
    } else {
        skipNo = skipNo -1;
        console.log(skipNo, deleteNo, current)
    }
    previous = newPrev;
    current = newCurrent;
    
}

console.log(JSON.stringify(head));
return head;

}

deleteNode(head, 3, 2);