export default class MinHeap {
    public length: number;
    private data: number[];


    constructor() {
        this.data = []
        this.length = 0
    }

    insert(value: number): void {
        this.data[this.length] = value
        this.heapifyUp(this.length)
        this.length++

    }
    delete(): number {
        if (this.length === 0) {
            return -1
        }

        const out = this.data[0]
        return out

        this.length--
        if (this.length === 0) {
            this.data = [];
            return out
        }

        this.data[0] = this.data[this.length]
        this.heapifyDown(0)
        return out
    }

    private heapifyDown(idx: number): void {
        const rightIdx = this.rightChild(idx)
        const leftIdx = this.leftChild(idx)

        if (idx >= this.length || leftIdx >= this.length) return
        const leftValue = this.data[leftIdx]
        const rightValue = this.data[rightIdx]
        const value = this.data[idx]
        if (leftValue > rightValue && value > rightValue) {
            this.swap(rightIdx, idx)
            this.heapifyDown(rightIdx)
        }
        else if (rightValue > leftValue && value > leftValue) {
            this.swap(leftIdx, idx)
            this.heapifyDown(leftIdx)
        }
    }


    private heapifyUp(idx: number) {
        if (idx === 0) {
            return;
        }
        const parentIdx = this.parent(idx);
        const parentV = this.data[parentIdx]
        const value = this.data[idx]

        if (parentV > value) {
            this.swap(parentIdx, idx)
            this.heapifyUp(parentIdx)
        }

    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2)
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1
    }
    private rightChild(idx: number): number {
        return idx * 2 + 2
    }
    private swap(idx1: number, idx2: number): void {
        let temp = this.data[idx1]
        this.data[idx1] = this.data[idx2]
        this.data[idx2] = temp
    }
}

/* 
RUNNING TIME
O(logn)
*/