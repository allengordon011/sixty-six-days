import React from 'react';
import { Link } from 'react-router-dom';
import Description from './Description';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

function Splash() {
    return (
        <div>
            <div className="splash-container">
                    <section className="main">
                        <header>
                            <h1 className="title">Sixty-Six Days</h1>
                            <h2 className="subtitle">Set goals, stick to them.</h2>
                        </header>
                        <div className="splash-buttons">
                            <RaisedButton className="login" primary={true} style={style}><Link to="/login">Login</Link></RaisedButton>

                            <RaisedButton className="signup" primary={true} style={style}><Link to="/signup">Signup</Link></RaisedButton>
                        </div>
                        <p className="demo-instr">- Demo user available on Login page -</p>

                        <hr />
                        <p className="tagline">On average, it takes more than two months before a new behavior becomes automatic — 66 days to be exact.</p>
                        <p className="source">Source: "European Journal of Social Psychology"</p>
                    </section>
                </div>
                <div className="description-container">
                <Description />
                </div>
            </div>
    )
}

export default Splash;
