export default class MinHeap {
    public length: number
    private data: number[]

    constructor() {
        this.length = 0
        this.data = []
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


        this.length--
        if (this.length === 0) {
            this.data = [];
            return out
        }

        this.data[0] = this.data[this.length]
        this.heapifyDown(0)
        return out
    }
    private heapifyUp(idx: number): void {
        if (idx === 0) return
        const pIdx = this.parent(idx)
        const pValue = this.data[pIdx]
        const value = this.data[idx]
        if (value < pValue) {
            this.swap(idx, pIdx)
            this.heapifyUp(pIdx)
        }

        return


    }
    // private heapifyDown(idx: number): void {
    //     const rightIdx = this.rightIdx(idx)
    //     const leftIdx = this.leftIdx(idx)
    //     if (idx >= this.length || leftIdx >= this.length) return
    //     const leftValue = this.data[leftIdx]
    //     const rightValue = this.data[rightIdx]
    //     const value = this.data[idx]
    //     if (leftIdx > rightValue && value > rightValue) {
    //         this.swap(rightIdx, idx)
    //         this.heapifyDown(rightIdx)
    //     }

    //     else if (leftIdx < rightValue && value > leftValue) {
    //         this.swap(leftIdx, idx)
    //         this.heapifyUp(leftIdx)
    //     }
    // }
    private heapifyDown(idx: number): void {
        const rightIdx = this.rightIdx(idx)
        const leftIdx = this.leftIdx(idx)

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
    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2)
    }
    private rightIdx(idx: number): number {
        return 2 * idx + 2
    }

    private leftIdx(idx: number): number {
        return 2 * idx + 1
    }
    private swap(idx1: number, idx2: number): void {
        [this.data[idx1], this.data[idx2]] = [this.data[idx2], this.data[idx1]]
    }

}