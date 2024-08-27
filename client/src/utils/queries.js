import { gql } from '@apollo/client';

export const QUERY_CARS = gql`
  query getCars {
  cars {
    id
    model
    pricePerDay
    year
    category {
      name
    }
  }
}
`;

export const QUERY_BOOKINGS = gql`
query Orders($orderId: ID!) {
  orders {
    cars {
      model
    }
  }
}
`;
