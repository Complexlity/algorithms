type Node<T> = {
    value: T
    prev?: Node<T>
}


export default class Stack<T> {
    public length: number
    private head?: Node<T>

    constructor() {
        this.length = 0
        this.head = undefined
    }

    pop(): T | undefined {
        if (!this.head) return undefined
        this.length--
        const head = this.head
        this.head = head.prev
        head.prev = undefined
        return head.value
    }

    push(value: T): void {
        this.length++
        const node: Node<T> = { value }
        if (!this.head) {
            this.head = node
            return
        }
        node.prev = this.head
        this.head = node
        return
    }

    peek(): T | undefined {
        return this.head?.value
    }
}