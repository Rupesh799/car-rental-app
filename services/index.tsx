import request, { gql } from "graphql-request"

export const getCarList=async()=>{
    const query = gql`
    query MyQuery {
  carLists {
    id
    name
    price
    speed
    brand
    carType
    createdAt
    publishedAt
    updatedAt
    image {
      url
    }
  }
}`

const result = await request('https://api-ap-south-1.hygraph.com/v2/clyfu4w3p00lp07ulc5qiu76l/master',query)
return result;
}   