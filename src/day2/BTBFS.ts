export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    let q = [head]

    while (q.length) {
        const curr = q.pop() as BinaryNode<number>
        if (curr.value === needle) return true
        if (curr.left) q.unshift(curr.left)
        if (curr.right) q.unshift(curr.right)

    }
    return false
}