import PropertyAPI from './PropertyAPI';

const datasources = () : any =>  {
  return {
    propertyAPI: new PropertyAPI(),
  }
}

export default datasources;