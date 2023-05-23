type Point = {
    x: number
    y: number
}
export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = []
    const path: Point[] = []
    for (let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[i].length).fill(false))
    }
    walk(maze, wall, start, seen, end, path)
    return path
}

const traversor = [
    [-1, 0], [1, 0], [0, 1], [0, -1]
]

function walk(maze: string[], wall: string, curr: Point, seen: boolean[][], end: Point, path: Point[]): boolean {
    if (curr.x < 0 || curr.x > maze[0].length || curr.y < 0 || curr.y > maze.length) return false
    if (maze[curr.y][curr.x] === wall) return false
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end)
        return true
    }

    if (seen[curr.y][curr.x]) return false

    seen[curr.y][curr.x] = true
    path.push(curr)

    for (let i = 0; i < traversor.length; ++i) {
        const [x, y] = traversor[i]
        const newCurr = { x: curr.x + x, y: curr.y + y }
        if (walk(maze, wall, newCurr, seen, end, path)) {
            return true
        }
    }


    path.pop()
    return false
}