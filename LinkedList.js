class Node {
    constructor(value) {
      this.value = value,
      this.next = null
    }
  }
  
  class LinkedList {
      constructor(value){
          this.head = {
              value,
              next: null
          }
          this.tail = this.head
          this.length = 1
      }
  
      append = (value) => {
          const newNode = new Node(value)
          this.tail.next = newNode
          this.tail = newNode
          this.length += 1
      }
  
      prepend = (value) => {
          const newNode = new Node(value)
          newNode.next = this.head
          this.head = newNode
          this.length +=1
      }
  
      getNodeAtIndex = (index) => {
        let counter = 0
        let currentNode = this.head
        while(counter < index) {
          currentNode = currentNode.next
          counter++
        }
        return currentNode
      }
  
      insert = (index, value) => {
        if(index >= this.length ){
          this.append(value)
        } else if (index === 1) {
          this.prepend(value)
        } else {
          const newNode = new Node(value)
          let pointerNode = this.getNodeAtIndex(index - 1)
          let currentNode = this.getNodeAtIndex(index)
          pointerNode.next = newNode
          newNode.next = currentNode
        }
        this.length++
      }
      
      remove = (index) => {
        let pointerNode = this.getNodeAtIndex(index-1)
        let nextNode = this.getNodeAtIndex(index+1)
        pointerNode.next=nextNode
        this.length--
      }
  
      printList = () => {
        const array = []
        let currentNode = this.head
        while (currentNode !== null){
          array.push(currentNode.value)
          currentNode = currentNode.next
        }
        console.log(array)
      }
  }