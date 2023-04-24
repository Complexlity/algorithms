export default function bsList(haystack: number[], needle: number): boolean {
    let low = 0
    let high = haystack.length
    do {
        const mid = Math.floor(low + (high - low) / 2)
        const value = haystack[mid]
        if (value === needle) {
            return true;
        }

        else if (value > needle) {

            high = mid
        }
        else low = mid + 1

    } while (low < high);
    return false
}





/* 
PSEUDOCODE
 1. Go to the mid point
 2. Is it the value? return true
 3. is it greater? change low to midpoint + 1 because we checked the midpoint
 4. is it less than? change high to midpoint because we're checking everything in the space 
 5. while low < high, repeat
 6. return false
*/