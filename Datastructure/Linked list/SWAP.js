/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }
    let newHead = null;
    let pre = null;
    let p1 = head
    let p2 = head.next;
    while (p2) {
        const next = p2.next;
        p2.next = p1;
        p1.next = next;
        if (!newHead) {
            newHead = p2;
        } else {
            pre.next = p2;
        }
        pre = p1;
        p1 = next;
        if (p1) {
            p2 = p1.next;
        } else {
            p2 = null
        }
    }
    return newHead
};

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
n1.next = n2; 
n2.next = n3;
n3.next = n4;

console.log(JSON.stringify(swapPairs(n1)))