class Node {
    constructor(val, next = null, pre = null ,child = null) {
        this.val = val;
        this.next = next;
        this.pre = pre
        this.child = child
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
const n9 = new Node(9);
const n10 = new Node(10);
const n11 = new Node(11);
const n12 = new Node(12);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;

n6.prev = n5;
n5.prev = n4;
n4.prev = n3;
n3.prev = n2;
n2.prev = n1;

n3.child = n7;

n7.next = n8;
n8.next = n9;
n9.next = n10;

n10.prev = n9;
n9.prev = n8;
n8.prev = n7;

n8.child = n11;
n11.next = n12;
n12.prev = n11;

var flatten = function(head) {
    let current = head;
    while (current) {
        if (current.child) {
            const next = current.next
            let NH = getHead(current.child, next);
            current.next = NH;
            NH.prev = current
            current.child = null;
            current = next;
        }
       if (current.next) {
      current = current.next;
    } else {
      break;
    }
      
    }
    return head;
};

const getHead = (head, newCurrent) => {
    let current = head;
    while (current && current.next) {
        if (current.child) {
             const next = current.next
            let NH = getHead(current.child, next);
            current.next = NH;
            NH.prev = current
            current.child = null;
        }
        if (!current.next) break;
    current = current.next;
    }
    current.next = newCurrent;
    if (newCurrent) {
    newCurrent.prev = current;
  }
    return head;
}

let final = flatten(n1);
console.log(final);
while (final) {
    if (final.prev) {
       console.log(final.prev.val + '->')
    } 
    console.log(final.val)
    if (final.next) {
       console.log('<-'+final.next.val)
    } 
    console.log('\n')
    final = final.next;
}

