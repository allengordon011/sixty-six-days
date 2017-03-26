import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.postGoal = this.postGoal.bind(this);
        // this.saveUserGoal = this.saveUserGoal.bind(this);
    }
    postGoal(event) {
        event.preventDefault();
        console.log('this props ', this.props)
        const goal = this.textInput.value;
        console.log('fired off postGoal event', goal)
        this.props.dispatch(actions.postGoal(goal))
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
                <form className="form-horizontal" onSubmit={this.postGoal}>
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

const mapStateToProps = (state, props) => ({goals: state.goals})

export default connect(mapStateToProps)(Input)
