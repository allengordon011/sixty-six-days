import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import * as actions from '../actions/actions';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

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
                    <p className="demo-user">For demonstration purposes: <br /> username: demo password: demo</p>
                    <form className="input-form" onSubmit={this.handleLogin}>
                        <div>
                            <label htmlFor="usernameInput"> Username</label>
                            <div>
                                <TextField type="text" className="input-input" id="usernameInput" hintText="username or email" inputStyle={{ textAlign: 'center' }} hintStyle={{ textAlign: 'center', width: '100%' }} ref={input => this.userInput = input}/>
                            </div>
                            <label htmlFor="pwInput"> Password</label>
                            <div>
                                <TextField type="password" className="input-input" id="pwInput" hintText="choose a secure password" inputStyle={{ textAlign: 'center' }} hintStyle={{ textAlign: 'center', width: '100%' }} ref={input => this.pwInput = input}/>
                            </div>
                        </div>
                        <RaisedButton className="enter" type="submit" formTarget="_self" href="/app">Login</RaisedButton>
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
