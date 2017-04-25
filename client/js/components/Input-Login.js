import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router'


class InputLogin extends React.Component {
    constructor(props) {
        super(props);
        // }
        // this.state = {
        //     redirectTo: null
        // }
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(event) {
        event.preventDefault();
        // this.setState({ redirectTo: '/app' });

        const username = this.userInput.value;
        const password = this.pwInput.value;
        this.props.dispatch(actions.loginUser(username, password))
        console.log('fired off loginUser event', username, password)
        this.userInput.value = '';
        this.pwInput.value = '';
    }

  render() {
        return (
            // this.state.redirectTo ?
            // <Redirect to={{ pathname: this.state.redirectTo }} /> :

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
                    <button type="submit">Submit</button>
                </form>
            </div>
            )

    }
}

// InputLogin.propTypes = {
//   history: PropTypes.object.isRequired
// }

// const mapStateToProps = (state, props) => ({location: state.location})

export default connect()(InputLogin)
