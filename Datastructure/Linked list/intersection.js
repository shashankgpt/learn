class Node {
    constructor(v, n) {
        this.val = v
        this.next = n;
    }
}

const n1 = new Node(4)
const n2 = new Node(1);
const n3 = new Node(8);
const n4 = new Node(4);
const n5 = new Node(5);

const n6 = new Node(5);
const n7 = new Node(6)
const n8 = new Node(1);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

n6.next = n7;
n7.next = n8;
n8.next = n3


var getIntersectionNode = function(headA, headB) {
    let lenA = getLenOfNode(headA);
    let lenB = getLenOfNode(headB);
    let jump = 0
    if (lenA > lenB) {
        jump = lenA - lenB;
        while (jump) {
            jump = jump -1;
            headA = headA.next
        }
    } else {
        jump = lenB - lenA;
        while (jump) {
            jump = jump -1;
            headB = headB.next
        }
    }
    while (headA && headB) {
        if (headA === headB) {
            return headA.val
        }
        headA = headA.next
        headB = headB.next
    }
    return null
};


const getLenOfNode = (head) => {
    let len = 0
    let headMain = head
    while (headMain) {
        len = len +1;
        headMain = headMain.next
    }
    return len;
}



getIntersectionNode(n1, n6)