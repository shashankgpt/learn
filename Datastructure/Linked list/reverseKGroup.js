var reverseKGroup = function (head, k) {
    let FH = null
    let NH = head
    let prev = null;
    debugger
    while (NH) {
        if (shouldNotProceed(NH,k)) {
            return FH
        }
        const [current, next] = getCurrentTail(NH, k)
        if (!FH) {
            FH = current
        }
        NH.next = next;
        if (prev) prev.next = current
        prev = NH;
        NH = next
    }
    return FH
};

const shouldNotProceed = (head, k) => {
    let i = 0;
    let current = head
    while (i<k) {
        if (!current) {
            return true
        }
        current = current.next
        i++
    }
    return false
}

const getCurrentTail = (head, k) => {
    let prev = null
    let current = head
    let i = 1;
    while (i < k) {
        const next = current.next;
        current.next = prev;
        prev = current
        current = next;
        i++
    }
    let next = current.next;
    current.next = prev 
    return [current, next]
}

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

console.log(JSON.stringify(reverseKGroup(n1, 2)));
