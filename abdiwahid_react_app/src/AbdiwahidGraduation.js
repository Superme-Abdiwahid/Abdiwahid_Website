import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import { Abdiwahid } from './Abdiwahid';
import { About } from './AboutAbdiwahid';
import { ContactAbdiwahid } from './ContactAbdiwahid';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import firebase from 'firebase/app';
import { Thanks } from './Thanks';
import ReactDOM from 'react-dom';
import { ImgHTMLAttributes } from 'react';
import Abdiwahid_Outside from './Img/abdiwahid_outside.jpeg'
import Abdiwahid_Happy from './Img/Abdiwahid_happy.jpeg';


export class AbdiwahidGraduation extends Component{
    render(){
        return(
            <div>
            <img class="abdiwahid" src={Abdiwahid_Outside} />

            <img class="outside" src={Abdiwahid_Happy} />
            </div>
        )
        }
}


export default AbdiwahidGraduation