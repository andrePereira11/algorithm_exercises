const foundMajorAndMinor = async (numbers) => {

    const max = numbers.reduce((prev, item) => {
        return prev > item ? prev : item;
    });

    const min = numbers.reduce((prev, item) => {
        return prev < item ? prev : item;
    });

    // var maior = numbers[0]
    // var menor = numbers[0]

    // for (let i = 0; i < numbers.length; i++) {
    //     if (numbers[i] >= maior) { maior = numbers[i]; }
    //     if (numbers[i] <= menor) { menor = numbers[i]; }
    // }

    return {
        "major": max,
        "minor": min
    }
}

module.exports = {
    foundMajorAndMinor
}