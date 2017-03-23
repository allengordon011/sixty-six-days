import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.sendUserGoal = this.sendUserGoal.bind(this);
        // this.saveUserGoal = this.saveUserGoal.bind(this);
    }
    sendUserGoal(event) {
        event.preventDefault();
        const userGoal = this.textInput.value;
        console.log('fired off sendUserGoal event', userGoal)
        this.props.dispatch(actions.addGoal(userGoal))
        this.textInput.value = '';
    }

    // saveUserGoal(event){
    //   const newUserGoal = event.target.innerText;
    //   console.log(newUserGoal);
    // console.log(event.target.id[0]);
    // this.props.dispatch(actions.updateGoal(newUserGoal))
  // }
  render() {
        return (
            <div className="container">
                <form className="form-horizontal" onSubmit={this.sendUserGoal}>
                    <div className="form-group has-success has-feedback">
                        <label className="col-sm-2 control-label" htmlFor="inputSuccess">New Goal</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="inputSuccess" ref={input => this.textInput = input} placeholder="type your goal and press enter"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Input
