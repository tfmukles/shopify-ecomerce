export const getOrder = /* GraphQL */ `
  query getOrders($token: String!) {
    customer(customerAccessToken: $token) {
      id
      firstName
      orders(first: 10) {
        edges {
          node {
            lineItems(first: 10) {
              edges {
                node {
                  quantity
                  title
                }
              }
            }
            processedAt
            id
            cancelReason
            customerUrl
            billingAddress {
              city
              phone
            }
            financialStatus
            fulfillmentStatus
            shippingAddress {
              zip
              city
              country
            }
            orderNumber
            totalShippingPrice {
              amount
              currencyCode
            }
            currentTotalPrice {
              amount
              currencyCode
            }

            email
          }
        }
      }
      lastIncompleteCheckout {
        order {
          currencyCode
          email
          lineItems(first: 10) {
            edges {
              node {
                customAttributes {
                  value
                }
              }
            }
          }
        }
      }
    }
  }
`;
