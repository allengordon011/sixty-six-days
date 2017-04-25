import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import * as actions from '../actions/actions';

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
                    <form className="input-form" onSubmit={this.handleSignup}>
                        <div>
                            <label htmlFor="usernameInput"> Username</label>
                            <div>
                                <input type="text" className="input-input" id="usernameInput" ref={input => this.userInput = input} placeholder="username or email"/>
                            </div>
                            <label htmlFor="pwInput"> Password</label>
                            <div>
                                <input type="text" className="input-input" id="pwInput" ref={input => this.pwInput = input} placeholder="password"/>
                            </div>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
        )
    }
}



const mapStateToProps = (state, props) => ({isLoggedIn: state.users.isLoggedIn})

export default connect(mapStateToProps)(InputSignup)
