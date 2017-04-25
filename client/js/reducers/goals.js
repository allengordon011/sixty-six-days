import * as actions from '../actions/actions';

const initialState = {
    goals: [],
    loading: true
};

const goalsReducer = (state = initialState, action) => {

    switch (action.type) {
        case actions.FETCH_GOALS_SUCCESS:
            {
                console.log('Fetch goals success')
                return {
                    ...state,
                    goals: action.goals,
                    loading: false
                }
            }
        case actions.FETCH_ERROR:
            {
                return {
                    ...state,
                    goals: action.error
                }
        }

        default:
            return state;
    }
}

export default goalsReducer;
