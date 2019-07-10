import axios from 'axios';

export const ADD_SUMMURY = 'ADD_SUMMURY';

export function AddSummuryAction(summury){
    return {
        summury: summury,
        type: ADD_SUMMURY
    }
}

export const ADD_USER = 'ADD_USER';

export function addUser(){
    return {
        type: ADD_USER
    }
}

export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';


export function addUserFailure(){
    return {
        type: ADD_USER_FAILURE
    }
}

export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';


export function addUserSuccess(){
    return {
        type: ADD_USER_SUCCESS
    }
}

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

export function AddSummuryActionThunk(summury){
    return(dispatch) => {
        axios.post(`${process.env.REACT_APP_API_SERVER}/api/test`, summury).then(res => {
            dispatch(formSubmit3())
        })
    }
}

export function AddProductActionThunk(product){
    return(dispatch) => {
        axios.post(`${process.env.REACT_APP_API_SERVER}/api/test/product`, product).then(res => {
            dispatch(formSubmit4())
        })
    }
}
export function AddMotivationActionThunk(motivation){
    return(dispatch) => {
        axios.post(`${process.env.REACT_APP_API_SERVER}/api/test/motivation`, motivation).then(res => {
            dispatch(formSubmit6())
        })
    }
}
export function AddAdvantageActionThunk(advantage){
    return(dispatch) => {
        axios.post(`${process.env.REACT_APP_API_SERVER}/api/test/advantage`, advantage).then(res => {
            dispatch(formSubmit5())
        })
    }
}
export function AddToInvestorsActionThunk(toInvesotrs){
    return(dispatch) => {
        axios.post(`${process.env.REACT_APP_API_SERVER}/api/test/toInvestors`, toInvesotrs).then(res => {
            dispatch(formSubmit7())
        })
    }
}
export function AddAboutActionThunk(about){
    return(dispatch) => {
        axios.post(`${process.env.REACT_APP_API_SERVER}/api/test/about`, about).then(res => {
            dispatch(formSubmit2())
        })
    }
}

export function formSubmitThunk(username, category, userInfo, title, logo, bgImg){
    return dispatch => {
        return axios.post(`${process.env.REACT_APP_API_SERVER}/api/test/ucbl`,
            {
                username: username,
                category: category,
                userInfo: userInfo,
                title: title,
                logo: logo,
                bgImg: bgImg
            }).then(response => {
                    dispatch(formSubmit1())
                }
            );
        }
}

export function addUserThunk(user){
    return(dispatch) => {
        axios.post(`${process.env.REACT_APP_API_SERVER}/api/test/user`, user).then(res => {
            if(res.data == null){
                dispatch(addUser())
            } else if (res.data){
                dispatch(addUser())
            }
        })
    }
}

export function addUserInThunk(user){
    return(dispatch) => {
        axios.post(`${process.env.REACT_APP_API_SERVER}/api/investors/userIn`, user).then(res => {
            if(res.data == null){
                dispatch(addUser())
            } else if (res.data){
                dispatch(addUser())
            }
        })
    }
}

export const FORM_SUBMIT1 = 'FORM_SUBMIT1';

function formSubmit1(){
    return {
        type: FORM_SUBMIT1
    }
}
export const FORM_SUBMIT2 = 'FORM_SUBMIT2';

function formSubmit2(){
    return {
        type: FORM_SUBMIT2
    }
}
export const FORM_SUBMIT3 = 'FORM_SUBMIT3';

function formSubmit3(){
    return {
        type: FORM_SUBMIT3
    }
}
export const FORM_SUBMIT4 = 'FORM_SUBMIT4';

function formSubmit4(){
    return {
        type: FORM_SUBMIT4
    }
}
export const FORM_SUBMIT5 = 'FORM_SUBMIT5';

function formSubmit5(){
    return {
        type: FORM_SUBMIT5
    }
}
export const FORM_SUBMIT6 = 'FORM_SUBMIT6';

function formSubmit6(){
    return {
        type: FORM_SUBMIT6
    }
}
export const FORM_SUBMIT7 = 'FORM_SUBMIT7';

function formSubmit7(){
    return {
        type: FORM_SUBMIT7
    }
}

export const FORM_CHANGE1 = 'FORM_CHANGE1';

function formChange1(){
    return {
        type: FORM_CHANGE1
    }
}

export function formChange1Thunk(){
    return dispatch => {
            dispatch(formChange1())
        }
}

export const FORM_CHANGE2 = 'FORM_CHANGE2';

function formChange2(){
    return {
        type: FORM_CHANGE2
    }
}

export function formChange2Thunk(){
    return dispatch => {
            dispatch(formChange2())
        }
}
export const FORM_CHANGE3 = 'FORM_CHANGE3';

function formChange3(){
    return {
        type: FORM_CHANGE3
    }
}

export function formChange3Thunk(){
    return dispatch => {
            dispatch(formChange3())
        }
}
export const FORM_CHANGE4 = 'FORM_CHANGE4';

function formChange4(){
    return {
        type: FORM_CHANGE4
    }
}

export function formChange4Thunk(){
    return dispatch => {
            dispatch(formChange4())
        }
}
export const FORM_CHANGE5 = 'FORM_CHANGE5';

function formChange5(){
    return {
        type: FORM_CHANGE5
    }
}

export function formChange5Thunk(){
    return dispatch => {
            dispatch(formChange5())
        }
}
export const FORM_CHANGE6 = 'FORM_CHANGE6';

function formChange6(){
    return {
        type: FORM_CHANGE6
    }
}

export function formChange6Thunk(){
    return dispatch => {
            dispatch(formChange6())
        }
}
export const FORM_CHANGE7 = 'FORM_CHANGE7';

function formChange7(){
    return {
        type: FORM_CHANGE7
    }
}

export function formChange7Thunk(){
    return dispatch => {
            dispatch(formChange7())
        }
}
