import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/actions';

// Stateless component example
class List extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log('List props: ', this.props)
        // const goalsList =
             this.props.goals.goals.map((goal, i) => ( console.log('GOAL! ', goal)))

        // let goalsArray = this.props.goals.goals;
        // let strikeThru = this.props.goals.completed ? "strikeThru": "";
        // const goalsList =       this.props.goals.goals.map((goal, i) => (
        //     <div key={i}>
        //         {goal}
        //     </div>
        //     ));

      return (
            <div>THIS IS A LIST
                {/* {goalsList} */}
            </div>
            )
        }
}

const mapStateToProps = (state, props) => ({goals: state.goals})

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchGoals: (index) =>  {
//       return dispatch(fetchGoals(index))
//     }
//   }
// }

export default connect(mapStateToProps)(List);
//
