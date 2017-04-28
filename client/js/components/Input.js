import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import TextField from 'material-ui/TextField';
import AlertContainer from 'react-alert';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.postGoal = this.postGoal.bind(this);
        this.alertOptions = {
              offset: 23,
              position: 'top right',
              theme: 'light',
              time: 5000,
              transition: 'fade'
            };
    }
    postGoal(event) {
        event.preventDefault();
        const goal = event.target.input.value;
        if(!goal){
            this.showAlert();
        } else { this.props.dispatch(actions.postGoal(goal))
        console.log('fired off postGoal event', goal) }
        event.target.input.value = '';
    }

    showAlert() {
        msg.show('Please enter a goal', {
          type: 'error'
        });
    }

  render() {
        return (
            <div className="goal-input-container">
                <AlertContainer ref={(a) => global.msg = a} {...this.alertOptions} />

                <form className="input-form" onSubmit={this.postGoal}>
                    <h3>New Goal</h3>
                    <div>
                        <TextField type="text" name="input" style = {{width: 350}} hintText="type your new awesome goal and press enter" ref={input => this.textInput = input} />
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({id: state.user.goals})

export default connect(mapStateToProps)(Input)
