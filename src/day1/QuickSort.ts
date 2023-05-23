function qs(arr: number[], low: number, high: number,): void {
    if (low >= high) {
        return
    }
    const pivotIdx = partition(arr, low, high)
    qs(arr, low, pivotIdx - 1)
    qs(arr, pivotIdx + 1, high)
}

function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let idx = low - 1;
    for (let i = low; i < high; ++i) {
        if (arr[i] <= pivot) {
            idx++;
            const tmp = arr[i]
            arr[i] = arr[idx]


            arr[idx] = tmp

        }
    }
    idx++;
    arr[high] = arr[idx]
    arr[idx] = pivot
    console.log(arr)
    return idx;

}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1)
}


/* PSEUDOCODE
 Running time
 From O(nlogn) -> O(n2)
 */

console.log(partition([16, 2, 5, 8, 7, 44, 12, 5, 6, 22, 18], 0, 8))

console.log(partition([45, 22, 3, 78, 4, 9, 6, 28, 11, 26, 19], 0, 10))