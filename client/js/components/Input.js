import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import TextField from 'material-ui/TextField';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.postGoal = this.postGoal.bind(this);
    }
    postGoal(event) {
        event.preventDefault();
        const goal = this.textInput.value;
        this.props.dispatch(actions.postGoal(goal))
        console.log('fired off postGoal event', goal)
        this.textInput.value = '';
    }

  render() {
        return (
            <div className="container">
                <form className="input-form" onSubmit={this.postGoal}>
                    <div>
                        <label htmlFor="inputSuccess">New Goal</label>
                        <div>
                            <TextField type="text" className="input-input" id="inputSuccess" inputStyle={{ textAlign: 'center' }} hintStyle={{ textAlign: 'center', width: '100%' }} ref={input => this.textInput = input} placeholder="type your new awesome goal and press enter"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({goals: state.goals})

export default connect(mapStateToProps)(Input)
