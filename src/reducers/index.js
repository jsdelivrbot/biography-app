import { combineReducers } from 'redux';
import CelebritiesReducers from './reducer_celebrities';
import ActiveCelebrity from './reducer_active_celebrity';

const rootReducer = combineReducers({
  celebrities : CelebritiesReducers,
  activeCelebrity : ActiveCelebrity
});

export default rootReducer;
