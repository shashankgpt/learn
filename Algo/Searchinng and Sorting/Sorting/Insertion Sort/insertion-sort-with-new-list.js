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


const sortList = (head) => {
    let resultList = null;

    while(head) {
        const next = head.next;
        resultList = addNode(resultList, head);
        head =  next;
    }
    return resultList;
}

const addNode = (list, node) => {
    node.next = null;

    if (!list || list.data > node.data) {
        node.next = list;
        return node;
    } else {
        let current = list;
        while(current) {
            // bigger node and last node handling
            if ((current.next && current.next.data > node.data) || current.next == null) {
                node.next = current.next
                current.next = node;
                break;
            }
            current = current.next;
        }
        

    }
    return list;
} 

console.log(JSON.stringify(sortList(node1)))