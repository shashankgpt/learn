// There are two singly linked lists in a system. By some programming error, the end node of one of the linked list got linked to the second list, forming an inverted Y shaped list. Write a program to get the point where two linked list merge. 

class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    } 
}

const node1 = new Node(3);
const node2 = new Node(6);
const node3 = new Node(9);
const node4 = new Node(15);
const node5 = new Node(30);
const node6 = new Node(10);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node6.next = node4;
let head1 = node1;
let head2 = node6;

// Method 3
const findIntersectionNode = (head1, head2) => {
    let counter1 = 0;
    let current1 = head1
    while(current1) {
        counter1 = counter1 + 1;
        current1 = current1.next;
    }

    let counter2 = 0;
    let current2 = head2
    while(current2) {
        counter2 = counter2 + 1;
        current2 = current2.next;
    }
    if (counter1 === counter2) {
        head.next = null;
        return head;
    }
    else if (counter1 > counter2) {
        let d = counter1 - counter2;
        let j = 0;
        current1 = head1;
        while(j<=d) {
            j = j + 1;
            current1 = current1.next
        }
        current1.next = null;
        return current1
    } else {
        let d = counter2 - counter1;
        let j = 0;
        current2 = head2;
        while(j<=d) {
            j = j + 1;
            current2 = current2.next
        }
        current2.next = null;
        return current2
    }
}

// Method 1
const intersectionLopp = (head1, head2) => {
    let current1 = head1;
    let intersection
    while(current1) {
        let current2 = head2
        while(current2) {
            if(current1 === current2) {
                current2.next = null;
                intersection = current2;

            }
            current2 = current2.next
        }
        current1 = current1.next
    }
    return intersection;
}

// console.log(intersectionLopp(head1, head2));


const intersectionHash = (head1, head2) => {
    const nodeHash = [];
    let current1 = head1;
    let intersection
    while(current1) {
        nodeHash.push(current1);
        current1 = current1.next
    }
    let current2 = head2;
    while (current2) {
        const index = nodeHash.indexOf(current2);
        if (index != -1) {
            current2.next = null
            intersection = current2;
            break;
        }
        current2 = current2.next
    }
    return intersection;
}

console.log(intersectionHash(head1, head2));