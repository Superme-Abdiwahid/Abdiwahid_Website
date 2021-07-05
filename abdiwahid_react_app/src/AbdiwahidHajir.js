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
import AbdiwahidBishar from './Img/Abdiwahid2.jpg';


export default class AbdiwahidHajir extends Component {
    render(){
        return (
            <img class="Abdiwahid_Awesome" src={AbdiwahidBishar} />
        )
    }
}