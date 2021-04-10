import './Styles.css';

const Column = ({ width, height, color }) => {

    const dynamicStyles = {
        width: width,
        height: height,
        backgroundColor: color,
    }

    return(
        <div className="line-container"
            style={dynamicStyles}>
            
        </div>
    )
}

export default Column;