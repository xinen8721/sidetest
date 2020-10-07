import {gql} from 'apollo-server-express';
const typeDefs = gql`
  type Property {
    mlsId: Int
    privateRemarks: String!
    attributes: Attribute
    showingContactPhone: Boolean
    terms: String
    showingInstructions: String
    office: Office
    leaseTerm: String
    disclaimer: String
    originalListPrice: Int
    address: Address!
    agreement: String
    listDate: String
    agent: Agent
    modified: String
    school: School
    photos: [String]
    listPrice: Int
    internetAddressDisplay: String
    listingId: String!
    mls: MLS
    internetEntireListingDisplay: String
    geo: Geo
    tax: Tax
    coAgent: Agent
    sales: Sales
    leaseType: String
    virtualTourUrl: String
    remarks: String
    association: HOA
  }

  type HOA {
    frequency: String
    fee: Float
    name: String
    amenities: String
  }

  type Sales {
    closeDate: String 
    office: Office
    closePrice: Float
    agent: Agent
    contractDate: String
  }

  type Tax {
    taxYear: Int
    taxAnnualAmount: Float
    id: String
  }
  type Geo {
    county: String
    lat: Float
    lng: Float
    marketArea: String
    directions: String
  }
  type MLS {
    status: String
    area: String
    daysOnMarket: Int
    originalEntryTimestamp: String
    originatingSystemName: String
    statusText: String
    areaMinor: String
  }
  type School {
    middleSchool: String
    highSchool: String
    elementarySchool: String
    district: String
  }
  type Agent {
    lastName: String
    contact: String
    address: String
    firstName: String
    id: String!
  }
  type Office {
    contact: String
    name: String
    servingName: String
    brokerid: Int
  }
  type Address {
    crossStreet: String
    state: String
    country: String
    postalCode: String
    streetName: String
    streetNumberText: String
    city: String
    streetNumber: Int
    full: String
    unit: String
  }
  type Attribute {
    roof: String
    cooling: String
    style: String
    area: Int
    bathsFull: Int
    bathsHalf: Int
    stories: Int
    fireplaces: Int
    flooring: String
    heating: String
    bathrooms: Int
    foundation: String
    laundryFeatures: String
    occupantName: String
    ownerName: String
    lotDescription: String
    pool: String
    subType: String
    bedrooms: Int
    interiorFeatures: String
    lotSize: String
    areaSource: String
    maintenanceExpense: String
    additionalRooms: String
    exteriorFeatures: String
    water: String
    view: String
    lotSizeArea: String
    subdivision: String
    construction: String
    parking: Parking
    lotSizeAreaUnits: String
    type: String
    garageSpaces: Float
    bathsThreeQuarter: String
    accessibility: String
    acres: String
    occupantType: String
    subTypeText: String
    yearBuilt: Int
  }
  type Parking {
    leased: String
    spaces: Int
    description: String
  }
  type Query {
    getAProperty(mlsId: ID!) : Property
    getAllProperties(city: String!): [Property]
  }
`;

export default typeDefs;