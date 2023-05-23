export default function pre(head: BinaryNode<number>): number[] {
    return walk(head, [])
}

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) return path
    path.push(curr.value)
    walk(curr.left, path)
    walk(curr.right, path)
    return path
}