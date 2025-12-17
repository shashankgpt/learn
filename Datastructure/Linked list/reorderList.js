var reorderList = function(head) {
  const [newHead, tail] = buildReversePointer(head)
   debugger;
  let current = newHead;
  let last = tail;
  debugger;
  while (current !== last && current.prev !== last) {
    const next = current.next;
    const preLast = last.prev
    current.next = last;
    last.next = next;
    current = next;
    last = preLast
  }
  console.log(current.val)
  console.log('+++++');
  current.next = null;
  current = newHead;
  debugger;
  while(current) {
    console.log(current.val);
    delete current.prev;
    current = current.next
  }
  return newHead;
};

const buildReversePointer = (head) => {
  let current = head;
  let prev = null
  while (current) {
    current.prev = prev;
    prev = current
    current = current.next;
  }
  return [head, prev];
}


class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

console.log(JSON.stringify(reorderList(n1)))