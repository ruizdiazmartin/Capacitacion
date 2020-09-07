import React from 'react';
import exerciseImg from '../components/images/exercise.png';
import './styles/Card.css';
import circlesImg from '../components/images/circles.png'
import AddImage from '../components/images/add.png'


class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: exerciseImg
        }
    }

    //Esta funcion se ejecuta inmediatemanete despues que un componente se implemente.

    /* componentDidMount() {
         setTimeout(() => {
             this.setState({
                 image: AddImage
             })
         }, 5000);
     }*/

    render() {
        const { title, description, leftColor, rigthColor, img } = this.props
        return (
            <div className="card mx-auto Fitness-Card"
                style={{
                    //Estilos en linea es personalizar los estilos a un archivo especifico
                    backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rigthColor})`
                }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={this.state.image} className="flow-rigth" />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;