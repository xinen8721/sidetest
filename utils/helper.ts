import {graphQLClient} from './client';
import {getAllCarsQuery} from './query';
import {Car} from '../src/models/carType';

export async function getAllCars() {
  const {data: {allCars}} = <any> await graphQLClient.query({
    query: getAllCarsQuery,
  });
  return allCars;
}
