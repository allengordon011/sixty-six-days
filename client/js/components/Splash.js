import React from 'react';
import { Link } from 'react-router-dom';

function Splash() {
    return (
        <div>
            <div className="splash-container">
                This is the SPLASH page!!!
                <button><Link to="/main">click to enter</Link></button>
            </div>
        </div>
    )
}

export default Splash;
