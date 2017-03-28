import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/actions';
import Calendar from './Calendar';


class GoalsList extends React.Component {
    constructor(props) {
        super(props);
        // this.props.onSuccessClick = this.props.onSuccessClick.bind();
    }

    // let onSuccessClick = (event) => {
    //
    //     event.preventDefault();
    //     console.log('clicked goal: ', goal)
    //     $('div').closest('.feedback').show()
    //     // this.props.dispatch(actions.updateCompletedGoal(goal._id))
    // }

    render() {
        let goalsArray = this.props.goals.goals;
        // $('button').on('click', '.btn-success', function(event) {
        //     console.log('clicked: ', $(this))
        //     // event.stopPropagation();
        //     $('div').closest('.feedback').show()
        // }); //??
        let randomize25 = Math.floor(Math.random()*25);
        let stickersArray = this.props.stickers.stickers;
        let sticker = stickersArray.length <= 1 ? "" : stickersArray[randomize25].sticker

        const goalsList = goalsArray.length === 0
            ? "Loading..."
            : goalsArray.map((goal, i) => {
                let strikeThru = goal.completed ? "strikeThru" : "";
                let randomize25 = Math.floor(Math.random()*25);
                let stickersArray = this.props.stickers.stickers;
                let sticker = stickersArray.length <= 1 ? "" : stickersArray[randomize25].sticker

                return (
                    <div className="goal-container" key={i}>
                        <div className="goal-box" id={i}>
                            <div className={`goal-text ${strikeThru}`} onBlur={(event) => this.props.dispatch(actions.updateGoal(event.target.innerText, goal._id))} contentEditable='true'>{goal.goal}
                            </div>

                            <button className="done" onClick={
                                () => {    
                                this.props.dispatch(actions.updateCompletedGoal(goal._id))
                            }
                        }>
                                Done!</button>
                            <button className="delete" onClick={() => {
                                this.props.dispatch(actions.deleteGoal(goal._id))
                            }}>
                                Delete</button>
                                {/* <img src={sticker} /> */}
                        </div>
                            <div className="calendar">
                                <Calendar goal={goal.goal}/>
                            </div>
                            <div className="feedback">GIF HERE
                                <img src={sticker} />
                            </div>
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
