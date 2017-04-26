import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import * as actions from '../actions/actions';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class InputSignup extends React.Component {
    constructor(props) {
        super(props);
        this.handleSignup = this.handleSignup.bind(this);
    }
    handleSignup(event) {
        event.preventDefault();
        const username = this.userInput.value;
        const password = this.pwInput.value;
        this.props.dispatch(actions.signupUser(username, password))
        console.log('fired off signupUser event', username, password)
        this.userInput.value = '';
        this.pwInput.value = '';
    }

  render() {
        return (
            this.props.isLoggedIn ?
            <Redirect to={{ pathname: '/app' }} /> :

                <div className="container">
                    <p className="demo-user">Demo user available on the 'Login' page.</p>
                    <form className="input-form" onSubmit={this.handleSignup}>
                        <div>
                            <label htmlFor="usernameInput"> Username</label>
                            <div>
                                <TextField type="text" className="input-input" id="usernameInput" inputStyle={{ textAlign: 'center' }} hintStyle={{ textAlign: 'center', width: '100%' }} ref={input => this.userInput = input} placeholder="username or email"/>
                            </div>
                            <label htmlFor="pwInput"> Password</label>
                            <div>
                                <TextField type="password" className="input-input" id="pwInput" inputStyle={{ textAlign: 'center' }} hintStyle={{ textAlign: 'center', width: '100%' }} ref={input => this.pwInput = input} placeholder="password"/>
                            </div>
                        </div>
                        <RaisedButton className="enter" type="submit">Signup</RaisedButton>
                    </form>
                </div>
        )
    }
}



const mapStateToProps = (state, props) => ({isLoggedIn: state.users.isLoggedIn})

export default connect(mapStateToProps)(InputSignup)
