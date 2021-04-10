import './Styles.css';
import { useContext } from 'react';
import { ArrayContext } from '../../contexts/ArrayContext';
import { createRandomArray } from '../../components/ArrayHandler/Index';
import { ManagerContext } from '../../contexts/ManagerContext';

const Options = () => {

    const {
        arrayLength, setArrayLength, rangeMin,
        rangeMax, setRangeMax, array, setArray
    } = useContext(ArrayContext);

    const {
        sort, processing, setSorted, animationSpeed,
        setAnimationSpeed, sortingAlgorithm, setSortingAlgorithm
    } = useContext(ManagerContext);

    const createArray = () => {
        if (!processing) {
            setArray(createRandomArray(arrayLength, rangeMin, rangeMax))
            setSorted(false);
        }
    }

    return (
        <div className="container options-container">
            <div className="row my-row">
                <div className="col-12 col-lg-6 my-inp-container">
                    <label className="form-label">Array Length</label>
                    <div className="row">
                        <input
                            type="range"
                            className="form-range my-range"
                            min={10}
                            max={500}
                            step={10}
                            value={arrayLength}
                            onChange={(e) => setArrayLength(e.target.value)} />
                        <label className="val-label"> {arrayLength} </label>
                    </div>
                </div>

                <div className="col-12 col-lg-6 my-inp-container">
                    <label className="form-label">Max Number</label>
                    <div className="row">
                        <input
                            type="range"
                            className="form-range my-range"
                            min={5}
                            max={100}
                            step={5}
                            value={rangeMax}
                            onChange={(e) => setRangeMax(e.target.value)} />
                        <label className="val-label"> {rangeMax} </label>
                    </div>
                </div>

                <div className="col-12 col-lg-6 my-inp-container">
                    <label className="form-label">Animation Speed</label>
                    <div className="row">
                        <input
                            type="range"
                            className="form-range my-range"
                            min={1}
                            max={150}
                            step={1}
                            value={animationSpeed}
                            onChange={(e) => setAnimationSpeed(e.target.value)} />
                        <label className="val-label"> {animationSpeed} </label>
                    </div>
                </div>

                <div className="col-12 col-lg-6 my-inp-container">
                    <label className="form-label">Sorting Algorithm</label>
                    <div className="dropdown my-dropdown">
                        <button id="algorithmButton" className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            { sortingAlgorithm === null ? ("Choose") : (sortingAlgorithm) }
                        </button>

                        <div className="dropdown-menu dropdown-menu-dark" aria-labelledby="algorithmButton">
                            <button className="dropdown-item" onClick={() => setSortingAlgorithm('Bubble Sort')}>Bubble Sort</button>
                            <button className="dropdown-item" onClick={() => setSortingAlgorithm('Selection Sort')}>Selection Sort</button>
                            <button className="dropdown-item" onClick={() => setSortingAlgorithm('Insertion Sort')}>Insertion Sort</button>
                        </div>
                    </div>
                </div>

            </div>

            <button className="test-button"
                onClick={createArray}> Create Random Array </button>

            <button className="test-button"
                onClick={() => sort(array, setArray, animationSpeed)}> Sort </button>
        </div>
    )
}

export default Options;