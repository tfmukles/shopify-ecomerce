export const getOrder = /* GraphQL */ `
  query getOrders($token: String!) {
    customer(customerAccessToken: $token) {
      orders(first: 10) {
        edges {
          node {
            statusUrl
            currentTotalPrice {
              amount
              currencyCode
            }
            id
            cancelReason
            totalShippingPrice {
              amount
              currencyCode
            }
            fulfillmentStatus
            financialStatus
            orderNumber
            currentTotalTax {
              amount
              currencyCode
            }
            lineItems(first: 10) {
              edges {
                node {
                  quantity
                  title
                  originalTotalPrice {
                    amount
                    currencyCode
                  }
                  variant {
                    id
                    image {
                      width
                      height
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
