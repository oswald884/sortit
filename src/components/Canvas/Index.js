import './Styles.css';
import { useContext } from 'react';
import { ArrayContext } from '../../contexts/ArrayContext';
import Column from '../Column/Index';

const Canvas = () => {

    const { array } = useContext(ArrayContext);
    
    return (
        <div className="canvas-container">
            {
                array.map((item) => {
                    var width = 90 / array.length;
                    var height = item.num;

                    return (
                        <Column
                            key={item.id}
                            width={width + '%'}
                            height={height + '%'}
                            color={item.color} />
                    )
                })
            }
        </div>
    )
}

export default Canvas;