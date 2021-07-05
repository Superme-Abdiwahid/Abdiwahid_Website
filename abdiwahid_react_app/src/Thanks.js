import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import { Abdiwahid } from './Abdiwahid';
import { About } from './AboutAbdiwahid';
import { ContactUsPage } from './ContactAbdiwahid';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import firebase from 'firebase/app';
import AbdiwahidBest from './AbdiwahidBest';



export class Thanks extends Component {
    render() {
        return (
            <body>
                <h1>Thank you for your time</h1>
                <div>
                    <p class="Large ">
                        Live Life to its fullest Before you taste its bitrness.
                        Dont respond to haters as they are the only ones who agree
                        that you are Better than them.
                    </p>
                </div>
                <div>
                    <main>
                        <div class="Colors">
                            <section>
                               <AbdiwahidBest />
                            </section>
                        </div>
                    </main>
                </div>

                <footer>
                    <p>&copy; 2021 Abdiwahid Hajir</p>
                    <address>
                        Contact Abdiwahid at <a href="mailto:abdiwahidhajir91@gmail.com">abdiwahidhajir91@gmail.com</a>
                        <div>
                            <a class="style-instagram" href="https://www.instagram.com/abdiwahid_hajir" aria-label="instagram">Instagram Link<i class="fa fa-instagram"></i></a>
                        </div>
                        <div>
                            Call Abdiwahid at <a href="tel:206-581-3419">206-581-3419</a>
                        </div>
                    </address>
                    <a class="calendar" href="https://calendly.com/abdiwahidhajir" aria-label="instagram">Schedule a meeting With Abdiwahid<i class="fa fa-calendar" aria-hidden="true"></i></a>
                    <div>
                        <a target="_blank" class="dollar-sign" href="https://cash.app/$Abdiwahidhajir" aria-label="instagram">Donate Cash App To Abdiwahid<i class="fas fa-dollar-sign"></i></a>
                    </div>
                </footer>

            </body>
        )
    }
}

export default Thanks