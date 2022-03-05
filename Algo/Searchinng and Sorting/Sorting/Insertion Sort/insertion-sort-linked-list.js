class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    }
}

const node1 = new Node(5);
const node2 = new Node(2);
const node3 = new Node(6);
const node4 = new Node(1);
const node5 = new Node(3);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const sortLinkedList = (head) => {
    let sorted = head;
    let key = head.next;
    while(key) {
        let prevCurrent = null;
        let current = head;
        while(current && current !== key) {
            if(current.data > key.data) {
                sorted.next = key.next;
                key.next = current;
                if(current === head ) {
                    prevCurrent = key;
                    head = key;
                } else {
                    prevCurrent.next = key;
                }
                break;
            }
            prevCurrent = current;
            current = current.next
        }
        sorted = key;
        key = key.next;
    }
    return head;
}

console.log(JSON.stringify(sortLinkedList(node1)))