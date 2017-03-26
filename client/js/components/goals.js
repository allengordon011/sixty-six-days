import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import Calendar from './Calendar';

import List from './List';

class Goals extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(actions.fetchGoals());
    }

    render() {

        return (
            <div className="goals-container">
                <List/>
            </div>
            )
        }
}

const mapStateToProps = (state, props) => ({goals: state.goals})

export default connect(mapStateToProps)(Goals)
