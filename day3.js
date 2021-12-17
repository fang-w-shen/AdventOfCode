#!/Users/fshen/.asdf/installs/nodejs/12.16.2/bin/node

var fs = require("fs");
var text = fs.readFileSync("./day3.txt", "utf-8");
var arr = text.split("\n");
console.log("****START****")
console.log('')

//***********START***********

//***********PART1
function getBinary(str) {
    let val = 0;
    str.split('').reverse().map((e) => parseInt(e)).forEach((e, i) => {
        if (e === 1) {
            val += e * (2 ** i)
        }
    });
    return val
}

let binary = new Array(arr[0].length).fill(0)
arr.forEach((element, index) => {
    binary.forEach((e, i) => {
        binary[i] += parseInt(element[i])
    })
})
let gammaBinary = binary.map((e) => e > 500 ? 1 : 0).join('')
let epsilonBinary = binary.map((e) => e < 500 ? 1 : 0).join('')
let gamma = getBinary(gammaBinary)
let epsilon = getBinary(epsilonBinary)

console.log(gamma * epsilon, 'DAY3-PART1')

//***********PART2

console.log('DAY3-PART2')
//***********END***********

console.log('')
console.log("****END****")