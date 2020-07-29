import React, {FunctionComponent} from 'react';
import './tableHelper.css';
import Button from '../../shared/Button/Button';
import Table from '../Table';
import {connect, useDispatch} from 'react-redux';
import {SetPopupModeAct} from '../../store/actions/popup.actions';

const TableHelper: FunctionComponent = () => {
    const dispatch = useDispatch();

    const addNew = () => {
        dispatch(SetPopupModeAct(true));
    };

    const remove = () => {

    };

    return (
        <>
            <div className="table-helper flex justify-between items-center bg-washed-red">
                <div className="dark-pink fw6">0 selected</div>
                <div className="button-section">
                    <Button type="new" onClick={() => addNew()}>&#43; ADD NEW</Button>
                    <Button type="remove" onClick={() => remove()} disabled>&#x1f5d1; DELETE</Button>
                </div>
            </div>
            <Table />
        </>
    );
}

export default connect()(TableHelper);
