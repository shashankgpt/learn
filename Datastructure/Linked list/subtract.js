// Subtract Two Numbers represented as Linked Lists

class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    } 
}

const node1 = new Node(7);
const node2 = new Node(8);
const node3 = new Node(6);
const node4 = new Node(7);
const node5 = new Node(8);
const node6 = new Node(9);
// const node7 = new Node(11);
node1.next = node2;
node2.next = node3;
// node3.next = node4;
node4.next = node5;
node5.next = node6;
// node6.next = node7;

const getBiggerSmallerNumber = (head1, head2) => {
    let len1 = 1;
    let current1 = head1;
    while (current1.next) {
        len1 = len1 +1;
        current1 = current1.next;
    }
    let len2 = 1;
    let current2 = head2;
    while(current2.next) {
        len2 = len2 +1;
        current2 = current2.next;
    }
    if (len1 === len2) {
        let curent1 = head1;
        let current2 = head2;
        while (curent1 && current2 && current2.data === current1.data) {
            current1 = current1.next;
            current2 = current2.next;
        }
        if (current1.data > current2.data) {
            return [head1, head2]
        } else {
            return [head2, head1]
        }
    } else if (len1 > len2) {
        while (len1 > len2) {
            head2 = new Node(0, current2);
            current2 = head2;
            len2 = len2 +1;
        }
        return [head1, head2]
    } else {
        while (len1 < len2) {
            head1 = new Node(0, current1);
            current1 = head1;
            len1 = len1 +1;
        }
        return [head2, head1]
    }

}

const subtract = (head1, head2) => {
    const [bigger, smaller] = getBiggerSmallerNumber(head1, head2);
    return subtractNumber(bigger, smaller, list, borrow);
}
let list = null;
let borrow = 0;

const subtractNumber = (bigger, smaller) => {
    if (bigger === null || smaller === null) {
        return list
    }
    subtractNumber(bigger.next, smaller.next);
    let subtractVal = bigger.data - smaller.data - borrow;
    if (subtractVal <0) {
        borrow = 1;
        subtractVal = 10 + subtractVal;
    } else {
        borrow = 0
    }
    list = new Node(subtractVal, list);
    return list;
}


console.log(subtract(node1, node4));
// console.log(list);