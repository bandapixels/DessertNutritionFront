import {gql} from '@apollo/client';

export const ADD_NEW_DESSERT = gql`
mutation AddDessert($name: String!, $cal: String!, $proteinG: String!, $carbG: String!, $fatG: String!)
    {
      addDessert(dessert: {
        name: $name
        cal: $cal
        proteinG: $proteinG
        carbG: $carbG
        fatG: $fatG
      }) { id, name, cal, proteinG, carbG, fatG }
    }
`

export const RESET_DESSERT = gql`
mutation {reset {id}}
`
