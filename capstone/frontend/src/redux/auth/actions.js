import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

function loginSuccess() {
    return {
        type: LOGIN_SUCCESS
    };
}

export const LOGIN_FAILUREP = 'LOGIN_FAILUREP';

function loginFailureP() {
    return {
        type: LOGIN_FAILUREP,
    }
}
export const LOGIN_FAILUREE = 'LOGIN_FAILUREE';

function loginFailureE() {
    return {
        type: LOGIN_FAILUREE,
    }
}

export const LOGOUT = 'LOGOUT';

 function logOutAction() {
    return {
        type: LOGOUT
    }
}

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

function signupSuccess(){
    return {
        type: SIGNUP_SUCCESS
    }
}

export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

function signupFailure(){
    return {
        type: SIGNUP_FAILURE
    }
}

export const MESSAGE_FINISHED = 'MESSAGE_FINISHED';

function messageFinished(){
    return {
        type: MESSAGE_FINISHED
    }
}

export function messageFinishedThunk(){
    return dispatch => {
            dispatch(messageFinished())
        }
}

export const LOGIN_FAILURE_FALSE = 'LOGIN_FAILURE_FALSE';

function loginFailureMessage(){
    return {
        type: LOGIN_FAILURE_FALSE
    }
}

export function loginFailureMessageThunk(){
    return dispatch => {
            dispatch(loginFailureMessage())
        }
}

export function loginUser(email, password) {
    return (dispatch) => {
        return axios.post(`${process.env.REACT_APP_API_SERVER}/api/users`,
            {
                email: email,
                password: password
            }).then(response => {
                if(response.data == 'Password is Wrong!'){
                    dispatch(loginFailureP());
                } else if(response.data == 'Email is Wrong!'){
                    dispatch(loginFailureE());
                } else {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('boolean', JSON.stringify(response.data.boolean));

                    dispatch(loginSuccess());
                }
            });
    };
}

export function logOut(){
    return (dispatch)=> {
        localStorage.removeItem('token');
        dispatch(logOutAction());
    };
}

export function signupUser(email, password, customBoolean) {
    console.log(email, password, customBoolean)
    return (dispatch) => {
        return axios.post(`${process.env.REACT_APP_API_SERVER}/api/users/signup`,
            {
                email: email,
                password: password,
                customBoolean: customBoolean
            }).then(response => {
                console.log(response)
                if(response.data == null){
                    dispatch(signupFailure())
                } else if (response.data){
                    dispatch(signupSuccess())
                }
            });
    };
}
