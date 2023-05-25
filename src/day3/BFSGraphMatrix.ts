export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    const seen = new Array(graph.length).fill(false)
    const prev = new Array(graph.length).fill(-1)
    const q: number[] = [source]

    while (q.length) {
        let curr = q.shift() as number
        if (curr === needle) break
        let adjs = graph[curr]
        for (let i = 0; i < adjs.length; i++) {
            if (seen[i]) continue
            if (adjs[i] === 0) continue
            seen[i] = true
            prev[i] = curr
            q.push(i)
        }
    }
    if (prev[needle] === -1) {
        return null
    }
    let curr = needle
    let out: number[] = []
    while (prev[curr] !== -1) {
        out.push(curr)
        curr = prev[curr]
    }
    return [source].concat(out.reverse())
}