import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

class InputSignup extends React.Component {
    constructor(props) {
        super(props);
        this.postUser = this.postUser.bind(this);
    }
    postUser(event) {
        event.preventDefault();
        const username = this.userInput.value;
        const password = this.pwInput.value;
        this.props.dispatch(actions.signupUser(username, password))
        console.log('fired off postUser event', username, password)
        this.userInput.value = '';
        this.pwInput.value = '';
    }

  render() {
        return (
            <div className="container">
                <form className="input-form" onSubmit={this.postUser}>
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



// const mapStateToProps = (state, props) => ({goals: state.goals})

export default connect()(InputSignup)
