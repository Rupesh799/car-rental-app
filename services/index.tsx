import request, { gql } from "graphql-request"

const URL = 'https://api-ap-south-1.hygraph.com/v2/clyfu4w3p00lp07ulc5qiu76l/master'
export const getCarList=async()=>{
    const query = gql`
    query MyQuery {
  carLists {
    id
    name
    price
    speed
    carBrand
    carType
    createdAt
    publishedAt
    updatedAt
    image {
      url
    }
  }
}`

const result = await request(URL,query)
return result;
}   

export const getStoreLocations=async()=>{
    const query = gql`
    query storeLocation {
  storesLocations {
    address
  }
}
    `

    const result = await request(URL, query);
    return result;
}

export const createBooking=async(formValue:any)=>{
  const mutationQuery = gql`
  mutation MyMutation {
  createBooking(
    data: 
    {userName: "Rupesh",
     carId: {connect: {id: "clyuf5kev0l2807o7eop3ejl6"}}, 
     pickUpTime: "", 
     pickUpDate: "", 
     dropOffTime: "", 
     dropOffDate: "", 
     contact: ""}
  ) {
    id
  }
}
  `
  const result = await request(URL, mutationQuery);
    return result;
}