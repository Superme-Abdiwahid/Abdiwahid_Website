import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Abdiwahid } from './Abdiwahid';
import firebase from 'firebase/app';
import {App} from './App';
import 'firebase/auth';
import firebaseConfig from './Config';
import * as serviceWorker from './serviceWorker';
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();