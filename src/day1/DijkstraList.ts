export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList

): number[] {

    const dist = new Array(arr.length).fill(Infinity)
    const seen = new Array(arr.length).fill(false)
    const prev = new Array(arr.length).fill(-1)


    while (hasUnvisited(seen)) {
        const low = getLowestUnvisited(seen, dist)
    }


}
/* 
RUNNING TIME
0(E)
*/