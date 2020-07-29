import {Dessert} from '../../shared/types/Dessert';

export const getAllDesserts = (state: { apolloReducers: { desserts: Dessert[] } }): Dessert[] => state.apolloReducers.desserts;
