// Check if a linked list of strings forms a palindrome

class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    } 
}

const node1 = new Node('a');
const node2 = new Node('bc');
const node3 = new Node('d');
const node4 = new Node('dcb');
const node5 = new Node('a');

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const checkPalindrome = (head) => {
    let current = head;
    let word = '';

    while(current) {
        word +=current.data;
        current = current.next;
    }
    for (let i =0;i<word.length;i++) {
        if (word[i] !== word[word.length - (1 + i)]) {
            return false;
        }
    }
    return true;
}

console.log(checkPalindrome(node1))