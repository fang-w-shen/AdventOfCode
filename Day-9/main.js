#!/Users/fshen/.asdf/installs/nodejs/12.16.2/bin/node

var fs = require("fs")
const path = require("path")
var text = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")
let arr = text.split('\n')
console.log("****START****")
console.log('')

//***********START***********
//***********PART1
let findLowest = (arr) => {
    let lowestNumbers = []
    arr.forEach((row, x, __) => {
        row.split('').forEach((element, y, _) => {
            let arr;
            
            if (x===0) {
                arr = [_[y - 1], _[y + 1], __[x + 1][y]]
            }
            else if (x > 0 && x < __.length-1) {
                arr = [_[y - 1], _[y + 1], __[x + 1][y], __[x - 1][y]]
            }
            else {
                arr = [_[y - 1], _[y + 1], __[x - 1][y]]
            }
            if (arr.filter(e=> e!== undefined).every((e)=>{return element<e})){
                lowestNumbers.push(element.toString())
            }
        })
    });
    lowestNumbers = lowestNumbers.map(e=>parseInt(e)+1)
    return lowestNumbers.reduce((a,b)=>a+b)
}

console.log(findLowest(arr), 'DAY-9-PART-1')
// console.log(iterateWholeLine(arr), 'DAY-8-PART-2')

//***********END***********
console.log('')
console.log("****END****")