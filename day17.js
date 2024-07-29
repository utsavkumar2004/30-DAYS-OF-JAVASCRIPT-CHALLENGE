// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
class LinkedList {
    constructor() {
        this.head = null;
    }

    addToEnd(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    }

    removeFromEnd() {
        if (!this.head) return;
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let currentNode = this.head;
        while (currentNode.next.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = null;
    }

    displayNodes() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.items.length === 0) return undefined;
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
function reverseString(str) {
    const stack = new Stack();
    for (const char of str) {
        stack.push(char);
    }
    let reversedStr = '';
    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }
    return reversedStr;
}

// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.items.length === 0) return undefined;
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
function simulatePrinterQueue(queue) {
    while (!queue.isEmpty()) {
        console.log(`Printing job: ${queue.dequeue()}`);
    }
}

// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right,
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this.insertNode(this.root, value);
    }

    insertNode(node, value) {
        if (node === null) {
            return new TreeNode(value);
        }
        if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.insertNode(node.right, value);
        }
        return node;
    }

    inOrderTraversal(node = this.root) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}

// Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(vertex) {
        if (!this.adjList[vertex]) this.adjList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjList[v1].push(v2);
        this.adjList[v2].push(v1);
    }

    bfs(startVertex) {
        const queue = [startVertex];
        const visited = new Set([startVertex]);
        let neighbors = [];

        while (queue.length) {
            const vertex = queue.shift();
            neighbors = this.adjList[vertex];
            for (let i = 0; i < neighbors.length; i++) {
                if (!visited.has(neighbors[i])) {
                    visited.add(neighbors[i]);
                    queue.push(neighbors[i]);
                }
            }
        }
        console.log(neighbors);
    }
}

// Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.
function shortestPath(graph, start, end) {
    const queue = [{ vertex: start, path: [] }];
    const visited = new Set([start]);

    while (queue.length) {
        const { vertex, path } = queue.shift();
        if (vertex === end) {
            console.log('Shortest path:', path.concat(end));
            return;
        }
        const neighbors = graph.adjList[vertex];
        for (let i = 0; i < neighbors.length; i++) {
            if (!visited.has(neighbors[i])) {
                visited.add(neighbors[i]);
                queue.push({ vertex: neighbors[i], path: [...path, neighbors[i]] });
            }
        }
    }
}


