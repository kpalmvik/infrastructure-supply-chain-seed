const { gql } = require("graphql-request");

const consumptionQuery = gql`
  query ConsumptionQuery($from: String!, $to: String!) {
    me {
      home(id: "a8c210fc-2988-4f06-9fe9-ab1bad9529d5") {
        consumptionChart(from: $from, to: $to, resolution: monthly) {
          items {
            totalConsumption
          }
        }
      }
    }
  }
`;

module.exports = consumptionQuery;
