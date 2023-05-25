type Node<T> = {
    value: T;
    prev?: Node<T>
}

export default class Stack<T> {
    public length: number
    private head?: Node<T>

    constructor() {
        this.length = 0
        this.head = undefined
    }

    push(value: T): void {
        const node = { value } as Node<T>
        this.length++
        if (!this.head) {
            this.head = node
            return
        }
        node.prev = this.head
        this.head = node
    }
    pop(): T | undefined {
        if (!this.head) return undefined
        this.length--
        const node = this.head
        this.head = node.prev
        return node.value
    }

    peek(): T | undefined {
        return this.head?.value
    }
}