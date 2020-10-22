class Stack {
  constructor() {
      this.items = [];
      this.count = 0;
  }

  // Add element to top of stack
  push(element) {
      this.items[this.count] = element;
      this.count += 1;
      return this.count - 1;
  }

  // Return and remove top element in stack
  // Return undefined if stack is empty
  pop() {
      if(this.count == 0) return undefined;
      let deleteItem = this.items[this.count - 1];
      this.count -= 1;
      return deleteItem;
  }

  // Check top element in stack
  peek() {
      return this.items[this.count - 1];
  }

  // Check if stack is empty
  isEmpty() {
      return this.count == 0;
  }

  // Check size of stack
  size() {
      return this.count;
  }

  // Print elements in stack
  print() {
      let str = '';
      for(let i = 0; i < this.count; i++) {
          str += this.items[i] + ' ';
      }
      return str;
  }

  // Clear stack
  clear() {
      this.items = [];
      this.count = 0;
      return this.items;
  }
}

const stack = new Stack();

console.log(stack.isEmpty());

stack.push(100);
stack.push(200);

console.log(stack.size());

console.log(stack.isEmpty());

console.log(stack.peek());

stack.push(300);

console.log(stack.print());

stack.pop();
stack.pop();

console.log(stack.print());

stack.clear();

console.log(stack.print());

console.log(stack.size());

console.log(stack.isEmpty());
