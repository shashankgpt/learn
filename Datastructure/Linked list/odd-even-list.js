class Node {
    constructor(v, n) {
        this.val = v
        this.next = n;
    }
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);
const n6 = new Node(6);
const n7 = new Node(7);
const n8 = new Node(8);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;
n7.next = n8;

var oddEvenList = function(head) {
    if (!head || !head.next) {
        return head
    }
    let end = head;
    while(end.next) {
        end = stopper.next
    }
    let current = head.next;
    let prev = head
    let counter = 1;
    while (stopper !== current) {
        let next = current.next;
        if (counter%2 !== 0) {
            prev.next = current.next;
            current.next = null
            end.next = current
            end = end.next;
        } else {
            prev = current
        }
        if (counter === 1) {
            stopper = stopper.next
        }
        current = next
        counter++
      
    }
    return head;
};

oddEvenList(n1)