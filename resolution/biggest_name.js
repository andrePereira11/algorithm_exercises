const foundBiggestName = async (names) => {
    var biggest = ''

    names.forEach(element => {
        if(element.length >= biggest.length){ biggest = element }
    });

    return biggest
}

module.exports = {
    foundBiggestName
}