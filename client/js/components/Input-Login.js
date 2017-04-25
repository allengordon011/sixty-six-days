import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import * as actions from '../actions/actions';

class InputLogin extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin(event) {
        event.preventDefault();
        const username = this.userInput.value;
        const password = this.pwInput.value;
        this.props.dispatch(actions.loginUser(username, password))
        console.log('fired off loginUser event')
        this.userInput.value = '';
        this.pwInput.value = '';

    }

  render() {
    //   console.log(this.props.isLoggedIn)
        return (
            this.props.isLoggedIn ?
            <Redirect to={{ pathname: '/app' }} /> :

                <div className="container">
                <form className="input-form" onSubmit={this.handleLogin}>
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
                    <button type="submit" formTarget="_self" href="/app">Login</button>
                </form>
            </div>
            )

    }
}

// InputLogin.propTypes = {
//   history: PropTypes.object.isRequired
// }

const mapStateToProps = (state, props) => ({isLoggedIn: state.users.isLoggedIn})

export default connect(mapStateToProps)(InputLogin)
