const romanNumber = require('./resolution/roman_number')

const init = async () => {
    console.log(await romanNumber.convertToRomanNumber(22))
}

module.exports = init()