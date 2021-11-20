class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    } 
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
node1.next = node2;
node2.next = node3;
let head = node1

const printList = (node, arr = []) => {
    arr.push(node.data);
    if(node.next === null) {
        return arr.join('=>');
    }
    return printList(node.next, arr);
}

const insertionAtStart =(data) => {
    const node = new Node(data);
    node.next = head;
    head = node;
}

const insertionAtGiveNode = (prevNode, data) => {
    const node = new Node(data)
    node.next = prevNode.next;
    prevNode.next = node;
}

const insertionAtEnd = (data) => {
    const node = new Node(data);

    fetchLastNode = (node) => {
        if(node.next !== null)
        {
            return fetchLastNode(node.next)
        }
        return node 
    }
    const finalNode = fetchLastNode(head);
    finalNode.next = node;
}

const deleteNode = (data) => {
    fetchLastNode = (node, prev) => {
        if(node.data !== data)
        {
            return fetchLastNode(node.next, node)
        }
        return [node, prev] 
    }
    const [mainNode, previousNode] = fetchLastNode(head);
    previousNode.next = mainNode.next;

}

const deleteNodeAtgivenPosition = (pos) => {
    if(pos === 1) {
        head = head.next;
        return
    }
    let i = 1;
    let prevNode = head;
    let mainNode = head;
    while(i< pos){
        prevNode = mainNode
        mainNode = mainNode.next;
        i++;
    }
    prevNode.next = mainNode.next;   
}

const searchNode = (data) => {
    let node = head;
    while(node.next !== null) {
        if(node.data === data) {
            return 'Found'
        }
        node = node.next;
    }
    if(node.next === null) {
        if(node.data=== data) return 'Found';
        return 'Not Found';
    }
}


insertionAtStart(0);
insertionAtGiveNode(node1, 1.1)
insertionAtEnd(4);
deleteNode(1.1)
deleteNodeAtgivenPosition(3)
console.log(searchNode(40));
console.log(printList(head))