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

const swap = (list,x,y) => {
    // searchOfX
    let currentX = list;
    let prevOfX = null;
    while(currentX.data !== x) {
        prevOfX = currentX;
        currentX = currentX.next;
    }

    // searchOfY
    let currentY = list;
    let prevOfY = null;
    while(currentY.data !== y) {
        prevOfY = currentY;
        currentY = currentY.next;
    }
    // check for adjacent
    if(prevOfX && prevOfX.data === y) {
        currentY.next = currentX.next;
        currentX.next = currentY;
        prevOfY.next = currentX;
    } else if (currentX.next && currentX.next.data ===y) {
        const nextOfX = currentX.next;
        currentX.next = nextOfX.next;
        nextOfX.next = currentX;
        prevOfX.next = nextOfX;
    } else {
        const currentYNext = currentY.next;
        currentY.next = currentX.next;
        if(prevOfX) {
            prevOfX.next = currentY;
        } else {
             list = currentY;
        }
        currentX.next = currentYNext
        if (prevOfY) {
            prevOfY.next = currentX;
        } else {
            list = currentX;
        }
        
    }
    return list;
}
const answer = swap(head, 4, 3)
// console.log(answer, answer.next)
console.log(JSON.stringify(answer));
// console.log(answer, answer.next, answer.next.next);