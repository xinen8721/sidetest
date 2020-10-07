import dataSources from './datasources';
const resolvers = {
  Query: {
    getAProperty: (root, { mlsId }, { dataSources }) => dataSources.propertyAPI.getAProperty(mlsId),
    getAllProperties: (root, { city }, { dataSources }) => dataSources.propertyAPI.getAllProperties(city),
  },
  Property: {
    mlsId: ({ mlsId }) => mlsId,
  }
};

export default resolvers;