import { LOGIN_SUCCESS, LOGIN_FAILUREP, LOGOUT, SIGNUP_SUCCESS, SIGNUP_FAILURE, MESSAGE_FINISHED, LOGIN_FAILURE_FALSE, LOGIN_FAILUREE} from './actions';

const initialState = {
    isAuthenticated: localStorage.getItem('token') || false,
    enOrIn: JSON.parse(localStorage.getItem('boolean')) || null,
    messageSuccess: '',
    messageFailure: '',
    messageSuccessB: false,
    messageFailureB: false,
    loginFailureP: false,
    loginFailureE: false
};


export function AuthReducer (state = initialState, action){
    switch(action.type){
        case LOGIN_SUCCESS:
        return {
            ...state,
            isAuthenticated: true,
            enOrIn: JSON.parse(localStorage.getItem('boolean'))
        };
        case LOGIN_FAILUREP:
            return{
                ...state,
                loginFailureP: true
            };
        case LOGIN_FAILUREE:
            return{
                ...state,
                loginFailureE: true
            };
        case LOGIN_FAILURE_FALSE:
            return {
                ...state,
                loginFailureP: false,
                loginFailureE: false
        };
        case LOGOUT:
        return {
            ...state,
            isAuthenticated: false,
            enOrIn: localStorage.removeItem('boolean')
        };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                messageSuccess: state.messageSuccess = 'messageSuccess',
                messageSuccessB: true
            };
        case SIGNUP_FAILURE:
            return {
                ...state,
                messageFailure: state.messageFailure = 'messageFailure',
                messageFailureB: true
            }
        case MESSAGE_FINISHED:
            return {
                ...state,
                messageFailureB: false,
                messageSuccessB: false
            }
        default:
        return state;
    }
}