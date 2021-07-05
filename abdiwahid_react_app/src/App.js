import React, { Component, useState, useEffect } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Abdiwahid } from './Abdiwahid';
import { AboutAbdiwahid } from './AboutAbdiwahid';
import { ContactAbdiwahid } from './ContactAbdiwahid';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import firebase from 'firebase/app';
import { Thanks } from './Thanks';
import ReactDOM from 'react-dom';


export class App extends React.Component {
  render() {

      return (
        <Router>
          <div>

            <nav>
                 <Link to="/Abdiwahid">Home </Link>
                 
                            <Link to="/AboutAbdiwahid" >About</Link>
                           
                            <Link to="/ContactAbdiwahid">ContactAbdiwahid</Link>
                            <Link to="/Thanks">Thanks</Link>
              {/* <ul>
                <div id="hamburger-menu"><i class="jumbotron fa fa-bars" aria-label="menu"></i></div>
                <li id="home"><a href="index.html">Home</a></li>
                <li id="about"><a href="about.html">About</a></li>
                <li id="contact"><a href="contact.html">Contact Abdiwahid</a></li>
                <li id="faq"><a href="thanks.html">Thanks</a></li>
              </ul> */}
            </nav>
             <Route exact path="/"> <Abdiwahid /></Route> 
                    <Route path="/AboutAbdiwahid"> <AboutAbdiwahid />  </Route> 
              
                    <Route path="/ContactAbdiwahid"> <ContactAbdiwahid /> </Route>
                    <Route path="/Thanks"> <Thanks /> </Route>
                    <Route path="/Abdiwahid" > <Abdiwahid /> </Route>
          </div>
        </Router>


      )
    }
  }

