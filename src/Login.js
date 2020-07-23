import React, {useState} from 'react';
import './Login.css';
import {Link , useHistory} from "react-router-dom";
import Picture from './logo.png';
import {auth} from './firebase';


function Login() {

    const history =useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event =>{
        event.preventDefault();
        auth.signInWithEmailAndPassword(email , password)
        .then((auth) => {
            history.push('/');
        })
        .catch(e => alert(e.message))
    }
    const register = event =>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email , password)
        .then(auth =>{
            history.push('/');
        })
        .catch(e => alert(e.message))
    }


    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src={Picture} alt=""/>

            </Link>
            <div className="login__container">
                <h1><font color="white">Sign in</font></h1>
                <form>
                    <h5><font color="white">Email</font></h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <h5><font color="white">Password</font></h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button onClick={login} onChange={event => setPassword(event.target.value)} type="submit" className="login__signInButton">Sign In </button>
                    <p><font color="white">Sign in or create an account to become a part of the Tech9 family.</font></p>
                    <button onClick={register} className="login__registerButton">Create an account</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
