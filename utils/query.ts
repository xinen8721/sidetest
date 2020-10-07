import gql from 'graphql-tag';

export const getAllCarsQuery = gql`
    query {
        getPropertiesByCity (city: "Houston") {
            mlsId
        }
    }
`;
