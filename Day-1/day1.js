#!/Users/fshen/.asdf/installs/nodejs/12.16.2/bin/node

var fs = require("fs");
var text = fs.readFileSync("./Day-1/day1.txt", "utf-8");
var arr = text.split("\n").map((e)=>parseInt(e));
console.log("****START****")
console.log('')

//***********
//***********PART1
console.log(arr.reduce((p,c,i)=>{
    return c > arr[i - 1] ? p+1 : p;
    },0),"DAY1-PART1")
//***********PART2
function getSumOfRange(arr,i){
    return arr[i]+arr[i+1]+arr[i+2]
}
let count = 0;
arr.forEach((e,i) => {
    if (i<arr.length - 3){
        let currentRange = getSumOfRange(arr,i);
        let nextRange = getSumOfRange(arr,i+1);
        if (nextRange > currentRange)
            count++
    }
});
console.log(count,'DAY1-PART2')
//***********

console.log('')
console.log("****END****")