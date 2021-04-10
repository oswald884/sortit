import { createContext, useState } from 'react';
import SelectionSort from '../algorithms/SelectionSort';
import BubbleSort from '../algorithms/BubbleSort';
import InsertionSort from '../algorithms/InsertionSort';

export const ManagerContext = createContext();

const ManagerContextProvider = (props) => {

    const [sortingAlgorithm, setSortingAlgorithm] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [sorted, setSorted] = useState(false);
    const [animationSpeed, setAnimationSpeed] = useState(1);

    const complete = () => {
        setProcessing(false);
        setSorted(true);
    }

    const sort = (array, setArray) => {
        if(!array.length){  
            // No elements
            return;
        }
        else if(processing){
            // Already processing
            return;
        }
        else if(sorted) {
            // Already sorted
            return;
        }

        setProcessing(true);
        switch(sortingAlgorithm){
            case "Insertion Sort":
                InsertionSort(array, setArray, complete, animationSpeed);
                break;
            case "Selection Sort":
                SelectionSort(array, setArray, complete, animationSpeed);
                break;
            case "Bubble Sort":
                BubbleSort(array, setArray, complete, animationSpeed);
                break;
            default:
                console.log("No sorting algorithm selected");
                setProcessing(false);
        }
    }

    return (
        <ManagerContext.Provider
            value={{
                processing, setProcessing, sort, sortingAlgorithm,
                setSortingAlgorithm, sorted, setSorted, animationSpeed,
                setAnimationSpeed
            }}>
            { props.children}
        </ManagerContext.Provider>
    )
}

export default ManagerContextProvider;