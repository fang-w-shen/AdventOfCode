#!/Users/fshen/.asdf/installs/nodejs/12.16.2/bin/node

var fs = require("fs");
var text = fs.readFileSync("./Day-2/day2.txt", "utf-8");
var arr = text.split("\n");
console.log("****START****")
console.log('')

//***********START***********

//***********PART1
function multiply(){
    return depth*horizontal;
}
let depth = 0;
let horizontal = 0;
arr.forEach((e,i) => {
    if (e.includes('forward')){
        horizontal+= parseInt(e.split(' ')[1])
    }
    else if (e.includes('up')){
        depth-= parseInt(e.split(' ')[1])
    }
    else if (e.includes('down')){
        depth+= parseInt(e.split(' ')[1])
    }
});
console.log(multiply(),'DAY2-PART1')

//***********PART2
function multiply2(){
    return depth2*horizontal2;
}
let depth2 = 0;
let horizontal2 = 0;
let aim = 0;
arr.forEach((e,i) => {
    if (e.includes('forward')){
        horizontal2+= parseInt(e.split(' ')[1])
        depth2+= aim * parseInt(e.split(' ')[1])
    }
    else if (e.includes('up')){
        aim-= parseInt(e.split(' ')[1])
    }
    else if (e.includes('down')){
        aim+= parseInt(e.split(' ')[1])
    }
});
console.log(multiply2(),'DAY2-PART2')
//***********END***********

console.log('')
console.log("****END****")