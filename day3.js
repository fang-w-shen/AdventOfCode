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
let gammaBinary = binary.map((e) => e > arr.length / 2 ? 1 : 0).join('')
let epsilonBinary = binary.map((e) => e < arr.length / 2 ? 1 : 0).join('')
let gamma = getBinary(gammaBinary)
let epsilon = getBinary(epsilonBinary)

console.log(gamma * epsilon, 'DAY3-PART1')

//***********PART2
let reducedArr;
function recursiveBinary(arr, most, count = 0) {
    let binary = new Array(arr[0].length).fill(0)
    arr.forEach((element, index) => {
        binary.forEach((e, i) => {
            if (parseInt(element[i]) === 1) {
                binary[i] += 1
            }
            else {
                binary[i] -= 1
            }
        })
    })

    let gammaBinary = binary.map((e) => e >= 0 ? 1 : 0).join('')
    reducedArr = arr.filter((element, i, a) => {
        return most === 'most' ? element[count] == gammaBinary[count] : element[count] != gammaBinary[count]
    })

    if (reducedArr.length > 1 && count < arr[0].length) {
        count++
        recursiveBinary(reducedArr, most, count)
    }
    return reducedArr
}

let oxygen = getBinary(recursiveBinary(arr, 'most')[0]);
let co2 = getBinary(recursiveBinary(arr, 'least')[0]);
console.log(oxygen * co2, 'DAY3-PART2')
//***********END***********

console.log('')
console.log("****END****")