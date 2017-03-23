import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import Calendar from './Calendar';

import List from './List'

class Goals extends React.Component {
    constructor(props) {
        super(props);
        this.addGoal = this.addGoal.bind(this);
        // this.saveUserGoal = this.saveUserGoal.bind(this);
    }

    componentDidMount() {
        console.log('did mount')

    }

    addGoal(event) {
        event.preventDefault();
        const newGoal = this.textInput.value;
        console.log('fired off addGoal event', newGoal)
        this.props.dispatch(actions.postGoal(newGoal))
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
                <div className="goals-container">
                    <List />
                </div>
        )
    }
}

// const mapStateToProps = (state, props) => ({goals: state.goals})

export default Goals;
// export default connect(mapStateToProps)(Goals)
