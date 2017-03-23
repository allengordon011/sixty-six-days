import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import Calendar from './Calendar';

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
    //   console.log('Goals props??!', this.props.goals.goals)
      const goals = this.props.goals.goals.map((goal, idx) => {
        let strikeThru = goal.completed ? "strikeThru": "";
        return <div className="goal-box" id={idx} key={idx}>
              <div key={idx} className={`goal-text ${strikeThru}`}
                onBlur={(event) => this.props.dispatch(actions.updateGoal(event.target.innerText, goal._id))}
                 contentEditable='true'>{goal.goal}
               </div>
               <button className="btn-xs btn-success" onClick={() => {
                   this.props.dispatch(actions.updateCompletedGoal(goal._id))}}>
                Done!</button>
               <button className="btn-xs btn-warning" onClick={() => {this.props.dispatch(actions.deleteGoal(goal._id))}}>
                Delete</button>

                <div className="calendar">
                    <Calendar goal={goal.goal}/>
                </div>
            </div>
      })

        return (
                <div className="goals-container">{goals}
                </div>
        )
    }
}

const mapStateToProps = (state, props) => ({goals: state.goals})

export default connect(mapStateToProps)(Goals)
