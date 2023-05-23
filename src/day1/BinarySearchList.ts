export default function binarySearchList(arr: number[], x: number): boolean {
    let low = 0
    let high = arr.length
    while (low < high) {
        const mid = Math.floor(low + (high - low) / 2)
        const value = arr[mid]
        if (value === x) return true
        else if (value < x) high = mid
        else low = mid + 1
    }
    return false
}