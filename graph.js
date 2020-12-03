class Graph {
  constructor() {
    this.nodes = [];
    this.edges = [];
    this.numberOfEdges = 0;
  }

  addNode(node) {
    this.nodes = [...this.nodes, node];
    this.edges[node] = [];
  }

  removeNode(node) {
    const index = this.nodes.indexOf(node);

    if(index >= 0) {
      this.nodes.splice(index, 1);
    }

    // If this node has an edge
    while(this.edges[node].length) {
      // Get last node in edge array (loop until they are empty)
      const adjacentNode = this.edges[node].pop();

      this.removeEdge(adjacentNode, node);
    }
  }

  addEdge(node1, node2) {
    this.edges[node1] = [...this.edges[node1], node2];
    this.edges[node2] = [...this.edges[node2], node1];
    this.numberOfEdges++;
  }

  removeEdge(node1, node2) {
    const index1 = this.edges[node1] ? this.edges[node1].indexOf(node2) : -1;
    const index2 = this.edges[node2] ? this.edges[node2].indexOf(node1) : -1;

    if(index1 >= 0) {
      // Remove node2 from the node1 array
      this.edges[node1].splice(index1, 1);
      this.numberOfEdges--;
    }

    if(index2 >= 0) {
      // Remove node1 from the node2 array
      this.edges[node2].splice(index2, 1);
    }
  }

  size() {
    return this.nodes.length;
  }

  relations() {
    return this.numberOfEdges;
  }

  print() {
    const graphToString = this.nodes.map(node => `${node} => ${this.edges[node].join(', ')}`.trim()).join(' | ');
    console.log(graphToString);
  }
}

let graph = new Graph();

graph.addNode("a");
graph.addNode("b");
graph.addNode("c");
graph.addNode("d");

graph.addEdge("a", "b");
graph.addEdge("a", "c");
graph.addEdge("a", "d");
graph.addEdge("b", "c");
graph.addEdge("b", "d");

graph.print();

console.log("remove edge ab");
graph.removeEdge("a", "b");
graph.print();

console.log("remove node a");
graph.removeNode("a");
graph.print();