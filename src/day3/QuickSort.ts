export default function quickSort(arr: number[]): number[] {
    qs(arr, 0, arr.length - 1)
    return arr
}

function qs(arr: number[], low: number, high: number): void {
    if (low >= high) return
    const pivot = partition(arr, low, high)
    qs(arr, low, pivot - 1)
    qs(arr, pivot + 1, high)
}

function partition(arr: number[], low: number, high: number): number {
    let pivot = arr[high]
    let idx = low - 1
    for (let i = low; i < high; i++) {
        if (arr[i] < pivot) {
            idx++
            [arr[i], arr[idx]] = [arr[idx], arr[i]]
        }
    }
    idx++
    [arr[idx], arr[high]] = [arr[high], arr[idx]]
    return idx
}
