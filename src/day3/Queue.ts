import { HighlightSpanKind } from "typescript"

type Node<T> = {
    value: T,
    next?: Node<T>,

}
export default class Queue<T> {
    public length: number
    private head?: Node<T>
    private tail?: Node<T>

    constructor() {
        this.length = 0
        this.head = this.tail = undefined
    }

    enqueue(value: T): void {
        this.length++
        let node = { value } as Node<T>
        if (!this.tail) {
            this.head = this.tail = node
            return
        }
        this.tail.next = node
        this.tail = node
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined
        }
        this.length--
        let h = this.head
        this.head = this.head.next
        h.next = undefined
        if (this.length === 0) this.tail = undefined
        return h.value
    }
    peek() { return this.head?.value }
}
