class Stack {
    constructor() {
        this.stack = []
    }
    
    push = (value) => {
        this.stack.push(value)
    }

    pop = () => {
        this.stack.pop()
    }

    peek = () => {
        return this.stack[this.stack.length-1]
    }
}