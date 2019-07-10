import { LIST_PITCH, LIST_PROFILE } from './actions';

const initialState = {
    pitchList:[],
    profileList:[]
};


export function PitchReducer (state = initialState, action){
    switch(action.type){
        case LIST_PITCH:
        return {
            pitchList: action.pitches
        };
        case LIST_PROFILE:
        return {
            profileList: action.profiles
        };
        default:
        return state;
    }
}