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
        this.alertOptions = {
              offset: 23,
              position: 'top right',
              theme: 'light',
              time: 5000,
              transition: 'fade'
            };
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
    componentDidUpdate() {
        this.props.fail ? this.showFailAlert() : null;
        this.props.error ? this.showErrorAlert() : null;
    }
    showAlert() {
        msg.show('Please complete both input fields', {
          type: 'info'
        });
    }
    showFailAlert() {
        msg.show('Please enter a valid username and password', {
          type: 'error'
        });
        this.props.dispatch(actions.resetFail());
    }
    showErrorAlert() {
        msg.show(`Signup error! {this.props.error}`, {
          type: 'error'
        });
    }
  render() {

    return (
        this.props.isLoggedIn ?
        <Redirect to={{ pathname: '/app' }} /> :


            <div className="container">
                <AlertContainer ref={(a) => global.msg = a} {...this.alertOptions} />

                <p className="demo-user">Demo user available on the 'Login' page.</p>
                <form className="input-form" onSubmit={this.handleSignup}>
                    <div className="inputs">

                            <TextField type="text" name="username" hintText="username or email" style={{ margin: '0 5px' }} inputStyle={{ textAlign: 'center' }} hintStyle={{ textAlign: 'center', width: '100%', color: 'rgba(0,0,0,.5)' }} ref={input => this.userInput = input} />

                            <TextField type="password" name="password" hintText="choose a secure password" style={{ margin: '0 5px' }} inputStyle={{ textAlign: 'center' }} hintStyle={{ textAlign: 'center', width: '100%', color: 'rgba(0,0,0,.5)' }} ref={input => this.pwInput = input} />

                    </div>
                    <RaisedButton className="enter" primary={true} type="submit">Signup</RaisedButton>
                </form>
            </div>
        )
    }
}



const mapStateToProps = (state, props) => ({isLoggedIn: state.user.isLoggedIn, fail: state.user.fail, error: state.user.error })

export default connect(mapStateToProps)(InputSignup)
