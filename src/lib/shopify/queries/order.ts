export const getOrder = /* GraphQL */ `
  query getOrders($input: String!) {
    customer(customerAccessToken: $input) {
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
