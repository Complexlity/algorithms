type Node<V> = {
    value: V;
    next?: Node<V>
    prev?: Node<V>
}

function createNode<V>(value: V): Node<V> {
    return { value }
}

export default class LRU<K, V>{
    private length: number;
    private head?: Node<V>
    private tail?: Node<V>
    private lookup: Map<K, Node<V>>
    private reverseLookUp: Map<Node<V>, K>



    constructor(private capacity: number = 10) {
        this.length = 0;
        this.head = this.tail = undefined
        this.lookup = new Map<K, Node<V>>();
        this.reverseLookUp = new Map<Node<V>, K>();
    }

    update(key: K, value: V): void {
        let node = this.lookup.get(key);
        if (!node) {
            node = createNode(value)
            this.prepend(node)
            this.trimCache()
            this.lookup.set(key, node)
            this.reverseLookUp.set(node, key)

        }
        else {
            this.detach(node)
            this.prepend(node)
            node.value = value
        }

    }
    get(key: K): V | undefined {
        let node = this.lookup.get(key) as Node<V>;
        if (!node) return undefined;
        this.detach(node);
        this.prepend(node)
        return node.value;
    }

    private detach(node: Node<V>): void {
        this.length--;
        if (node.prev) node.prev.next = node.next
        if (node.next) node.next.prev = node.prev
        if (node === this.head) this.head = node.next
        if (node === this.tail) this.tail = node.prev
    }
    private prepend(node: Node<V>): void {
        this.length++;
        if (!this.head) {
            this.head = this.tail = node
            return
        }
        node.next = this.head
        this.head.prev = node
        this.head = node
    }

    private trimCache(): void {
        if (this.length <= this.capacity) return
        let node = this.tail as Node<V>
        let key = this.reverseLookUp.get(node) as K
        this.lookup.delete(key)
        this.reverseLookUp.delete(node)
        this.detach(node)
    }
}