import React, { Component, useState, useEffect } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import AbdiwahidGraduation from './AbdiwahidGraduation';
import Quotes from './Quotes';
import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import 'firebase/database';




export class Abdiwahid extends Component {
    render() {
        return <AbdiwahidWebsite> </AbdiwahidWebsite>
    }
}



export function AbdiwahidWebsite(props) {
  
        return (
            <body>


                <div class="change">
                    <header>
                    </header>
                    <AbdiwahidGraduation />

                
                </div>
                <main class="back">
                    <output>

                    </output>


                    <p class="style-pargraph">
                        I am Abdiwahid Bishar Hajir. I grew up and was born in Kenya
                        I come to Seattle around 2004-2005 ish. I grew up in Seattle
                        for most of my life. I have been always trying my best
                        to be detirmed and never give up. In this website you can find
                        about me. Explore this website you can contact me with any questions.
                        And also you can submit your request. I am a current student at the Univeristy
                        of Washington in Seattle Washington. I am currently seeking and completing my
                        bachelors of science degree in Informatics Human Computer Interaction. Life is
                        about tests and obstacles and only the pateint and the ones who always fight till the
                        end are always the succesful ones.
                    </p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xWWvj9-zi-Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </main>
                <p>
                    <Quotes />
                </p>
                <footer>
                    <p>&copy; 2021 Abdiwahid Hajir</p>
                    <address>
                        Contact Abdiwahid at <a href="mailto:abdiwahidhajir91@gmail.com">abdiwahidhajir91@gmail.com</a>
                        <a class="style-instagram" href="https://www.instagram.com/abdiwahid_hajir" aria-label="instagram"><i class="fa fa-instagram"></i></a>
                        <div>
                            <a class="calendar" href="https://calendly.com/abdiwahidhajir" aria-label="instagram">Schedule a meeting With Abdiwahid<i class="fa fa-calendar" aria-hidden="true"></i></a>
                        </div>
                        <div>
                            <a target="_blank" class="dollar-sign" href="https://cash.app/$Abdiwahidhajir" aria-label="instagram">Donate Cash App To Abdiwahid<i class="fas fa-dollar-sign"></i></a>
                        </div>
                    </address>
                </footer>
            </body>
        )
}


export default Abdiwahid