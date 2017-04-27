import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import * as actions from '../actions/actions';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AlertContainer from 'react-alert';


class InputLogin extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.alertOptions = {
              offset: 23,
              position: 'top right',
              theme: 'light',
              time: 5000,
              transition: 'fade'
            };
    }

    handleLogin(event) {
        event.preventDefault();
        const username = this.userInput.getValue();
        const password = this.pwInput.getValue();
        if(!username || !password) {
            this.showAlert();
        } else { this.props.dispatch(actions.loginUser(username, password))
        console.log('fired off loginUser event')
        }
        // console.log('TARGET: ', event.target.username.value)
        // console.log('OTHER: ', this.userInput.input.value)
        event.target.username.value = '';
        event.target.password.value = '';
    }
    componentDidUpdate() {
        this.props.fail ? this.showFailAlert() : null
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


  render() {

    return (

        this.props.isLoggedIn ?
        <Redirect to={{ pathname: '/app' }} /> :

            <div className="container">
                <AlertContainer ref={(a) => global.msg = a} {...this.alertOptions} />

                <p className="demo-user">For demonstration purposes: <br /> username: demo password: demo</p>

                <form className="input-form" onSubmit={this.handleLogin}>
                    <div className="inputs">

                            <TextField type="text" name="username" hintText="username or email" style={{ margin: '0 5px' }} inputStyle={{ textAlign: 'center' }} hintStyle={{ textAlign: 'center', width: '100%', color: 'rgba(0,0,0,.8)' }} ref={input => this.userInput = input}/>

                            <TextField type="password" name="password" hintText="choose a secure password" style={{ margin: '0 5px' }} inputStyle={{ textAlign: 'center' }} hintStyle={{ textAlign: 'center', width: '100%', color: 'rgba(0,0,0,.8)' }} ref={input => this.pwInput = input}/>

                    </div>
                    <RaisedButton className="enter" primary={true} type="submit">Login</RaisedButton>
                </form>

        </div>
        )

    }
}

// InputLogin.propTypes = {
//   history: PropTypes.object.isRequired
// }

const mapStateToProps = (state, props) => ({isLoggedIn: state.users.isLoggedIn, fail: state.users.fail })

export default connect(mapStateToProps)(InputLogin)
