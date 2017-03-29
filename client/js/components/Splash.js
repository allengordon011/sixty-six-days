import React from 'react';
import { Link } from 'react-router-dom';

function Splash() {
    return (
        <div>
            <div className="splash-container">
                <div className="wrapper">
                    <section className="main">
                        <header>
                            <h1 className="title">66 Days</h1>
                            <h2 className="subtitle">Set goals, stick to them.</h2>
                        </header>
                        <hr></hr>
                        <button className="enter"><Link to="/main">Click to Enter</Link></button>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Splash;
