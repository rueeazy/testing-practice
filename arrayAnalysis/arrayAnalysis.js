let object = {};

const analysis = (array) => {
    object.average = average(array);
    object.min = minNum(array);
    object.max = maxNum(array);
    object.length = array.length;
    return object
}

const average = (array) => {
    return array.reduce((a, c) => a + c) / array.length;
}

const minNum = (array) => {
    return Math.min(...array)
}

const maxNum = (array) => {
    return Math.max(...array);
}

module.exports = analysis