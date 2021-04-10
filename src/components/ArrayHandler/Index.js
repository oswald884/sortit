
export const createRandomArray = (length, min, max) => {
    let array = [];
    let i;
    for (i = 0; i < length; i++) {
        let num = getRandomInt(min, max);
        array.push(item(i, num));
    }

    return array;
}

function item(id, num) {

    return {
        id,
        num,
        color: 'gray'
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}