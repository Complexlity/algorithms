type Point = {
    x: number,
    y: number
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    let path: Point[] = []
    const seen: boolean[][] = new Array(maze.length).fill(false).map(() => new Array(maze[0].length).fill(false))
    walk(maze, wall, start, end, seen, path)
    return path
}

const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
]

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    let x = curr.x
    let y = curr.y
    if (x < 0 || x >= maze[0].length || y < 0 || y >= maze.length) return false
    if (maze[y][x] === wall) return false
    if (seen[y][x]) return false
    if (x === end.x && y === end.y) {
        path.push(end)
        return true
    }
    seen[y][x] = true
    path.push(curr)
    for (let i = 0; i < dir.length; i++) {
        const [dx, dy] = dir[i]
        if (walk(maze, wall, { x: curr.x + dx, y: curr.y + dy }, end, seen, path)) {
            return true
        }
    }
    path.pop()
    return false
}
