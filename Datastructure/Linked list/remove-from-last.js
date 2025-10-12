class Node {
    constructor(v, n) {
        this.val = v
        this.next = n;
    }
}


var removeNthFromEnd = function(head, n) {
    let fast = head
    let slow = head;
    let decreaseCount = n;
    while(decreaseCount && fast) {
        decreaseCount = decreaseCount -1
        fast = fast.next;
    }
    if (!fast) {
        return slow.next
    }
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next
    }
    if (!slow.next) {
        slow.next = null
    } else {
        slow.next = slow.next.next
    }
    
    return head
};

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);
// n1.next = n2;
//n2.next = n3;
//n3.next = n4;
//n4.next = n5

removeNthFromEnd(n1,1)