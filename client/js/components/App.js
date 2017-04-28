import React from 'react';
import GoalsList from './GoalsList';
import Input from './Input';
import StickersList from './StickersList';
import Quote from './Quote';
import LogoutButton from './Button-Logout';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';

class App extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        // console.log('APP REQ USER', req.session)

        return (
            !this.props.isLoggedIn ?
            <Redirect to={{ pathname: '/' }} /> :

            <div className="app">
                    <section className="main">
                        <Quote />
                        <hr />
                        <Input />
                    </section>

                    <div className="wrapper">
                            <GoalsList />
                        <div className="stickers-sidebar">
                            <h3 className="stickers-earned">Stickers Earned</h3>
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

const mapStateToProps = (state, props) => ({isLoggedIn: state.user.isLoggedIn})

export default connect(mapStateToProps)(App)
