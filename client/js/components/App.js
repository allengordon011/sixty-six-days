import React from 'react';
import GoalsList from './GoalsList';
import Input from './Input';
import StickersList from './StickersList';
import Quotes from './Quotes';

function App() {
    return (
        <div className="app">
                <section className="main-header">
                    <Quotes />
                    <hr />
                    <Input />
                    <hr />
                </section>

                <div className="wrapper">
                        <GoalsList />
                    <div className="stickers-sidebar">
                        <StickersList />
                    </div>
                </div>
            <hr />
            <footer>
                <p className="main-title">Sixty-Six Days</p>
                <p className="main-subtitle">Set goals, stick to them.</p>

            </footer>
        </div>
    )
}

export default App
