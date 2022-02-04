#!/Users/fshen/.asdf/installs/nodejs/12.16.2/bin/node

var fs = require("fs")
const path = require("path")
var text = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")
let arr = text.split('\n')
console.log("****START****")
console.log('')

//***********START***********
//***********PART1
let findLowestAreaCoords = (arr) => {
    let lowestNumbers = []
    arr.forEach((row, y) => {
        row.split('').forEach((element, x) => {
            let arrs;
            if (y === 0) {
                arrs = [row[x - 1], row[x + 1], arr[y + 1][x]]
            }
            //  MIDDLE ROWS
            else if (y > 0 && y < arr.length - 1) {
                arrs = [row[x - 1], row[x + 1], arr[y + 1][x], arr[y - 1][x]]
            }
            else {
                arrs = [row[x - 1], row[x + 1], arr[y - 1][x]]
            }
            if (arrs.filter(e => e !== undefined).every((e) => { return element < e })) {
                lowestNumbers.push({ value: element.toString(), coords: [y, x] })
            }
        })
    });
    return lowestNumbers
}

//***********PART2
let areas = [];
(function findLargestAreasBreadthFirstSearch(arr) {

    let lowestCoordinates = findLowestAreaCoords(arr)
    const visited = arr.map((row, y) =>
        row.split('').map((element, x) => ({
            value: element,
            visited: false,
            steps: 0,
            x,
            y
        }))
    );

    for (let i = 0; i < lowestCoordinates.length; i++) {
        let lowCoordObj = lowestCoordinates[i]
        let steps = 0
        let area = 1
        let x = lowCoordObj.coords[1]
        let y = lowCoordObj.coords[0]
        let queue = [visited[y][x]]
        let neighbors
        while (queue.length) {
            steps++
            let node = queue.shift()
            node.visited = true
            neighbors = getNeighbors(visited, node.y, node.x)
            while (neighbors.length) {
                area++
                let neighbor = neighbors.shift()
                neighbor.visited = true
                neighbor.steps = node.steps + 1
                queue.push(neighbor)
            }
        }
        lowCoordObj.area = area
        areas.push(area)
    }
    return areas
})(arr);

function getNeighbors(node, y, x) {
    let neighbors = []
    if (x - 1 >= 0 && !node[y][x - 1].visited && node[y][x - 1].value !== '9')
        neighbors.push(node[y][x - 1])
    if (y - 1 >= 0 && !node[y - 1][x].visited && node[y - 1][x].value !== '9')
        neighbors.push(node[y - 1][x])
    if (x + 1 <= node[0].length - 1 && !node[y][x + 1].visited && node[y][x + 1].value !== '9')
        neighbors.push(node[y][x + 1])
    if (y + 1 <= node.length - 1 && !node[y + 1][x].visited && node[y + 1][x].value !== '9')
        neighbors.push(node[y + 1][x])
    return neighbors
}

console.log(findLowestAreaCoords(arr).map(e => parseInt(e.value) + 1).reduce((a, b) => a + b), 'DAY-9-PART-1')
console.log(areas.sort((a, b) => a - b).pop() * areas.pop() * areas.pop(), 'DAY-9-PART-2')

//***********END***********
console.log('')
console.log("****END****")