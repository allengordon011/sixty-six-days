import * as actions from '../actions/actions';

const initialState = {
    goals: [],
    isLoggedIn: false,
    fail: false,
    error: '',
    loading: true
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case actions.LOGIN_SUCCESS:
            {
                console.log('Login success')
                return {
                    ...state,
                    isLoggedIn: true,
                    loading: true
                }
            }
        case actions.LOGOUT_SUCCESS:
            {
                console.log('Logout success')
                return {
                    ...state,
                    isLoggedIn: false,
                    fail: false,
                    loading: true
                }
            }
        case actions.LOGIN_FAIL:
            {
                console.log('Login fail')
                return {
                    ...state,
                    fail: true,
                    isLoggedIn: false
                }
            }
        case actions.RESET_FAIL:
            {
                console.log('Reset fail')
                return {
                    ...state,
                    fail: false
                }
            }
        case actions.LOGIN_ERROR:
            {
                console.log('Login error: ', action.error)
                return {
                    ...state,
                    error: action.error
                }
            }
        case actions.FETCH_GOALS_SUCCESS:
            {
                console.log('Fetch goals success')
                return {
                    ...state,
                    goals: action.goals,
                    loading: false
                }
            }
        case actions.FETCH_GOALS_ERROR:
            {
                return {
                    ...state,
                    error: action.error
                }
            }

        default:
            return state;
    }
}

export default userReducer;
