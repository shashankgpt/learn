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
    let prev = head;
    let current = head.next;
    while(current) {
        let curentNext = current.next;
        let prev2 = null;
        let startPoint = head;
        while(startPoint !== current) {
          if(startPoint.data > current.data) {
            prev.next = current.next;
             if (startPoint === head) {
                 current.next = head;
                 head = current;
                 current =  prev
             } else {
                current.next = prev2.next
                prev2.next = current;
              
             }
             break;
          }
          prev2 = startPoint;
          startPoint = startPoint.next
        }
        prev = current;
        current = curentNext;
    }

    return head;
}

console.log(JSON.stringify(sortLinkedList(node1)))