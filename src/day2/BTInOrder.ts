export default function inorder(head: BinaryNode<number>): number[] {
    return walk(head, [])
}

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) return path
    walk(curr.left, path)
    path.push(curr.value)
    walk(curr.right, path)
    return path
}