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

console.log(arr)
// console.log(iterate(n = 80) + ' finished with #' + counter + ' steps', 'DAY-6-PART-1')
// console.log(iterateQuicker(n = 256) + ' finished with #' + counter2 + ' steps', 'DAY-6-PART-2')


//***********END***********
console.log('')
console.log("****END****")