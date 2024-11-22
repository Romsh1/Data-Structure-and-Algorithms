class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    print() {
        if(this.isEmpty()) {
            console.log(`The list is empty`)
        } else {
            let curr = this.head
            let listValues = ''
            while(curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }
}

const linkedList = new LinkedList()
console.log(linkedList.isEmpty())
console.log(linkedList.getSize())
linkedList.print()
linkedList.prepend(10)
linkedList.print()
linkedList.prepend(20)
linkedList.prepend(30)
linkedList.print()