// Construct Single Node
class Node {
  constructor(data, children = []) {
    this.data = data;
    this.children = children;
  }
}

// Tree & Some Actions
class Tree {
  constructor() {
    this.root = null;
  }

  add(data, toNodeData) {
    const node = new Node(data);
    const parent = toNodeData ? this.findBFS(toNodeData) : null;

    // Push new node to parent
    if(parent) {
      parent.children.push(node);
    } else {
      // If there's no parent, make this the root node
      if(!this.root)
        this.root = node;
      else
        return "Root already exists!";
    }
  }

  findBFS(data) {
    const queue = [this.root];
    let _node = null;

    // Go thru every node in BFS
    this.traverseBFS((node) => {
      // Return match if found
      if(node.data === data) {
        _node = node;
      }
    })

    return _node;
  }

  // Breadth First Search
  traverseBFS(cb) {
    const queue = [this.root];

    if(cb)
      while(queue.length) {
        // Store current node & remove it from queue
        const node = queue.shift();

        cb(node);

        // Push children of current node to end of queue
        for(const child of node.children) {
          queue.push(child);
        }
      }
  }

  printBFS() {
    this.traverseBFS((node) => { console.log(node); });
  }
}

let tree = new Tree();

tree.add('a');
tree.add('b', 'a');
tree.add('c', 'a');
tree.add('d', 'c');
tree.add('e', 'c');
tree.add('f', 'c');

tree.printBFS();

// console.log(tree.findBFS('c'));