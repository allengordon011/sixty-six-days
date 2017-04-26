import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import * as actions from '../actions/actions';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AlertContainer from 'react-alert';

class InputSignup extends React.Component {
    constructor(props) {
        super(props);
        this.handleSignup = this.handleSignup.bind(this);
    }
    handleSignup(event) {
        event.preventDefault();
        const username = this.userInput.getValue();
        const password = this.pwInput.getValue();
        if(!username){
            this.showAlert();
        } else { this.props.dispatch(actions.signupUser(username, password));
        console.log('fired off signupUser event') }
        event.target.username.value = '';
        event.target.password.value = '';
    }

  render() {
        return (
            this.props.isLoggedIn ?
            <Redirect to={{ pathname: '/app' }} /> :

                <div className="container">
                    <p className="demo-user">Demo user available on the 'Login' page.</p>
                    <form className="input-form" onSubmit={this.handleSignup}>
                        <div className="inputs">

                                <TextField type="text" hintText="username or email" style={{ margin: '0 5px' }} inputStyle={{ textAlign: 'center' }} hintStyle={{ textAlign: 'center', width: '100%' }} ref={input => this.userInput = input} />

                                <TextField type="password" hintText="choose a secure password" style={{ margin: '0 5px' }} inputStyle={{ textAlign: 'center' }} hintStyle={{ textAlign: 'center', width: '100%' }} ref={input => this.pwInput = input} />

                        </div>
                        <RaisedButton className="enter" primary={true} type="submit">Signup</RaisedButton>
                    </form>
                </div>
        )
    }
}



const mapStateToProps = (state, props) => ({isLoggedIn: state.users.isLoggedIn})

export default connect(mapStateToProps)(InputSignup)
