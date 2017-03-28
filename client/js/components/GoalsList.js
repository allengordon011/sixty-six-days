import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/actions';
import Calendar from './Calendar';


class GoalsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let goalsArray = this.props.goals.goals;
        $('button.btn-success').on('click', function() {
        $('div.feedback').closest().show().html("<div> HI </div>")
    }); //??

        const goalsList = goalsArray.length === 0
            ? "Loading..."
            : goalsArray.map((goal, i) => {
                let strikeThru = goal.completed ? "strikeThru" : "";

                return (
                    <div>
                <div className="goal-box" id={i} key={i}>
                    <div className={`goal-text ${strikeThru}`} onBlur={(event) => this.props.dispatch(actions.updateGoal(event.target.innerText, goal._id))} contentEditable='true'>{goal.goal}
                    </div>
                    <button className="btn-xs btn-success" onClick={() => {
                        this.props.dispatch(actions.updateCompletedGoal(goal._id))
                        const randomize25 = Math.floor(Math.random()*25);
                        console.log(this.props.stickers.stickers[randomize25].sticker)

                            // <img src=`{this.props.stickers.stickers[randomize25].sticker}` />)
                    }}>
                        Done!</button>
                    <button className="btn-xs btn-warning" onClick={() => {
                        this.props.dispatch(actions.deleteGoal(goal._id))
                    }}>
                        Delete</button>

                </div>
                    <div className="calendar">
                        <Calendar goal={goal.goal}/>
                    </div>
                    <div className="feedback"></div>
                </div>
            )
        })

        return (
            <div>
                {goalsList}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({goals: state.goals, stickers: state.stickers})

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchGoals: (index) =>  {
//       return dispatch(fetchGoals(index))
//     }
//   }
// }

export default connect(mapStateToProps)(GoalsList);
//
