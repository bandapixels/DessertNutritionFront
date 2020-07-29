import React, {FunctionComponent} from 'react';
import {Dessert} from '../../shared/types/Dessert';
import './row.css';

interface RowProps {
    options: Dessert;
}

const Row: FunctionComponent<RowProps> = ({options: {name, cal, carbG, fatG, proteinG, id}}) => {
    return (
        <tr className="tc row">
            <td className="bb b--black-30"><input type="checkbox" name={name} id={id.toString()}/></td>
            <td className="bb b--black-30">{name}</td>
            <td className="bb b--black-30">{cal}</td>
            <td className="bb b--black-30">{fatG}</td>
            <td className="bb b--black-30">{carbG}</td>
            <td className="bb b--black-30">{proteinG}</td>
        </tr>
    )
}

export default Row;
