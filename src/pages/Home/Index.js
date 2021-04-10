import './Styles.css';
import Canvas from '../../components/Canvas/Index';
import Options from '../../components/Options/Index';

const HomePage = () => {

    return(
        <div className="container-fluid home-container">
            <Options />
            <Canvas />
            
            <div className="p-bottom"></div>
        </div>
    )
}

export default HomePage;

