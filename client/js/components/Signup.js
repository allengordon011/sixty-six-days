import React from 'react';
import InputSignup from './Input-Signup'
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div>
            <div className="login-signup-container">
                <header>
                    <h1 className="title">Sixty-Six Days</h1>
                    <h2 className="subtitle">Set goals, stick to them.</h2>
                </header>

                <InputSignup />

            </div>
            <div className="panel-footer">
                 Already have an account? <Link to="/login"> Login</Link>
                 <br />
                Or go <Link to="/"> Home</Link>
            </div>
        </div>
    )
}

export default Signup;
