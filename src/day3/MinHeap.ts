export default class MinHeap {
    public length: number;
    private data: number[]


    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        console.log(`Before Inserting ${value}`)
        this.prettyPrint()
        this.data[this.length] = value;
        this.length++;
        this.heapifyUp()
        console.log(`After Inserting ${value}`)
        this.prettyPrint()

    }
    delete(): number {
        const value = this.data[0]
        console.log(`Before Deleting ${value}`)
        this.prettyPrint()
        this.data[0] = this.data[this.length - 1]
        this.data.pop()
        this.length--
        this.heapifyDown(0)
        console.log(`After Deleting ${value}`)
        this.prettyPrint()
        return value
    }
    private heapifyDown(idx: number): void {
        let value = this.data[idx]
        let leftChildIdx = this.leftChildIdx(idx)
        let leftValue = this.data[leftChildIdx]
        let rightChildIdx = this.rightChildIdx(idx)
        let rightValue = this.data[rightChildIdx]
        if (leftValue < value && leftValue < rightValue) {
            [this.data[idx], this.data[leftChildIdx]] = [this.data[leftChildIdx], this.data[idx]]
            this.heapifyDown(leftChildIdx)
            return
        }
        else if (rightValue < value && rightValue < leftValue) {
            [this.data[idx], this.data[rightChildIdx]] = [this.data[rightChildIdx], this.data[idx]]
            this.heapifyDown(rightChildIdx)
            return
        }
    }
    private heapifyUp() {
        let idx = this.length - 1
        let parentIdx = this.parentIdx(idx)
        while (parentIdx >= 0 && this.data[parentIdx] > this.data[idx]) {
            [this.data[parentIdx], this.data[idx]] = [this.data[idx], this.data[parentIdx]]
            idx = parentIdx
            parentIdx = this.parentIdx(parentIdx)

        }
    }
    private parentIdx(idx: number) {
        return Math.floor((idx - 1) / 2)

    }
    private leftChildIdx(idx: number) {
        return 2 * idx + 1
    }
    private rightChildIdx(idx: number) {
        return 2 * idx + 2
    }

    prettyPrint(): void {
        const heap = this.data;
        const maxDepth = Math.floor(Math.log2(heap.length));
        let currentIndex = 0;

        for (let depth = 0; depth <= maxDepth; depth++) {
            const levelSize = Math.pow(2, depth);
            const level = heap.slice(currentIndex, currentIndex + levelSize);
            const levelSpacing = " ".repeat(maxDepth - depth);
            const levelString = level.join(", ");
            console.log(levelSpacing + levelString);
            currentIndex += levelSize;
        }
    }


}


const heap = new MinHeap();

debugger
heap.length


heap.insert(5);
heap.insert(3);
heap.insert(69);
heap.insert(420);
heap.insert(4);
heap.insert(1);
heap.insert(8);
heap.insert(7);
heap.length
heap.delete()
heap.delete()
heap.delete()
heap.delete()
heap.prettyPrint();
heap.length
heap.delete()
heap.delete()
heap.delete()
heap.delete()
heap.length
