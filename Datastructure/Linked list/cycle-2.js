class Node {
    constructor(v, n) {
        this.val = v
        this.next = n;
    }
}


const n1 = new Node(1)
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4)
const n5 = new Node(5)
const n6 = new Node(6);
const n7 = new Node(7);
const n8 = new Node(8)
const n9 = new Node(9)


n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n3


var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        debugger;
        if (slow === fast) {
            return slow
        }
    }
    return false;
};

var detectCycle = function(head) {
    if (!head || !head.next) {
        return null
    }
    let main = hasCycle(head);
    if (!main) {
        return null
    }
    let node1 = main;
    let node2 = main.next
    let current = head;
    debugger;
    while (current) {
        if (current === node1) 
        {
            return node1
        } else if (current === node2) {
            return node2
        }
        current = current.next;
    }

    return current;
};

detectCycle(n1)