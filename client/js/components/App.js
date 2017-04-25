import React from 'react';
import GoalsList from './GoalsList';
import Input from './Input';
import StickersList from './StickersList';
import Quote from './Quote';
import LogoutButton from './Button-Logout';
import StickersButtons from './Buttons-Stickers';
import { Redirect } from 'react-router'
import {connect} from 'react-redux';

class App extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            !this.props.isLoggedIn ?
            <Redirect to={{ pathname: '/' }} /> :

            <div className="app">
                    <section className="main">
                        <Quote />
                        <hr />
                        <Input />
                        <hr />
                    </section>

                    <div className="wrapper">
                            <GoalsList />
                        <div className="stickers-sidebar">
                            <h3 className="stickers-earned">Stickers Earned</h3>
                            <StickersButtons />
                            <StickersList />
                        </div>
                    </div>
                <hr />
                <footer>
                    <LogoutButton />
                    <p className="main-title">Sixty-Six Days</p>
                    <p className="main-subtitle">Set goals, stick to them.</p>

                </footer>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({isLoggedIn: state.users.isLoggedIn})

export default connect(mapStateToProps)(App)
