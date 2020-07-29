import React, {FunctionComponent, useEffect} from 'react';
import './App.css';
import Button from '../../shared/Button/Button';
import TableHelper from '../TableHelper/TableHelper';
import {connect, useDispatch} from 'react-redux';
import {useMutation, useQuery} from '@apollo/client';
import {GET_ALL_DESSERTS} from '../../apollo/query.apollo';
import {SetDessertAct} from '../../store/actions/apollo.actions';
import NewDessert from '../NewDessert';
import {RESET_DESSERT} from '../../apollo/mutation.apollo';
import client from '../../apollo';

const App: FunctionComponent = () => {
    const { data } = useQuery(GET_ALL_DESSERTS);
    const [resetDB] = useMutation(RESET_DESSERT);
    const dispatch = useDispatch();

    const buttonClick = (type: string) => {
        resetDB().then(() => dispatch(SetDessertAct([])));
    }

    useEffect(() => {
        if (data && data.desserts) {
            dispatch(SetDessertAct(data.desserts));
            client.resetStore();
        }
    }, [data, dispatch]);

    return (
        <div className="section bg-light-gray">
            <header className="flex justify-between items-center">
                <h1 className="fw4 headline">Nutrition List</h1>
                <Button type="submit" onClick={() => buttonClick('reset')}>&#x293e; RESET DATA</Button>
            </header>
            <TableHelper/>
            <NewDessert />
        </div>
    );
}

export default connect(null)(App);
