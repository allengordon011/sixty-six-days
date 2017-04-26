import React from 'react';
import { Link } from 'react-router-dom';
import Description from './Description';
import RaisedButton from 'material-ui/RaisedButton';

function Splash() {
    return (
        <div>
            <div className="splash-container">
                    <section className="main">
                        <header>
                            <h1 className="title">Sixty-Six Days</h1>
                            <h2 className="subtitle">Set goals, stick to them.</h2>
                        </header>
                        <p className="demo-instr">- Demo user available on Login page -</p>

                        <RaisedButton className="login"><Link to="/login">LOGIN</Link></RaisedButton>

                        <RaisedButton className="signup"><Link to="/signup">SIGNUP</Link></RaisedButton>

                        <hr />
                        <p className="tagline">On average, it takes more than two months before a new behavior becomes automatic — 66 days to be exact.</p>
                        <p className="source">Source: "European Journal of Social Psychology"</p>
                    </section>
                </div>
                <div className="gradient-container">
                <Description />
                </div>
            </div>
    )
}

export default Splash;
