import {ApolloActions} from '../actions/apollo.actions';
import {ApolloState} from '../states/apollo.state';
import {Dessert} from '../../shared/types/Dessert';

const initialState: ApolloState = {
    desserts: [],
};

export default function(state = initialState, action: { [key: string]: string | [] | Dessert }) {
    switch (action.type) {
        case ApolloActions.SET_DESERTS: {
            return {
                desserts: action.payload,
            }
        }
        case ApolloActions.PUSH_DESERT: {
            return {
                ...state,
                desserts: state.desserts.concat([action.payload as Dessert]),
            };
        }
        default: {
            return state;
        }

    }
}