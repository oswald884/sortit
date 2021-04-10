import { sleep, setMin, setChecking, setNormal, swap, setSuccess } from './Animations';

async function SelectionSort(array, setArray, complete, animationSpeed) {
    let newArray = [...array];
    let n = array.length;

    for (let i = 0; i < n; i++) {
        let min = i;
        newArray = await setMin(newArray, setArray, min);
        await sleep(300 / animationSpeed);

        for (let j = i + 1; j < n; j++) {
            await setChecking(newArray, setArray, j);
            await sleep(300 / animationSpeed);
            if (newArray[j].num < newArray[min].num) {
                newArray = await setNormal(newArray, setArray, min);
                newArray = await setMin(newArray, setArray, j);
                min = j;
            } 
        }
        
        newArray = await setNormal(newArray, setArray, min);
        
        if (min !== i) {
            newArray = await swap(newArray, setArray, min, i); 
        }

        newArray = await setSuccess(newArray, setArray, i);
        await sleep(400 / animationSpeed);
    }

    setSuccess(newArray, setArray, n-1);
    setSuccess(newArray, setArray, n-2);
    complete();
}

export default SelectionSort;