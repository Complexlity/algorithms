export default function merge_sort(arr: number[]): void {
    if (arr.length < 2) return;
    const midPoint = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0, midPoint);
    const rightArray = arr.slice(midPoint);
    merge_sort(leftArray);
    merge_sort(rightArray);
    merge(arr, leftArray, rightArray);
}

function merge(arr: number[], leftArray: number[], rightArray: number[]): void {
    let i = 0;
    let j = 0;
    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] <= rightArray[j]) {
            arr[i + j] = leftArray[i];
            i++;
        } else {
            arr[i + j] = rightArray[j];
            j++;
        }
    }
    while (i < leftArray.length) {
        arr[i + j] = leftArray[i];
        i++;
    }
    while (j < rightArray.length) {
        arr[i + j] = rightArray[j];
        j++;
    }
}
