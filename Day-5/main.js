#!/Users/fshen/.asdf/installs/nodejs/12.16.2/bin/node

var fs = require("fs")
const path = require("path")
var text = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")
let arr = text.split('\n')

console.log("****START****")
console.log('')

//***********START***********
//***********PART1
let generateArray = (arr) => {
    let maxNum = Math.max(...arr.join(',').replace(/->/g, ',').replace(/\s/g, '').split(','))
    var length = maxNum + 1
    let obj = []
    for (i = 0; i < length; i++) {
        obj.push(new Array(length).fill(0))
    }
    return obj
}

let generateData = (array, includeSecondSolution) => {
    let board = generateArray(arr)

    let getPoints = () => {
        let points = 0
        board.forEach(row => {
            row.forEach(element => {
                if (element >= 2) {
                    points += 1
                }
            })
        })
        return points
    }

    array.forEach(element => {
        let row = element.replace(/\s/g, '').split('->')
        let x1 = parseInt(row[0].split(',')[0])
        let y1 = parseInt(row[0].split(',')[1])
        let x2 = parseInt(row[1].split(',')[0])
        let y2 = parseInt(row[1].split(',')[1])
        if (x1 == x2) {
            let yrange = [y1, y2].sort((a, b) => a - b)
            for (let i = yrange[0]; i <= yrange[1]; i++) {
                board[i][x2] += 1
            }
        }
        else if (y1 == y2) {
            let xrange = [x1, x2].sort((a, b) => a - b)
            for (let i = xrange[0]; i <= xrange[1]; i++) {
                board[y2][i] += 1
            }
        }
        
        //***********PART2
        if (includeSecondSolution === 'part2') {
            if (x1 !== x2 && y1 !== y2) {
                let coord1 = [x1, y1]
                let coord2 = [x2, y2]

                
                for (let i = coord1[0]; x1 - x2 < 0 ? i <= coord2[0] : i >= coord2[0]; ) {
                    for (let j = coord1[1]; y1 - y2 < 0 ? j <= coord2[1] : j >= coord2[1]; ) {
                        board[j][i] += 1
                        y1 - y2 < 0 ? j++ : j--                    
                        x1 - x2 < 0 ? i++ : i--
                    }
                    
                }
            }

        }
    });
    return getPoints();
}

console.log(generateData(arr), 'DAY5-PART1')
console.log(generateData(arr, 'part2'), 'DAY5-PART2')

//***********END***********

console.log('')
console.log("****END****")