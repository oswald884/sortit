import { createContext, useState } from 'react';

export const ArrayContext = createContext();

const ArrayContextProvider = (props) => {

    const [arrayLength, setArrayLength] = useState(10);
    const [rangeMin, setRangeMin] = useState(1);
    const [rangeMax, setRangeMax] = useState(100);
    const [array, setArray] = useState([]);

    return(
        <ArrayContext.Provider
            value={{
                arrayLength, setArrayLength, rangeMin, setRangeMin,
                rangeMax, setRangeMax, array, setArray
            }}>
            { props.children }
        </ArrayContext.Provider>
    )
}

export default ArrayContextProvider;