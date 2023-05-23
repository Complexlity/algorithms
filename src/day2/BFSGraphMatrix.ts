export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {

    const seen = new Array(graph.length).fill(false) as boolean[]
    const prev = new Array(graph.length).fill(-1) as number[]
    const q = [source]
    do {
        const curr = q.shift() as number
        if (curr === needle) break
        const adjs = graph[curr]
        for (let i = 0; i < adjs.length; ++i) {
            if (seen[i]) continue
            if (adjs[i] === 0) continue
            seen[i] = true
            prev[i] = curr
            q.push(i)
        }
    } while (q.length);

    let curr = needle
    if (prev[curr] === -1) return null
    const out = [] as number[]
    while (prev[curr] !== -1) {
        out.push(curr)
        curr = prev[curr]
    }
    return [source].concat(out.reverse())
}