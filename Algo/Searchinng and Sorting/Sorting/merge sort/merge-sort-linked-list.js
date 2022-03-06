
class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    }
}

const node1 = new Node(5);
const node2 = new Node(2);
const node3 = new Node(4);
const node4 = new Node(6);
const node5 = new Node(1);
const node6 = new Node(3);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

const merge = (left, right) => {
    let result = null;
    if (!left) return right;
    if (!right) return left; 
    if (left.data <= right.data) {
        result = left
        result.next = merge(left.next, right)
    } else {
        result = right;
        result.next = merge(left, right.next)
    }
    return result;
}

const getMiddile = (head) => {
    let slow = head;
    let fast = head;
    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;


}

const mergeSort = (head) => {
    if (!head || !head.next) {
        return head;
    }

    let middle = getMiddile(head);
    let nextOfMiddle = middle.next;
    middle.next = null;
    let left = mergeSort(head);
    let right = mergeSort(nextOfMiddle);
    return merge(left, right)
}

console.log(JSON.stringify(mergeSort(node1, node4)))

