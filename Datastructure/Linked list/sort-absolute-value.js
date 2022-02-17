// Sort linked list which is already sorted on absolute values

class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    } 
}

const node1 = new Node(-1);
const node2 = new Node(-2);
const node3 = new Node(-3);
const node4 = new Node(-4);
const node5 = new Node(-5);
const node6 = new Node(-10);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

const sortAbsolute = (head) => {
    let current = head;
    let prev = null;
    let list = null;
    let end;

    while(current) {
        const next = current.next;
        if (current.data < 0) {
            if (prev) {
                prev.next = next;
            } else {
                head = next;
            }
            if(!end) {
                end = current;
            }
            current.next = list;
            list = current
        } else {
          prev = current;  
        }
        current = next;
    }
    end.next = head;
    return list;
}

console.log(JSON.stringify(sortAbsolute(node1)));