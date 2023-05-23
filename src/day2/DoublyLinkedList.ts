type Node<T> = {
    value: T,
    next?: Node<T>
    prev?: Node<T>
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>
    private tail?: Node<T>

    constructor() {
        this.length = 0
        this.head = this.tail = undefined
    }

    prepend(item: T): void {
        this.length++
        const node: Node<T> = { value: item }
        if (!this.head) {
            this.head = this.tail = node
            return
        }
        this.head.prev = node
        node.next = this.head
        this.head = node
        return
    }
    append(item: T): void {
        this.length++
        const node: Node<T> = { value: item }
        if (!this.tail) {
            this.head = this.tail = node
            return
        }
        this.tail.next = node
        node.prev = this.tail
        this.tail = node
        return
    }

    get(idx: number): T | undefined {
        return this.getAt(idx)?.value
    }
    private getAt(idx: number): Node<T> | undefined {
        let curr = this.head
        for (let i = 0; curr && i < idx; ++i) {
            curr = curr.next
        }
        return curr
    }

    remove(item: T) {
        let curr = this.head
        for (let i = 0; curr && i < this.length; ++i) {
            if (curr.value === item) break
            curr = curr.next
        }
        return this.removeNode(curr)
    }

    removeAt(idx: number): T | undefined {
        let curr = this.getAt(idx) as Node<T>
        return this.removeNode(curr)
    }
    private removeNode(node: Node<T> | undefined): T | undefined {
        if (!node) return undefined
        this.length--
        if (node.prev) {
            node.prev.next = node.next
        }
        if (node.next) {
            node.next.prev = node.prev
        }
        if (node === this.head) {
            this.head = node.next
        }

        if (node === this.tail) {
            this.tail = node.prev
        }
        node.prev = node.next = undefined
        return node.value
    }
    insertAt(item: T, idx: number): void {
        this.length++
        if (idx >= this.length) {
            throw new RangeError("Invalid index")
        }
        const curr = this.getAt(idx) as Node<T>
        if (curr === this.head) {
            this.prepend(item)
            return
        }
        if (curr === this.tail) {
            this.append(item)
            return
        }
        const node: Node<T> = { value: item }
        node.next = curr
        node.prev = curr.prev
        if (curr.prev) {
            curr.prev.next = node
        }
        curr.prev = node
        return
    }
}