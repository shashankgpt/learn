class Node {
    constructor(value) {
        this.value = value
        this.next = null;
    }
}

const arr = [2,3,4,5]

function createLinkedList(arr) {
    let head = new Node(arr[0]);
    let current = head
    for (let i=1;i<arr.length;i++) {
        current.next = new Node(arr[i]);
        current = current.next
    }
    return head
}