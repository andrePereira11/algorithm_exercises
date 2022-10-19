const convertToRomanNumber = async (num) => {
    var romanos = [ "I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M" ]
    var arabicos = [ 1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
    var romanos2 = {1:"I", 4:"IV"}
    var result = []

    while (+num > 0) {
        for(let x=arabicos.length - 1 ; x>=0 ; x--){
            if (+num >= arabicos[x]) {
                result.push(romanos[x])
                num -= arabicos[x]
                break
            }
        }
    }

    return result.join('')
}

module.exports = {
    convertToRomanNumber
}