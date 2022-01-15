// Given a singly linked list of characters, write a function that returns true if the given list is a palindrome, else false.

class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    } 
}

const node1 = new Node('R');
const node2 = new Node('E');
const node3 = new Node('V');
const node4 = new Node('I');
const node5 = new Node('V');
const node6 = new Node('E');
const node7 = new Node('R');
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
let head = node1;

const isPalidrome = (list) => {
    let mid = list;
    let current = list;

    while(current && current.next) {
        mid = mid.next
        current = current.next.next
    }
   
    let reverseCurrent = mid.next;
    let previous = mid;
    previous.next = null;
    // Reverse
    while(reverseCurrent) {
        const newNext = reverseCurrent.next;
        reverseCurrent.next = previous;
        previous = reverseCurrent;
        reverseCurrent = newNext;
    }
    while(previous || head) {
        if(previous.data === head.data) {
            previous = previous.next;
            head = head.next;
            continue;
        }
       return false
    }
    return true;
}
let left;
const isPalidromeRecur = (right) => {
    left = head;
    if(right === null) {
        return true;
    }
    let lastExist = isPalidromeRecur(right.next);
    if(lastExist === false) {
        return false;
    }
    console.log(left,'\n',right, '\n\n\n')
    const isPal = left.data === right.data
    left = left.next;
    return isPal;
}
console.log(isPalidromeRecur(head))