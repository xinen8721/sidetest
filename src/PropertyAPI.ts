import { RESTDataSource } from "apollo-datasource-rest";

export default class PropertyAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.simplyrets.com";
  }
  willSendRequest(request) {
    request.headers.set(
      "Authorization",
      "Basic " + new Buffer("simplyrets:simplyrets").toString("base64")
    );
  }
  
  async getAllProperties(city) {
    const res = this.get(`properties?q=${city}`);
    // res.then(data => console.log('LALLALALA', JSO));
    return res;
  }

  async getAProperty(mlsId) {
    return this.get(`properties/${mlsId}`);
  }
}
