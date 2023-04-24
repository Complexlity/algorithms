export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j)
            }
        }
    }
}

function swap(arr: number[], j: number) {
    const temp = arr[j]
    arr[j] = arr[j + 1]
    arr[j + 1] = temp
}



/* 
PSEUDOCODE
loop through the array(zero to N) to N-1  
check if array[i] is higher than array[i+1]
if true, swap then
repeat process without the last element till array is empty
*/