import React, { useContext } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import Logo from '../../Images/logos/Logo.png';
import google from '../../Images/logos/google.png';
firebase.initializeApp(firebaseConfig);

const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const [loggegInUser, setLoggedInUser] = useContext(UserContext);
    
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn= () =>{
        firebase.auth().signInWithPopup(provider)
        .then((result) => {        
            var user = result.user;
            setLoggedInUser(user);
            history.replace(from);
          })
          .catch(function(error) {
            console.log(error)
          });
    }
    return (
        <div className="login-page">
            <img src={Logo} className="logo" alt="Logo"/>
            <div className="login-block">
                <h4>Login With</h4>
                <div className="login-button" onClick={googleSignIn}>
                    <img src={google} alt=""/>
                    <p>Continue with Google</p>
                </div>
                <p>Don't have account? <span>Create an Account</span></p>
            </div>
        </div>
    );
};

export default Login;