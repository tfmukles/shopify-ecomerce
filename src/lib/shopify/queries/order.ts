export const getOrder = /* GraphQL */ `
  query getOrders($token: String!) {
    customer(customerAccessToken: $token) {
      id
      firstName
      lastName
      orders(first: 10) {
        edges {
          node {
            id
            name
            fulfillmentStatus
          }
        }
      }
    }
  }
`;
