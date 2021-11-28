// Swap nodes in a linked list without swapping data
// wrong logic - redo
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
    let node1 = null;

    let prevX = null;
    let currentX = head;
    while(currentX !== null && currentX.data !== x ) {
        prevX = currentX;
        currentX = currentX.next
    }

    let prevY = null;
    let currentY = head;
    while(currentY !== null && currentY.data !== y ) {
        prevY = currentY;
        currentY = currentY.next
    }
    let isNeighbours = currentX.next === currentY ? 1 : currentY.next === currentX ? 2 : 0;
    // Swaping pointer
    const nextOfY = currentY.next;
    currentY.next = currentX.next;
    currentX.next = nextOfY;

    // Handling adjacent
    if(isNeighbours) {
        if(isNeighbours === 1) {
            currentY.next = prevX.next;
            prevX.next = currentY;
        return;
        } else {
            currentX.next = prevY.next;
            prevY.next = currentX;
        return;
        }
    }
    
    // handling first and last
    if(prevX) {
        prevX.next = currentY;
    } else {
        head = currentY;
    } 
    if(prevY) {
        prevY.next = currentX;
    } else {
        head = currentX;
    } 
}
// console.log(JSON.stringify(head));
swap(5,4)
console.log(JSON.stringify(head));