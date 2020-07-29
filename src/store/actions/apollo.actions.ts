import {Dessert} from '../../shared/types/Dessert';

export enum ApolloActions {
    SET_DESERTS = '[ApolloClients] set deserts',
    PUSH_DESERT = '[ApolloClients] push desert'
}

export const SetDessertAct = (data: Dessert[]) => {
    return {
        type: ApolloActions.SET_DESERTS,
        payload: data,
    }
}

export const PushDessertAct = (data: Dessert) => {
    return {
        type: ApolloActions.PUSH_DESERT,
        payload: data,
    }
}
