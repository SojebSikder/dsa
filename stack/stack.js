// stack implementation in function
function createStack() {
  const stack = [];
  return stack;
}
function checkEmpty(stack) {
  return stack.length == 0;
}
function push(stack, item) {
  stack.push(item);
}
function pop(stack) {
  if (checkEmpty(stack)) {
    return "stack is empty";
  }
  return stack.pop();
}

// stack implementation in class
class Stack {
  // creating a stack
  constructor() {
    this.items = [];
  }
  // Add elements into stack
  push(element) {
    this.items.push(element);
  }
  // return top most element is the stack and removes it from the stack
  pop() {
    if (this.items.length == 0) {
      return "Underflow";
    }
    return this.items.pop();
  }
  // return top most element without remove it from the stack
  peek() {
    return this.items[this.items.length - 1];
  }
  // return true is stack is empty
  isEmpty() {
    return this.items.length == 0;
  }
  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

// usage of functional implementation
const stack = createStack();
push(stack, "Hello world");
pop(stack);

// usage of class implementation
const stackClass = new Stack();
stackClass.push("hello world");

// Application

// Performs Postfix Evaluation on a given exp
function postFixEvaluation(exp) {
  var stack = new Stack();
  for (var i = 0; i < exp.length; i++) {
    var c = exp[i];
    if (!isNaN(c)) stack.push(c - "0");
    else {
      var val1 = stack.pop();
      var val2 = stack.pop();
      if (val1 == "Underflow" || val2 == "Underflow")
        return "Can't perform postfix evaluation";
      switch (c) {
        case "+":
          stack.push(val2 + val1);
          break;

        case "-":
          stack.push(val2 - val1);
          break;

        case "/":
          stack.push(val2 / val1);
          break;

        case "*":
          stack.push(val2 * val1);
          break;
      }
    }
  }

  return stack.pop();
}

// calling the above method
// returns 9
console.log(postFixEvaluation("235*+8-"));

// returns postfix evaluation can't be performed
// console.log(postFixEvaluation("23*+"));

