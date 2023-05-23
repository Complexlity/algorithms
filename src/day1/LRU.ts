type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
}

function createNode<V>(value: V): Node<V> {
    return {
        value,
    }
}

export default class LRU<K, V> {

    public length: number;
    private head?: Node<V>;
    private tail?: Node<V>;

    private lookup: Map<K, Node<V>>
    private reverseLookup: Map<Node<V>, K>
    constructor(private capacity: number = 10) {
        this.length = 0
        this.head = this.tail = undefined
        this.lookup = new Map<K, Node<V>>()
        this.reverseLookup = new Map<Node<V>, K>()

    }


    update(key: K, value: V): void {
        // does it exist?
        let node = this.lookup.get(key)
        if (!node) {
            node = createNode(value)
            this.length++
            this.prepend(node)
            this.trimCache()
            this.lookup.set(key, node)
            this.reverseLookup.set(node, key)
        }

        else {
            this.detach(node)
            this.prepend(node)
            node.value = value
        }
        // 
        //if it doesn't we need to insert it
        //      - check capacity and evict if over
        //if it does, we need to update to the front of the list
        // and update the value

    }
    get(key: K): V | undefined {

        // check the cache for existence
        const node = this.lookup.get(key)


        if (!node) return undefined
        // update value we found and move it to the front of the cache
        this.detach(node)
        this.prepend(node)
        // return out the value found or undefined if not exists
        return node.value
    }

    private detach(node: Node<V>) {
        if (node.prev) node.prev.next = node.next
        if (node.next) node.next.prev = node.prev
        node.next = undefined
        node.prev = undefined
        if (this.head = node) {
            this.head = this.head.next
        }
        if (this.tail = node) {
            this.tail = this.tail.prev
        }
    }
    private prepend(node: Node<V>) {
        if (!this.head) {
            this.head = this.tail = node
        }
        this.head.prev = node
        node.next = this.head
        this.head = node
    }
    private trimCache(): void {
        if (this.length <= this.capacity) return
        const tail = this.tail as Node<V>
        this.detach(this.tail as Node<V>)
        const key = this.reverseLookup.get(tail) as K
        this.lookup.delete(key)
        this.reverseLookup.delete(tail)
        this.length--
    }
}
const lru = new LRU<string, number>(3)
// console.log(lru.get('foo'))
// expect(lru.get("foo")).toEqual(undefined);
lru.update("foo", 69)

// console.log(lru.get('foo'))
// expect(lru.get("foo")).toEqual(69);

lru.update("bar", 420);
// console.log(lru.get('bar'))

// expect(lru.get("bar")).toEqual(420);

lru.update("baz", 1337);
// console.log(lru.get('baz'))
// expect(lru.get("baz")).toEqual(1337);

lru.update("ball", 69420);
console.log(lru.get('ball'))

// expect(lru.get("ball")).toEqual(69420);
// console.log(lru.length)

console.log(lru.get('foo'))

// expect(lru.get("foo")).toEqual(undefined);
// expect(lru.get("bar")).toEqual(420);
// lru.update("foo", 69);
// expect(lru.get("bar")).toEqual(420);
// expect(lru.get("foo")).toEqual(69);

// // shouldn't of been deleted, but since bar was get'd, bar was added to the
// // front of the list, so baz became the end
// expect(lru.get("baz")).toEqual(undefined);
// });