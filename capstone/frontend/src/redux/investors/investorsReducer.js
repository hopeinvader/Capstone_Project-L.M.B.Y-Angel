import { ADD_SUMMURY, ADD_USER, ADD_USER_FINISHED, FORM_SUBMIT1, FORM_SUBMIT2,  FORM_SUBMIT3,  FORM_SUBMIT4,  FORM_SUBMIT5,  FORM_SUBMIT6,  FORM_SUBMIT7,  FORM_CHANGE1, FORM_CHANGE2, FORM_CHANGE3, FORM_CHANGE4, FORM_CHANGE5, FORM_CHANGE6, FORM_CHANGE7 } from './actions';

const initialState = {
    summuryArray:[],
    user: [],
    addUserB: false,
    formSubmit1: false,
    formSubmit2: false,
    formSubmit3: false,
    formSubmit4: false,
    formSubmit5: false,
    formSubmit6: false,
    formSubmit7: false,
}

export function investorsReducer(state = initialState, action){
    switch(action.type){
        case ADD_SUMMURY:
            return{
                ...state,
                summuryArray: state.summuryArray.concat([action.summury])
            }
        case ADD_USER:
            return{
                ...state,
                addUserB: true
            }
        case ADD_USER_FINISHED:
            return{
                ...state,
                addUserB: false
            }
        case FORM_SUBMIT1:
            return{
                ...state,
                formSubmit1: true
            }
        case FORM_SUBMIT2:
            return{
                ...state,
                formSubmit2: true
            }
        case FORM_SUBMIT3:
            return{
                ...state,
                formSubmit3: true
            }
        case FORM_SUBMIT4:
            return{
                ...state,
                formSubmit4: true
            }
        case FORM_SUBMIT5:
            return{
                ...state,
                formSubmit5: true
            }
        case FORM_SUBMIT6:
            return{
                ...state,
                formSubmit6: true
            }
        case FORM_SUBMIT7:
            return{
                ...state,
                formSubmit7: true
            }
        case FORM_CHANGE1:
            return{
                ...state,
                formSubmit1: false
            }
        case FORM_CHANGE2:
            return{
                ...state,
                formSubmit2: false
            }
        case FORM_CHANGE3:
            return{
                ...state,
                formSubmit3: false
            }
        case FORM_CHANGE4:
            return{
                ...state,
                formSubmit4: false
            }
        case FORM_CHANGE5:
            return{
                ...state,
                formSubmit5: false
            }
        case FORM_CHANGE6:
            return{
                ...state,
                formSubmit6: false
            }
        case FORM_CHANGE7:
            return{
                ...state,
                formSubmit7: false
            }
            default:
            return state;
    }
}