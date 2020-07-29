import { connect } from 'react-redux';
import {NewDessert} from './NewDessert';
import {getPopupMode} from '../../store/selectors/popup.selectors';

const mapState = (
    state: { popupReducer: { mode: boolean; }; }
): {
    getPopupMode: boolean
} => {
    return {
        getPopupMode: getPopupMode(state)
    };
};

export default connect(mapState)(NewDessert);