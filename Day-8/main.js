#!/Users/fshen/.asdf/installs/nodejs/12.16.2/bin/node

var fs = require("fs")
const path = require("path")
var text = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")
let arr = text.split('\n')
let arrClone = JSON.parse(JSON.stringify(arr))
console.log("****START****")
console.log('')

//***********START***********
//***********PART1
let dictionary = new Array(8).fill(0)

let iterate = (arr) => {
    let count = 0;
    arr.forEach(element => {
        let output = element.split('|')[1]
        // dictionary[element]
        output.split(' ').slice(1).map(element => {
            dictionary[element.length] += 1
        })
    });
    return dictionary[2] + dictionary[4] + dictionary[3] + dictionary[7]
}

console.log(iterate(arr), 'DAY-8-PART-1')


//***********END***********
console.log('')
console.log("****END****")