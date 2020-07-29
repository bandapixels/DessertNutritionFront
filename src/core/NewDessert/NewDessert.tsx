import React, {FunctionComponent, useState} from 'react';
import './newDessert.css';
import Button from '../../shared/Button/Button';
import {useDispatch} from 'react-redux';
import {SetPopupModeAct} from '../../store/actions/popup.actions';
import {useMutation} from '@apollo/client';
import {ADD_NEW_DESSERT} from '../../apollo/mutation.apollo';
import {PushDessertAct} from '../../store/actions/apollo.actions';

interface NewDessertProps {
    getPopupMode: boolean;
}

export const NewDessert: FunctionComponent<NewDessertProps> = ({getPopupMode}) => {
    const dispatch = useDispatch();
    const [addNewDessert] = useMutation(ADD_NEW_DESSERT);
    const [state, setState] = useState({
        name: '',
        cal: '',
        proteinG: '',
        carbG: '',
        fatG: '',
    });

    const updateState = (type: string, value: string | number) => {
        const newState = {...state};
        setState({...newState, [type]: value});
    };

    const submit = (e?: React.MouseEvent<HTMLButtonElement>) => {
        if (e) {
            e.preventDefault();
        }
        const values = Object.values(state);
        for (let i = 0; i < values.length; i++) {
            if (values[i].toString().length === 0) {
                return;
            }
        }
        addNewDessert({variables: {...state}}).then(e => dispatch(PushDessertAct(e.data.addDessert)));
        dispatch(SetPopupModeAct(false));
        setState({
            name: '',
            cal: '',
            proteinG: '',
            carbG: '',
            fatG: '',
        })
    };

    return (
        <>{getPopupMode && <div className="fullWindow">
            <div className="mode">
                <div className="warning bg-gold white tc">
                    Please fill all details before you submit
                </div>
                <button className="cross" onClick={() => dispatch(SetPopupModeAct(false))}>×</button>
                <form>
                    <p>Dessert Name*</p>
                    <input type="text" name="name" className="w-100" required value={state.name}
                           onChange={e => updateState('name', e.target.value)}/>
                    <p>Calories*</p>
                    <input type="text" name="cal" className="w-100" required value={state.cal}
                           onChange={e => updateState('cal', e.target.value)}/>
                    <p>Fat*</p>
                    <input type="text" name="fatG" className="w-100" required value={state.fatG}
                           onChange={e => updateState('fatG', e.target.value)}/>
                    <p>Carbs*</p>
                    <input type="text" name="carbG" className="w-100" required value={state.carbG}
                           onChange={e => updateState('carbG', e.target.value)}/>
                    <p>Protein*</p>
                    <input type="text" name="proteinG" className="w-100" required value={state.proteinG}
                           onChange={e => updateState('proteinG', e.target.value)}/>
                    <div className="submit-section">
                        <Button type="submit" onClick={(e) => submit(e)}>
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>}</>
    );
};
