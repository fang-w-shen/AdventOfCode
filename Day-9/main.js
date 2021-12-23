#!/Users/fshen/.asdf/installs/nodejs/12.16.2/bin/node

var fs = require("fs")
const path = require("path")
var text = fs.readFileSync(path.resolve(__dirname, "test.txt"), "utf-8")
let arr = text.split('\n')
console.log("****START****")
console.log('')

//***********START***********
//***********PART1



console.log(arr, 'DAY-9-PART-1')
// console.log(iterateWholeLine(arr), 'DAY-8-PART-2')

//***********END***********
console.log('')
console.log("****END****")