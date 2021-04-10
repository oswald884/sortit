
export function setSuccessAll(array, setArray) {
    let newArray = array.map((item) => {
        return{
            ...item,
            color: 'green'
        }
    });
    setArray(newArray);
    return newArray;
}

export function swap(array, setArray, i, j) {
    let tmp = array[i].num;
    array[i].num = array[j].num;
    array[j].num = tmp;
    setArray(array);
    return array;
}

export function setChecking(array, setArray, id) {
    let newArray = array.map((item) => {
        return item.id === id ? ({
            ...item,
            color: 'orange'
        }) : (item)
    });
    setArray(newArray);
    return newArray;
}

export function setCurrent(array, setArray, id) {
    let newArray = array.map((item) => {
        return item.id === id ? ({
            ...item,
            color: 'purple'
        }) : (item)
    });
    setArray(newArray);
    return newArray;
}

export function setComparing(array, setArray, id1, id2) {
    let newArray = array.map((item) => {
        return item.id === id1 || item.id === id2 ? ({
            ...item,
            color: 'orange'
        }) : (item)
    });
    setArray(newArray);
    return newArray;
}

export function setMin(array, setArray, id) {
    let newArray = array.map((item) => {
        return item.id === id ? ({
            ...item,
            color: 'red'
        }) : (item)
    });
    setArray(newArray);
    return newArray;
}

export function setNormal(array, setArray, id) {
    let newArray = array.map((item) => {
        return item.id === id ? ({
            ...item,
            color: 'gray'
        }) : (item)
    });
    setArray(newArray);
    return newArray;
}

export function setSuccess(array, setArray, id) {
    let newArray = array.map((item) => {
        return item.id === id ? ({
            ...item,
            color: 'green'
        }) : (item)
    });
    setArray(newArray);
    return newArray;
}

export const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}