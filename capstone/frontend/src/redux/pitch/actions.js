import axios from 'axios';

export const ADD_SUMMURY = 'ADD_SUMMURY';

export const ADD_USER_FINISHED = 'ADD_USER_FINISHED';

function addUserFinished(){
    return {
        type: ADD_USER_FINISHED
    }
}

export function addUserFinishedThunk(){
    return dispatch => {
            dispatch(addUserFinished())
        }
}


export const LIST_PITCH = 'LIST_PITCH';

export function loadPitchAction(pitches){
    return {
        pitches: pitches,
        type: LIST_PITCH
    }
}

export function loadPitchAPI(){
    return(dispatch) => {
        axios.get(`${process.env.REACT_APP_API_SERVER}/api/pitch/entrepneurs`)
        .then(res => {
            dispatch(loadPitchAction(res.data))
        })
    }
}

export const LIST_PROFILE = 'LIST_PROFILE';

export function loadProfileAction(profiles){
    return {
        profiles: profiles,
        type: LIST_PROFILE
    }
}

export function loadProfileAPI(){
    return(dispatch) => {
        axios.get(`${process.env.REACT_APP_API_SERVER}/api/investors`)
        .then(res => {
            dispatch(loadProfileAction(res.data))
        })
    }
}

