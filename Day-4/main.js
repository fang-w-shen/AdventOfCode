#!/Users/fshen/.asdf/installs/nodejs/12.16.2/bin/node

var fs = require("fs")
const path = require("path");
var text = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")
let arr = text.replace(/\n/g, '-').split('--')

console.log("****START****")
console.log('')

//***********START***********
//***********PART1&PART2
let bingoNumbers = arr.shift().split(',')
let boards = arr.map((e, i) => {
    let boardString = e.split('-')
    let board = boardString.map(e => {
        let str = e.replace(/  /g, ',').replace(/ /g, ',').split(',')
        if (str[0] === '') {
            str.shift()
        }
        return str
    })
    return { board: board, boardnum: i }
})
// little trickery to clone the variable
let originalBoards = JSON.parse(JSON.stringify(boards))

let checkEachBoard = (pick) => {
    let winningboards = [];
    let winner;
    boards.forEach((board, i) => {

        let columnWin = checkColumns(board, pick)
        let rowWin = checkRows(board, pick)
        if (rowWin || columnWin) {
            winningboards.push(board.boardnum);
            winner = true
        }

    })
    return [winner, winningboards, pick]
}

let checkRows = (board, pick) => {

    return board.board.some((row, i) => {
        let count = 0;
        return row.some((e, ind) => {
            if (e == pick)
                row[ind] = 'x'
            if (row[ind] === 'x')
                count++

            return count === 5
        })
    })
}

function checkColumns(board, pick) {
    let columns = board.board.length
    for (x = 0; x < columns; x++) {
        let count = 0;
        board.board.some((row, i) => {
            if (row[x] == pick)
                row[x] = 'x'
            if (row[x] === 'x')
                count++
            return count === 5
        })
        if (count === 5) {
            return true
        }
    }
}

function getSum(arr) {
    return arr.reduce((p, c) => parseInt(p) + parseInt(c))
}

//'35', '45', '65', '50', '91', 
//'62', '5', '77', '94', '75'
//'62', '59', '93', '22', '78'
//'94', '44', '51', '2', '58'
//'5', '10', '91', '14', '18'
//'30', '80', '36', '32', '83', '35','62'
bingoNumbers.some((e, i) => {
    let results = checkEachBoard(e);
    if (results[0] === true) {
        let winningboards = results[1]
        winningboards.reverse().map((boardnum) => {
            let board = boards.find((e) => e.boardnum == boardnum).board
            let boardNumber = boards.find(e => e.board == board).boardnum
            let originalBoard = board.join(',').split(',').filter(e => e !== 'x')
            let sum = getSum(originalBoard);
            let pick = results[2]
            
            console.log(
                'board #' + `${boardNumber + 1}` +
                ' won from draw #' + `${i + 1}` +
                ' with lotteryNumber #' + pick +
                ', sum of #' + sum +
                ', and a final score of #' + `${pick * sum}`, 'DAY4-PART1')
            boards = boards.filter(e => e.boardnum !== boardNumber)
        })
    }
})
//***********END***********

console.log('')
console.log("****END****")