import React, { Component, useState, useEffect } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import AbdiwahidBack from './AbdiwahidBack';
import AbdiwahidAwesome from './AbdiwahidAwesome';



export class ContactAbdiwahid extends Component {
    render() {
        return (
         <   Logining />
        )
}
}
export class  Login extends Component {
render(){
        return (
          
          
        
        <body class="Body1">
            <title >Abdiwahid</title>
            

            <div class="Contact_me">
                <main>
                    <p class="contactUs">
                        Welcome to the contact page. In this page you can
                        contact dear respective brother Abdiwahid Bishar Hajir
                        the owner of this page with questions and concerns. You can ask
                        him anything and we will sure try to get back to you within 5 business days.
                        You have the option to either send your repsonse and comments and provide
                        and email so we can send you the response back to you. Please keep in mind these rules
                        when sending your queries and questions to us.
                        <ui>
                            <li>
                                1. Abdiwahid does not open threads or links to other pages
                            </li>
                        </ui>
                    </p>
                    <ui>
                        <li class="Self_Promo">
                            2. Self promotion is striclty not allowed
                        </li>
                    </ui>
                    <p>
                        <ui>
                            <li>
                                3. Help making life decisions is not allowed
                            </li>
                        </ui>
                    </p>
                    <p>
                        <ui>
                            <li>
                                4. inappropriate posts will not be entairned or responded to
                            </li>
                        </ui>
                    </p>
                    <p>
                        <li>
                            5. Avoid venting or backbiting one
                        </li>
                    </p>
                    <p>
                        <li>
                            6. If you do not receive a response within 5-10 business days feel free to send a follow up email or contact our email directly.
                        </li>
                    </p>
                    <form id="input-form">
                        <AbdiwahidBack />
                            
                    </form>
                    <AbdiwahidAwesome />
                    <footer>
                        <p>&copy; 2021 Abdiwahid Hajir</p>
                        <address>
                            Contact Abdiwahid at <a href="mailto:abdiwahidhajir91@gmail.com">abdiwahidhajir91@gmail.com</a>
                            <div>
                            <i class="bi bi-instagram">  <a class="style-instagram" href="https://www.instagram.com/abdiwahid_hajir" aria-label="instagram">Instagram Link</a> </i>
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
                </main>
            </div>
        </body>
        );
   }
    }

    export function Logining(props) {
        const [user, setUser] = useState('');
        const uiConfig = {
          signInOptions: [{ provider: firebase.auth.EmailAuthProvider.PROVIDER_ID, requireDisplayName: true },
          firebase.auth.GoogleAuthProvider.PROVIDER_ID], credentialHelper: 'none', signInFlow: 'popup',
          callbacks: {
            signInSuccessWithAuthResult: () => false,
          },
      
        };
      
        useEffect(() => {
          const registerUser = firebase.auth().onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {
              setUser(firebaseUser);
            } else {
              setUser(null);
            }
      
          })
          return function unRemove() {
            registerUser();
          }
        })
        const handleSignOut = () => {
          firebase.auth().signOut();
      
        }
        if (!user) {
          return (
            <div className="container">
              <h1>Sign Up TO Contact Abdiwahid</h1>
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
            </div>
          );
        }else{
          return ( 
              <div class=
              "btn-google">
            <h1 user={user}> </h1> 
            <button className="btn btn-dark" onClick={handleSignOut}>
              Log Out {user.displayName}
            </button>
            

          <Login />
          </div>);
        }
    }

export default ContactAbdiwahid;