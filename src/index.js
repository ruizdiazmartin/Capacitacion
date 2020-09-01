import React from 'react'
import ReactDom from 'react-dom'
import Exercises from './pages/Excercise'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'


const container = document.getElementById('root');

//ReactDom.render(QUE, DONDE);
ReactDom.render(<Exercises />, container);