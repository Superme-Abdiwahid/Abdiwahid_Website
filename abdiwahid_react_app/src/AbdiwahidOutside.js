import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

import AbdiwahidGrad from './Img/abdiwahid_gradution.jpg';


export default class AbdiwahidOutside extends React.Component{
    render(){
        return(
            <img class="Abdiwahid_Awesome"  src={AbdiwahidGrad} />
        )
    }
}