import { connect } from 'react-redux';
import {Table} from './Table';
import {Dessert} from '../../shared/types/Dessert';
import {getAllDesserts} from '../../store/selectors/apollo.selectors';

const mapState = (
    state: { apolloReducers: { desserts: Dessert[]; }; }
): {
    getAllDesserts: Dessert[]
} => {
    return {
        getAllDesserts: getAllDesserts(state)
    };
};

export default connect(mapState)(Table);