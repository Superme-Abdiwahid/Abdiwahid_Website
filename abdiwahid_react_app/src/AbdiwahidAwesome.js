import AbdiwahidCongrats from './Img/congralutions.jpg';
import React, { Component, useState, useEffect } from 'react';
import './style.css';




export default class AbdiwahidAwesome extends Component{
    render(){
        return(
            <img class="Abdiwahid_Congrats" src={AbdiwahidCongrats} />
        )
    }
}