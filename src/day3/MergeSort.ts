export default function merge_sort(arr: number[]): void {
    if (arr.length < 2) return
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)
    merge_sort(left)
    merge_sort(right)
    merge(arr, left, right)
}

function merge(arr: number[], left: number[], right: number[]): void {
    let i = 0
    let j = 0
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            arr[i + j] = left[i]
            i++
        }
        if (right[j] < left[i]) {
            arr[i + j] = right[j]
            j++
        }
    }
    while (j < right.length) {
        arr[i + j] = right[j]
        j++
    }
    while (i < left.length) {
        arr[i + j] = left[i]
        i++
    }
}