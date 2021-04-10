import { sleep, setChecking, setCurrent, setSuccessAll, setNormal } from './Animations';

async function InsertionSort(array, setArray, complete, animationSpeed) {
    let newArray = [...array];
    let n = newArray.length;
    for (let i = 1; i < n; i++) {
        // Choosing the first element in our unsorted subarray
        let current = newArray[i].num;
        newArray = await setCurrent(newArray, setArray, i);
        await sleep(250 / animationSpeed);

        // The last element of our sorted subarray
        let j = i - 1;

        while ((j > -1) && (current < newArray[j].num)) {
            await setChecking(newArray, setArray, j);
            await sleep(400 / animationSpeed);
            newArray[j + 1].num = newArray[j].num;
            j--;
        }

        newArray = await setNormal(newArray, setArray, i);
        newArray[j + 1].num = current;
    }

    newArray = setSuccessAll(newArray, setArray);

    setArray(newArray);
    complete();
}

export default InsertionSort;