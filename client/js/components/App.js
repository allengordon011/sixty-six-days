import React from 'react';
import Goals from './Goals';
import Input from './Input';
import Stickers from './Stickers';
import NavBar from './NavBar';

function App() {
    return (
        <div className="container">
            <div className="wrapper">

                <div className="main">
                    <NavBar />

                    <header>
                        <h1 className="title">66 Days</h1>
                        <h2 className="subtitle">Set goals, stick to them.</h2>
                    </header>
                    <hr></hr>
                    <Input />
                    <hr></hr>
                    <h3>Your Goals</h3>
                    <Goals />
                </div>
                <div className="stickers-sidebar">
                    <h3>Stickers Earned</h3>
                    <Stickers />
                </div>
            </div>
            <footer>
                <div className="tagline">"On average, it takes more than two months before a new behavior becomes automatic — 66 days to be exact."*</div>
                <div className="source">*Source: "European Journal of Social Psychology"</div>
            </footer>
        </div>
    )
}

export default App
