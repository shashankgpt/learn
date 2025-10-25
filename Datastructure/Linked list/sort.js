class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    } 
}

const n1 = new Node(2);
const n2 = new Node(2);
const n3 = new Node(4);
//n1.next = n2;
//n2.next = n3;

const n4 = new Node(1);
const n5 = new Node(3);
const n6 = new Node(4)
//n4.next = n5;
//n5.next = n6;


var mergeTwoLists = function(list1, list2) {
    if (!list1) {
        return list2;
    } else if (!list2) {
        return list1;
    }
    let c1 = list1;
    let c2 = list2;
    let newHead = null;
    let current = null;
    if (c1.val > c2.val) {
        newHead = c2;
        current = c2
        c2 = c2.next;
    } else {
        newHead = c1;
        current = c1;
        c1 = c1.next;
    }
    while ((c1 || c2) && current) {
        if ( c2 && (!c1 || c1.val > c2.val)) {
            // c1 is bigger
            current.next = c2;
            if (c2) c2 = c2.next;
        } else {
            // c2 is bigger
            current.next = c1;
            if (c1) c1 = c1.next;
        }
        current = current.next
    }
    return newHead;
};

mergeTwoLists(n1,n4)