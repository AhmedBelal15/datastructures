class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek = () => {
    return this.top.value

  }
  push = (value) => {
    const newNode = new Node(value)
    if(this.length === 0) {
      this.top = newNode
      this.bottom = newNode
      this.length++
    } else {
      const pointerToPrev = this.top
      this.top = newNode
      this.top.next = pointerToPrev
      this.length++
    }
  }

  pop = () => {
    if(this.top === null){
      return null
    }
    if(this.length === 1){
      this.top = null
      this.bottom = null
      this.length--
    } else {
    this.top = this.top.next
    this.length--
    }
  }
}

const myStack = new Stack();

console.log(myStack)