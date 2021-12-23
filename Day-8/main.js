#!/Users/fshen/.asdf/installs/nodejs/12.16.2/bin/node

var fs = require("fs")
const path = require("path")
var text = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")
let arr = text.split('\n')
console.log("****START****")
console.log('')

//***********START***********
//***********PART1

let iterateOnOutput = (arr) => {
    let dictionary = new Array(8).fill(0)
    arr.forEach(element => {
        let output = element.split('|')[1]
        output.split(' ').slice(1).map(element => {
            dictionary[element.length] += 1
        })
    });
    //          1               4                7              8
    return dictionary[2] + dictionary[4] + dictionary[3] + dictionary[7]
}

//***********PART2

let iterateWholeLine = (arr) => {

    let beginAnalysis = () => {
        let solution = ''

        arr.forEach((element, index, og) => {
            let dictionary = new Array(
                '',
                '',
                { letter: [], number: [1] },
                { letter: [], number: [7] },
                { letter: [], number: [4] },
                { letter: [], number: [2, 3, 5] },
                { letter: [], number: [0, 6, 9] },
                { letter: [], number: [8] }
            )

            let row = element.replace('| ', '').split(' ')
            row.forEach(e => {
                let index = e.length
                dictionary[index].letter.push(e)
            })

            let a = comparePanelWithSegmentLengths3to2(dictionary)
            let [bd, cf] = comparePanelWithSegmentLengths4to2(dictionary)
            let eg = comparePanelWithSegmentLengths7to4(a, dictionary)
            let [panel0, panel6, panel9] = comparePanelWithSegmentLengths7to6(cf, eg, dictionary)
            let panel1 = dictionary[2].letter
            let panel7 = dictionary[3].letter
            let panel4 = dictionary[4].letter
            let panel8 = dictionary[7].letter
            let [panel2, panel3, panel5] = comparePanelWithSegmentLengths6to5(cf, bd, dictionary)
            let secret = [panel0, panel1, panel2, panel3, panel4, panel5, panel6, panel7, panel8, panel9]

            let output = element.split('|')[1]
            output.split(' ').slice(1).map((element, innerIndex) => {
                let i = 0
                for (; i < secret.length; i++) {
                    if (secret[i].includes(element)) {
                        // console.log(element,i)
                        solution += i
                        break
                    }
                }

                if (innerIndex === 3 && index < og.length - 1)
                    solution += ','
            })
        })

        let count = solution.split(',').reduce((a, b) => parseInt(a) + parseInt(b))
        return count
    }

    let comparePanelWithSegmentLengths3to2 = (dictionary) => {
        let differentLetter = dictionary[3].letter[0].split('').filter(e => dictionary[2].letter[0].indexOf(e) < 0)[0]
        return [differentLetter]
    }

    let comparePanelWithSegmentLengths4to2 = (dictionary) => {
        let differentLetters = dictionary[4].letter[0].split('').filter(e => dictionary[2].letter[0].indexOf(e) < 0)
        let sameLetters = dictionary[4].letter[0].split('').filter(e => dictionary[2].letter[0].indexOf(e) >= 0)
        return [differentLetters, sameLetters]
    }

    let comparePanelWithSegmentLengths7to4 = (a, dictionary) => {
        let differentLetters = dictionary[7].letter[0].split('')
            // filter out differences between 7 and 4
            .filter(e => dictionary[4].letter[0].indexOf(e) < 0)
            // as well as value from what a should b found from first comparison
            .filter(e => e !== a[0])

        return differentLetters
    }

    let comparePanelWithSegmentLengths7to6 = (cf, eg, dictionary) => {
        let panel6 = dictionary[6].letter.filter(e => { return !(e.split('').includes(cf[0]) && e.split('').includes(cf[1])) })
        let panel0 = dictionary[6].letter.filter(e => { return !panel6.includes(e) && e.split('').includes(eg[0]) && e.split('').includes(eg[1]) })
        let panel9 = dictionary[6].letter.filter(e => !panel6.includes(e) && !panel0.includes(e))
        return [panel0, panel6, panel9]
    }

    let comparePanelWithSegmentLengths6to5 = (cf, bd, dictionary) => {
        let panel3 = dictionary[5].letter.filter(e => { return e.split('').includes(cf[0]) && e.split('').includes(cf[1]) })
        let panel5 = dictionary[5].letter.filter(e => { return !panel3.includes(e) && e.split('').includes(bd[0]) && e.split('').includes(bd[1]) })
        let panel2 = dictionary[5].letter.filter(e => { return !panel3.includes(e) && !panel5.includes(e) })
        return [panel2, panel3, panel5]
    }

    return beginAnalysis()

}

console.log(iterateOnOutput(arr), 'DAY-8-PART-1')
console.log(iterateWholeLine(arr), 'DAY-8-PART-2')

//***********END***********
console.log('')
console.log("****END****")