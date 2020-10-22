// Construct Single Node
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Queue & Some Actions
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) this.head = newNode;
    else this.tail.next = newNode;
    this.tail = newNode;
  }

  remove() {
    if (this.isEmpty()) return;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
  }

  peekHead() {
    if (this.isEmpty()) return -404;
    return this.head.data;
  }

  display() {
    if (this.isEmpty()) return;
    let curr = this.head;
    process.stdout.write('(HEAD) ');
    while (curr != this.tail) {
      process.stdout.write(`${curr.data} --> `);
      curr = curr.next;
    }
    process.stdout.write(`${this.tail.data} (TAIL)\n`);
  }
}

const queue = new Queue();

queue.insert(5);
queue.insert(10);
queue.insert(15);
queue.insert(20);
queue.insert(25);

queue.display();
console.log(`${queue.peekHead()} is the head.`);

queue.remove();
queue.remove();

queue.display();
console.log(`${queue.peekHead()} is the head.`);
