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
    const node = new Node()
    if(this.isEmpty()) {
        this.head = node
        this.tail = node
    } else {
        node.next = this.head
        this.head = node
    }
    this.size++
   }

   append(value) {
    const node = new Node(value)
    if(this.isEmpty()) {
        this.head = node
        this.tail = node
    } else {
        this.tail.next = node
        this.tail = node
    }
    this.size++
   }

   removeFromFront() {
    if(this.isEmpty()) {
        return null
    }
    const value = this.head.value
    this.head = this.head.next
    this.size--
    return value
   }

   removeFromEnd() {
    if(this.isEmpty()) {
        return null
    }
    const value = this.tail.value
    if(this.size === 1) {
        this.head = null
        this.tail = null
    } else {
        let prev = this.head
        while(prev.next !== this.tail) {
            prev = prev.next
        }
        prev.next = null
        this.tail = prev
    }
    this.size--
    return value
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

module.exports = LinkedList
// const linkedList = new LinkedList()
// console.log(linkedList.isEmpty())
// console.log(linkedList.getSize())
// linkedList.print()
// linkedList.append(10)
// linkedList.print()
// linkedList.append(20)
// linkedList.append(30)
// linkedList.print()

// linkedList.insert(10, 0)
// linkedList.insert(30, 1)
// linkedList.insert(40, 2)
// linkedList.insert(20, 0)

// console.log(linkedList.removeFrom(10))
// console.log(linkedList.removeFrom(0))
// console.log(linkedList.removeFrom(1))
// linkedList.print()

// console.log(linkedList.removeValue(30))
// console.log(linkedList.removeValue(20))
// console.log(linkedList.search(20))
// console.log(linkedList.search(10))

// linkedList.print()
// linkedList.reverse()
// linkedList.print()

// linkedList.removeFromFront()
// linkedList.print()
// linkedList.removeFromEnd()
// linkedList.print()