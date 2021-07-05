import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import AbdiwahidOutside from './AbdiwahidOutside';
import AbdiwahidHajir from './AbdiwahidHajir';
import AbdiwahidAwesome from './AbdiwahidBishar';





export class AboutAbdiwahid extends Component {
    render() {
        return (
            <body class="Abdiwahid">
                <h1>About Abdiwahid Page</h1>

                <div class="None">
                    <section>
                        <p class="About-Info">
                            Welcome to the about us page. In this page you will learn about Abdiwahid.
                            The author of this page. Abdiwahid is a current student enrolled in the <a href="https://www.washington.edu/">Univeristy of Washington.</a>
                            He is studying informatics HCI track with a strong focus and conceration in software devlopment and UX design, and engineering. He has finishied high school
                            and graduated with a diploma from Franklin high school. At the same time he has obtained his associates degree from Seattle Central College. Abdiwahid had many achivments
                            and accomplishments throughout his life. He has made the deans list for 7 quarters. And has obtained a award from the National Society of High School Scholars. Abdiwahid
                            has took part in dubs tech training RSO. Which he help develop websites and in the end got a certifcate which makes him. Elgible and suitable to work
                            as a software devloper. He currently works as a licesned subsitute for the Imagine Institute a non profit organization.
                            He looks forward to make great yeards to come and has many more awards and achivnmenets he wants to earn.
                        </p>
                        <AbdiwahidOutside />
                    </section>
                    <section>
                       <AbdiwahidHajir />
                    </section>
                    <aside>
                        <AbdiwahidAwesome />
                    </aside>
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

export default AboutAbdiwahid;