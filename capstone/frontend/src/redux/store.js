import { applyMiddleware, combineReducers, compose, createStore} from 'redux';

import { entrepneursReducer } from './entrepneurs/entrepneursReducer';
import { investorsReducer } from './investors/investorsReducer';
import { AuthReducer } from './auth/authReducer';
import { PitchReducer } from './pitch/pitchReducer';


import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    entrepneurs: entrepneursReducer,
    auth: AuthReducer,
    pitch: PitchReducer,
    investors: investorsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createReduxStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
}