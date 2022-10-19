const majorAndMinor = require('../resolution/major_and_minor')

describe('success', () => {
    test('Fount the major and minor value', async () => {
        expect(await majorAndMinor.foundMajorAndMinor([2, 6, 4, 8, 9, 2])).toEqual({"major": 9, "minor":2});
    });
})