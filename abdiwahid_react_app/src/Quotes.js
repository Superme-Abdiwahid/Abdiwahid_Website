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
import Image_Quotes from "./Img/quotes.jpg";




export default class Quotes extends Component {
    render(){
        return (
            <img class="quotes" src={Image_Quotes} />
        )
    }
}