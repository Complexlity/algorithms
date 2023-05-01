type Point = {
    x: number,
    y: number,
}

const dir = [
    [-1, 0], [0, -1], [1, 0], [0, 1]
]

function walk(maze: string[], wall: string, curr: Point, seen: boolean[][], end: Point, path: Point[]): boolean {
    // Base Cases
    // 1. If it's off the map
    if (curr.x < 0 || curr.x > maze[0].length || curr.y < 0 || curr.y > maze.length) return false



    // if we're at a wall
    if (maze[curr.y][curr.x] === wall) return false

    // if we're at the end 
    if (curr.x == end.x && curr.y == end.y) {
        path.push(end)
        return true
    }
    // if it's a place we have seen before
    if (seen[curr.y][curr.x]) return false

    // Recurs Stage
    // pre
    seen[curr.y][curr.x] = true
    path.push(curr)

    // recurse
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        if (walk(maze, wall, {
            x: curr.x + x, y: curr.y + y
        }, seen, end, path)
        ) {
            return true
        }

    }
    // post
    path.pop()
    return false
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = []
    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false))
    }
    walk(maze, wall, start, seen, end, path)
    return path
}

