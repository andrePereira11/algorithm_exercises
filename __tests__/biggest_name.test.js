const biggestName = require('../resolution/biggest_name')

describe('success', () => {
    test('Fount the major and minor value', async () => {
        expect(await biggestName.foundBiggestName(['Andre', 'Alysson', 'Michel'])).toEqual('Alysson');
    });
})