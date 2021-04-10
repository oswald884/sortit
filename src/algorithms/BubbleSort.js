import { sleep, swap, setSuccess, setComparing } from './Animations';

async function BubbleSort(array, setArray, complete, animationSpeed) {
    let newArray = [...array];
    let len = array.length;

    for (var i = 0; i < len; i++) {

        for (var j = 0; j < (len - i - 1); j++) {
            await setComparing(newArray, setArray, j, j + 1);
            await sleep(500 / animationSpeed);
            if (newArray[j].num > newArray[j + 1].num) {
                newArray = await swap(newArray, setArray, j, j+1);
                await sleep(500 / animationSpeed);
            }
        }

        newArray = await setSuccess(newArray, setArray, (len - i - 1));
    }

    setArray(newArray);
    complete();
}

export default BubbleSort;