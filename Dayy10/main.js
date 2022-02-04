#!/Users/fshen/.asdf/installs/nodejs/12.16.2/bin/node

var fs = require("fs")
const path = require("path")
var text = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")
let arr = text.split('\n')
console.log("****START****")
console.log('')

//***********START***********
//***********PART1


console.log('DAY-10-PART-1')

//***********END***********
console.log('')
console.log("****END****")