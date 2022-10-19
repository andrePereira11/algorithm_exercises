const romanNumber = require('../resolution/roman_number')

describe('success', () => {
    test('Converting correctly to roman number since 1 to 10', async () => {
        expect(await romanNumber.convertToRomanNumber(1)).toEqual('I');
        expect(await romanNumber.convertToRomanNumber(2)).toEqual('II');
        expect(await romanNumber.convertToRomanNumber(3)).toEqual('III');
        expect(await romanNumber.convertToRomanNumber(4)).toEqual('IV');
        expect(await romanNumber.convertToRomanNumber(5)).toEqual('V');
        expect(await romanNumber.convertToRomanNumber(9)).toEqual('IX');
        expect(await romanNumber.convertToRomanNumber(10)).toEqual('X');
    });

    test('Converting correctly to roman number since 10 to 100', async () => {
        expect(await romanNumber.convertToRomanNumber(22)).toEqual('XXII');
        expect(await romanNumber.convertToRomanNumber(40)).toEqual('XL');
        expect(await romanNumber.convertToRomanNumber(50)).toEqual('L');
        expect(await romanNumber.convertToRomanNumber(84)).toEqual('LXXXIV');
        expect(await romanNumber.convertToRomanNumber(100)).toEqual('C');
    });

    test('Converting correctly to roman number since 100 to 500', async () => {
        expect(await romanNumber.convertToRomanNumber(256)).toEqual('CCLVI');
        expect(await romanNumber.convertToRomanNumber(300)).toEqual('CCC');
        expect(await romanNumber.convertToRomanNumber(400)).toEqual('CD');
        expect(await romanNumber.convertToRomanNumber(412)).toEqual('CDXII');
        expect(await romanNumber.convertToRomanNumber(500)).toEqual('D');
    });

    it.skip('test', () => { })

    //pending('test2', () => {})
})
