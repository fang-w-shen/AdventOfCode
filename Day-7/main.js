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
let mean = (arr) => {
    let total = 0, i;
    for (i = 0; i < arr.length; i += 1) {
        total += arr[i]
    }
    return total / arr.length
}

let median = (arr) => {
    var median = 0, numsLen = arr.length;
    arr.sort((a, b) => a - b);

    if (numsLen % 2 === 0) {
        median = (arr[numsLen / 2 - 1] + arr[numsLen / 2]) / 2;
    } else {
        median = arr[(numsLen - 1) / 2];
    }

    return median;
}

let findWeightedAvg = (arr) => {
    let meanNum = mean(arr)
    let medianNum = median(arrClone)
    let num = 0;
    let index = 0;
    arr.forEach((e, i) => {
        num += Math.abs(e - Math.floor(meanNum))
        index++

    })
    return [meanNum, medianNum, Math.round(num / index)]
}

let partialSum = (element, measure) => {
    let abs = Math.abs(element - Math.round(measure))
    return ((abs * (abs + 1)) / 2)
}

let calculateFuel = (arr, part2) => {
    let [mean, median, weightedAvg] = findWeightedAvg(arr)
    let lower = 0
    let middle = 0
    let higher = 0
    let lower2 = 0
    let middle2 = 0
    let higher2 = 0
    arr.forEach((e, i) => {

        if (part2 === 'part2') {
            // use mean
            lower += partialSum(e, mean - 1)
            middle += partialSum(e, mean)
            higher += partialSum(e, mean + 1)

            // use median
            lower2 += partialSum(e, median - 1)
            middle2 += partialSum(e, median)
            higher2 += partialSum(e, median + 1)
        }
        else {
            // use mean
            lower += Math.abs(e - (mean - 1))
            middle += Math.abs(e - (mean))
            higher += Math.abs(e - (mean + 1))

            // use median
            lower2 += Math.abs(e - (median - 1))
            middle2 += Math.abs(e - (median))
            higher2 += Math.abs(e - (median + 1))
        }

    })
    // console.log([lower, middle, higher, lower2, middle2, higher2])
    return [lower, middle, higher, lower2, middle2, higher2].sort((a, b) => a - b)[0]
}

console.log(calculateFuel(arr), 'DAY-7-PART-1')
console.log(calculateFuel(arr, 'part2'), 'DAY-7-PART-2')

//***********END***********
console.log('')
console.log("****END****")