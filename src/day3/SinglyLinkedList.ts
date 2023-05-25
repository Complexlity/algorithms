type Node<T> = {
    value: T,
    next?: Node<T>,
}
export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;



    constructor() {
        this.length = 0;
        this.head = this.tail = undefined
    }


    prepend(item: T): void {
        const node = { value: item } as Node<T>
        this.length++
        if (!this.head) {
            this.head = this.tail = node
            return
        }
        node.next = this.head
        this.head = node
    }
    insertAt(item: T, idx: number): void {

    }
    append(item: T): void {
        const node = { value: item } as Node<T>
        this.length++
        if (!this.tail) {
            this.head = this.tail = node
            return
        }
        this.tail.next = node
        this.tail = node


    }
    remove(item: T): T | undefined {
        let curr = this.head
        for (let i = 0; curr && i < this.length; ++i) {
            if (curr.value === item) return this.removeAt(i)
            curr = curr.next
        }
        return undefined

    }
    get(idx: number): T | undefined {
        return this.getAt(idx)?.curr?.value
    }
    removeAt(idx: number): T | undefined {
        const { prev, curr } = this.getAt(idx) as { prev: Node<T>, curr: Node<T> }
        this.length--
        if (!curr) return undefined
        if (curr === this.head) {
            this.head = curr.next
        }
        if (curr === this.tail) {
            this.tail = prev
        }
        if (prev) {
            prev.next = curr.next
        }
        return curr.value
    }
    private getAt(idx: number): { prev: Node<T> | undefined, curr: Node<T> | undefined } {
        let curr = this.head
        let prev = undefined
        for (let i = 0; curr && i < idx; i++) {
            prev = curr
            curr = curr.next
        }
        return { prev, curr }
    }
}
