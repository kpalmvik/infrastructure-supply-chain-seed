require("dotenv").config();

const fetch = require("node-fetch");
const { GraphQLClient } = require("graphql-request");

const meanValue = require("./helpers/meanValue");
const temperatureQuery = require("./temperatureQuery");

const appOrigin = process.env.APP_ORIGIN;
const email = process.env.EMAIL;
const password = process.env.PASSWORD;

const tokenURL = `${appOrigin}/v4/login.credentials`;
const apiEndpointURL = `${appOrigin}/v4/gql`;

const getJWT = async function getJSONWebToken(tokenURL, email, password) {
  const response = await fetch(tokenURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  return await response.json();
};

const queryGraphQL = async function queryGraphQL(apiEndpointURL, token, query) {
  const graphQLClient = new GraphQLClient(apiEndpointURL, {
    headers: { authorization: `Bearer ${token}` },
  });

  return await graphQLClient.request(query);
};

const format = function formatData(data) {
  const rawEntries = data.me.home.weather.entries;

  const entries = rawEntries.map((entry) => entry.temperature);
  const average = Math.round(meanValue(entries));

  return { average, entries };
};

const temperature = async (req, res) => {
  const jwt = await getJWT(tokenURL, email, password);
  const data = await queryGraphQL(apiEndpointURL, jwt.token, temperatureQuery);
  const formattedData = format(data);
  res.json(formattedData);
};

module.exports = temperature;
