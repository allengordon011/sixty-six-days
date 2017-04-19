import React from 'react';
import InputLogin from './Input-Login'

function Login() {
    return (
        <div>
            <div className="login-container">
                <header>
                    <h1 className="title">Sixty-Six Days</h1>
                    <h2 className="subtitle">Set goals, stick to them.</h2>
                </header>

                <InputLogin />

            </div>

            <div className="panel-footer">
             Need an account? <a href="/signup"> Signup</a>
            <p>Or go <a href="/">home</a>.</p>
            </div>
        </div>
    )
}

export default Login;
