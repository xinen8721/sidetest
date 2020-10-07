import testServer from '../../utils/testingServer';
import propertiesSample from '../../utils/propertiesSample'
import onePropertySample from '../../utils/onePropertySample'
import PropertyAPI from '../PropertyAPI';

describe('PropertyAPI', () => {
  it('fetches all properties', async () => {
    // We cannot stub a protected method,
    // so we declare the type as 'any'
    const propertyAPI = new PropertyAPI();

    // We create a stub because we don't
    // want to call an external service.
    // We also want to use it for testing.
    const getStub = () =>
      Promise.resolve(propertiesSample)
      propertyAPI.getAllProperties = jest.fn(getStub);

    // We use a test server instead of the actual one.
    const { query } = testServer(() => ({ propertyAPI }))

    const GET_PROPERTIES = `{
      getAllProperties(city: "Houston") {
         mlsId
         address {
           full
         }
         association {
           fee
         }
       }
     }`

    // A query is made as if it was a real service.
    const res = await query({ query: GET_PROPERTIES })
    // We ensure that the errors are undefined.
    // This helps us to see what goes wrong.
    expect(res.errors).toBe(undefined)

    // We check to see if the properties
    // endpoint is called properly.
    expect(propertyAPI.getAllProperties).toHaveBeenCalledWith('Houston')

    // We check to see if we have
    // all the properties in the sample.
    expect(res?.data?.getAllProperties).toEqual(propertiesSample)
  })

  it('fetches single property', async () => {
    // We cannot stub a protected method,
    // so we declare the type as 'any'
    const propertyAPI = new PropertyAPI();

    // We create a stub because we don't
    // want to call an external service.
    // We also want to use it for testing.
    const getStub = () =>
      Promise.resolve(onePropertySample)
    propertyAPI.getAProperty = jest.fn(getStub);

    // We use a test server instead of the actual one.
    const { query } = testServer(() => ({ propertyAPI }))

    const GET_PROPERTY = `{
      getAProperty(mlsId: "1005192") {
         mlsId
         address {
           full
         }
         association {
           fee
         }
       }
     }`

    // A query is made as if it was a real service.
    const res = await query({ query: GET_PROPERTY })
    expect(res.errors).toBe(undefined)
    expect(propertyAPI.getAProperty).toHaveBeenCalledWith("1005192")

    // We check to see if we have
    // all the property in the sample.
    expect(res?.data?.getAProperty).toEqual(onePropertySample)
  })
})