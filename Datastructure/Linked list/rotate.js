var rotateRight = function (head, k) {
if (!head || !head.next) return head;
  let current = head;
  let len = 1;
  while (current.next) {
    current = current.next;
    len++;
  }


  let dissect = 0;
  if (k%len === 0) return head;
  else if (len >= k) {
    dissect = len -k
  } else {
    t = k;
    while (t > len) {
        t = t -len
    }
    dissect = len - t
  }


  current.next = head;
  let iteration = 1;
  while (iteration <= dissect) {
    current = current.next
    iteration++
  }
  const next = current.next
  current.next = null
  return next;

};

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const n1 = new Node(0);
const n2 = new Node(1);
const n3 = new Node(2);
const n4 = new Node(4);
const n5 = new Node(5);
n1.next = n2;
n2.next = n3;
// n3.next = n4;
n4.next = n5;

console.log(JSON.stringify(rotateRight(n1, 4)));
