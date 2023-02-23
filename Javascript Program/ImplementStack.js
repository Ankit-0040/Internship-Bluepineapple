let stack = [];
let peek = [];
let size = [];

function stackPop() {
  return stack.pop();
}

function stackSize() {
  size = stack.length;
  return size;
}
function stackPeek() {
  peek = stack[stack.length - 1];
  return peek;
}
function stackPush(number) {
  return stack.push(number);
}

function stack_isExist(number) {
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] == number) {
      return true;
    } else {
      return false;
    }
  }
}

stackPush(6);
stackPush(12);
stackPush(3);
stackPush(4);
stackPush(7);
stackPeek();
stackSize();
stack_isExist(stack, 6);

console.log("Stack Element", stack);
console.log("Peek element", peek);
console.log("Size of stack", size);
console.log("Check element is exist ", stack_isExist(2));
