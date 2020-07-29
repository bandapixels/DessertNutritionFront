import React, {FunctionComponent} from 'react';
import './table.css';
import {Dessert} from '../../shared/types/Dessert';
import Row from '../Row/Row';

interface TableProps {
    getAllDesserts: Dessert[];
}

export const Table: FunctionComponent<TableProps> = ({getAllDesserts}) => {
    return (
        <table>
            <tbody>
            <tr className="bg-white">
                <th className="bb b--black-30"><input type="checkbox" name="empty" id="empty"/></th>
                <th className="bb b--black-30">Dessert(100g serving)</th>
                <th className="bb b--black-30">Calories</th>
                <th className="bb b--black-30">Fat (g)</th>
                <th className="bb b--black-30">Carbs(g)</th>
                <th className="bb b--black-30">Protein(g)</th>
            </tr>
            {getAllDesserts.map(dessert => <Row options={dessert} key={dessert.id}/>)}
            </tbody>
        </table>
    );
}

