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

    //O(1)
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

    //O(n)
    append(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while(prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insert(value, index) {
        if(index < 0 || index > this.size) {
            return
        }
        //inserting node at the beginning of the list
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null
        }
        let removedNode
        if(index === 0) {
            removedNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for(let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }

    removeValue(value) {
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while(prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if(prev.next) {
                const removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
            return null
        }
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
// linkedList.append(10)
// linkedList.print()
// linkedList.append(20)
// linkedList.append(30)
// linkedList.print()

linkedList.insert(10, 0)
linkedList.insert(30, 1)
linkedList.insert(40, 2)
linkedList.insert(20, 0)

// console.log(linkedList.removeFrom(10))
// console.log(linkedList.removeFrom(0))
// console.log(linkedList.removeFrom(1))
// linkedList.print()
console.log(linkedList.getSize())

console.log(linkedList.removeValue(30))
console.log(linkedList.removeValue(20))

linkedList.print()
