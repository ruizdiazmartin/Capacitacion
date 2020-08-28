import React from 'react';
import exerciseImg from '../components/images/exercise.png';
import './styles/Card.css';

class Card extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src={exerciseImg} />
                </div>
                <div>
                    <h1>Technique Guide</h1>
                    <p>Learn amazing street workout and calisthenics</p>
                </div>
            </div>
        )
    }
}

export default Card;