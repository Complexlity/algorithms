export default function post(head: BinaryNode<number>): number[] {
    return walk(head, [])
}

function walk(curr: BinaryNode<number> | null, path: number[]) {
    if (!curr) return path
    walk(curr.left, path)
    walk(curr.right, path)
    path.push(curr.value)
    return path
}