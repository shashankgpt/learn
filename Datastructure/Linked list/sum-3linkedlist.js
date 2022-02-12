// Insertion Sort for Singly Linked List
// 30 -> 3 ->4 -> 20 -> 5 -> 9 -> 67
// 3 -> 30 
class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    } 
}

const node1 = new Node(10);
const node2 = new Node(15);
const node3 = new Node(5);
const node4 = new Node(20);
const node5 = new Node(2);
const node6 = new Node(4);
const node7 = new Node(9);
const node8 = new Node(10);
const node9 = new Node(1);
const node10 = new Node(2);
const node11 = new Node(4);
const node12 = new Node(8);
node1.next = node2;
node2.next = node3;
node3.next = node4;
// node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
// node8.next = node9;
node9.next = node10;
node10.next = node11;
node11.next = node12;
const sort = (head, type = 'ASC') => {
    let pivot = head.next;
    let last = head;
    while(pivot) {
        let start = null;
        let current = head;
        while(current != pivot) {
            if((type === 'ASC' && pivot.data < current.data) || (type === 'DESC' && pivot.data > current.data)){
                last.next = pivot.next;
                pivot.next = current
                if (start) {
                    start.next = pivot;
                } else {
                    start = pivot;
                    head = pivot;
                }
                break;
            } 
            start = current;
            current = current.next;
        }
        last = pivot;
        pivot = pivot.next;
    }

    return head;
}


const sum = (list1, list2, list3, sum) => {
    let head1 = list1;
    let sorted2 = sort(list2);
    let sorted3 = sort(list3, 'DESC');
    let exit = false;
    while(head1) {
        let head2 = sorted2
        let head3 = sorted3;
        while(head2 && head3) {
            let sumVal = head1.data + head2.data + head3.data
            if (sum === sumVal) {
                exit = true;
                console.log(head1, head2, head3);
                break;
            } else if (sumVal > sum) {
                head3 = head3.next;
            } else {
                head2 = head2.next
            }
            
        }
        if (exit) {
            break;
        }
        head1 = head1.next;
    }
}

sum(node1, node5, node9, 25);