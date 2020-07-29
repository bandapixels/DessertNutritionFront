import { combineReducers } from 'redux';
import apolloReducers from './../reducers/apollo.reducer';
import popupReducer from './../reducers/popup.reducer';

export default combineReducers({ apolloReducers, popupReducer })
