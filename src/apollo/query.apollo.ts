import {gql} from '@apollo/client';

export const GET_ALL_DESSERTS = gql`
    { 
        desserts { 
            id
            name
            cal
            proteinG
            carbG
            fatG
        }
    }
`
