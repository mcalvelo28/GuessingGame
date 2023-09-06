const dectobinbutt = document.getElementsByClassName("dectobinbutt")[0]
const bintodecbutt = document.getElementsByClassName("bintodecbutt")[0]

const dectobin = document.getElementsByClassName("dectobin")[0]
const bintodec = document.getElementsByClassName("bintodec")[0]

const dectobinout = document.getElementsByClassName("dectobinout")[0]
const bintodecout = document.getElementsByClassName("bintodecout")[0]

function tobinary(num) {
    binarynum = ''

    while (num !== 0) {
        binarynum += (num % 2).toString()
        num = Math.floor(num / 2)

        if (num === 1){
            binarynum += '1'
            break
        }
    }

    return binarynum.split('').reverse().join('')
}

function binarybutton() {
    num = dectobin.value

    dectobinout.value = tobinary(num)
}

function todecimal(num) {
    num = num.toString()
    decimal = 0

    for (i=0; i<num.length; i++) {
        if (num[i] !== '1' && num[i] !== '0'){
            return 'Invalid'
        } else {
        decimal += Number(num[i]) * (2 ** ((num.length - 1) - i))
        }
    }

    return decimal
}

function decimalbutton () {
    num = bintodec.value

    bintodecout.value = todecimal(num)
}

dectobinbutt.addEventListener("click", binarybutton)
bintodecbutt.addEventListener("click", decimalbutton)
