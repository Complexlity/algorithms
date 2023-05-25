export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
    const seen = new Array(graph.length).fill(false)
    const path: number[] = []
    if (walk(graph, source, seen, path, needle)) return path
    return null

}

function walk(graph: WeightedAdjacencyList, curr: number, seen: boolean[], path: number[], needle: number): boolean {
    if (seen[curr]) return false
    seen[curr] = true
    path.push(curr)
    if (curr === needle) return true
    let adjs = graph[curr]
    for (let i = 0; i < adjs.length; i++) {
        let edge = adjs[i]
        if (walk(graph, edge.to, seen, path, needle)) {
            return true
        }
    }
    path.pop()
    return false
}