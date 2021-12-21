#!/Users/fshen/.asdf/installs/nodejs/12.16.2/bin/node

var fs = require("fs")
const path = require("path")
var text = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")
let arr = text.split(',').map(e => parseInt(e))
let arrClone = JSON.parse(JSON.stringify(arr))
console.log("****START****")
console.log('')

//***********START***********
//***********PART1

let counter = 0
let iterate = (n) => {
    for (i = 0; i < n; i++) {
        let length = arr.length
        for (j = 0; j < length; j++) {
            if (arr[j] === 0) {
                arr[j] = 6
                arr.push(8)
                counter++
                continue
            }
            else {
                arr[j] -= 1
                counter++

            }
        }
    }
    return arr.length
}

let counter2 = 0
let iterateQuicker = (n) => {
    let count = new Array(9).fill(0)
    Array(9).fill().map((e, i) => {count[i] = 0;counter2++})
    arrClone.map(e => {count[e] += 1;counter2++})
    for (i = 0; i < n; i++) {
        let newcount = count[0]
        for (j = 0; j < count.length - 1; j++) {

            count[j] = count[j + 1]
            counter2++
        }
        count[6] += newcount
        count[8] = newcount

    }
    return count.reduce((a, b) => a + b)
}

console.log(iterate(n = 80) + ' finished with #' + counter + ' steps', 'DAY-6-PART-1')
console.log(iterateQuicker(n = 256) + ' finished with #' + counter2 + ' steps', 'DAY-6-PART-2')


//***********END***********
console.log('')
console.log("****END****")