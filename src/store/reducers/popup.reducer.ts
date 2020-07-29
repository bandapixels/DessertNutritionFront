import {PopupState} from '../states/popup.state';
import {PopupActions} from '../actions/popup.actions';

const initialState: PopupState = {
    mode: false,
};

export default function(state = initialState, action: { [key: string]: string | [] }) {
    switch (action.type) {
        case PopupActions.SET_POPUP_MODE: {
            return {
                ...state,
                mode: action.mode,
            };
        }
        default:
            return state;
    }
}