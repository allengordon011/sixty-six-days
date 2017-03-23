import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/actions';


// let strikeThru = goal.completed ? "strikeThru": "";

// Stateless component example
const List = (props) => (


    // <div>THIS IS A LIST
    //     {
    //         console.log('Goals props??!', props.goals.goals.map((goal, idx) => {
    //     console.log(goal)))}}
    // </div>
    // let goalsArray = props.goals.goals;

      <div>
          {props.goals.goals.map((goal, idx) => {
              console.log(goal)
      <div className="goal-box" id={idx} key={idx}>
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
    })}
    </div>


);

const mapStateToProps = (state, props) => ({
    goals: state.goals
  })

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleteTodo: (index) =>  {
//       return dispatch(deleteTodo(index))
//     }
//   }
// }

export default connect(mapStateToProps)(List);
//, mapDispatchToProps
