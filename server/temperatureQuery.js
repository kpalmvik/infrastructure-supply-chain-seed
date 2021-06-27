const { gql } = require("graphql-request");

const temperatureQuery = gql`
  {
    me {
      home(id: "a8c210fc-2988-4f06-9fe9-ab1bad9529d5") {
        weather {
          entries {
            temperature
          }
        }
      }
    }
  }
`;

module.exports = temperatureQuery;
