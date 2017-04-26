import React from 'react';
import InputSignup from './Input-Signup'


function Signup() {
    return (
        <div>
            <div className="signup-container">
                <header>
                    <h1 className="title">Sixty-Six Days</h1>
                    <h2 className="subtitle">Set goals, stick to them.</h2>
                </header>

                <InputSignup />

            </div>

                    <div className="panel-footer">
                     Already have an account? <a href="/login"> Login</a>
                    <p>Or go <a href="/">home</a>.</p>
                </div>
        </div>
    )
}

export default Signup;
