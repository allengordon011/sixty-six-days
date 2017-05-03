import React from 'react';
import InputLogin from './Input-Login'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="home">
            <div className="login-signup-container">
                <header>
                    <h1 className="title">Sixty-Six Days</h1>
                    <h2 className="subtitle">Set goals, stick to them.</h2>
                </header>

                <InputLogin />

            </div>
            <div className="panel-footer">
                Need an account? <Link to="/signup"> Signup</Link>
                <br />
                Or go <Link to="/"> Home</Link>
                <p>Forgot your password? Please email <a href="mailto:support@trig010.com?subject=Forgot Password">support@trig010.com</a></p>
            </div>
        </div>
    )
}

export default Login;
