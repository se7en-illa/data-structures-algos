/*
'''
Stack Class with Linked List

Implement a basic stack class using an linked list as the underlying storage. Stacks have two critical methods, push() and pop() to add and remove an item from the stack, respectively. You'll also need a constructor for your class, and for convenience, add a size() method that returns the current size of the stack. All of these methods should run in O(1) time!

Remember, a stack is a last in, first out data structure!

A singly linked list is a simple way to create a stack. The head of the list is the top of the stack.
 

EXAMPLE(S)
const stack = new LLStack();
console.log(stack.size()) // 0
stack.push(2);
stack.push(3);
console.log(stack.size()) // 2
console.log(stack.pop()); // 3
console.log(stack.size()) // 1
console.log(stack.pop()); // 2
 

FUNCTION SIGNATURE
*/
class LLNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LLStack {
  constructor() {
    this.head = new LLNode(null);
    this.length = 0;
  } // initialize the stack to be empty

  push(newValue) {
    let newNode = new LLNode(newValue, this.head.next);

    this.head.next = newNode;
    this.length++;
  } // Adds a new value to the stack

  pop() {
    if (this.length === 0) return null;
    if (!this.head) return null;

    const node = this.head.next;
    this.head.next = node.next;
    node.next = null;
    this.length--;
    return node.value;
  } // Removes the top value from the stack and returns it

  size() {
    return this.length;
  } // returns the current size of the stack
}

const stack = new LLStack();
console.log("size: ", stack.size()); // 0
stack.push(2);
stack.push(3);
console.log("size: ", stack.size()); // 2
console.log("pop: ", stack.pop()); // 3
console.log("size: ", stack.size()); // 1
console.log("pop: ", stack.pop()); // 2
