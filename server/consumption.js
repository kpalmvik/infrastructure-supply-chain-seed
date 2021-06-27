require("dotenv").config();

const fetch = require("node-fetch");
const { GraphQLClient } = require("graphql-request");
var { DateTime } = require("luxon");

const meanValue = require("./helpers/meanValue");
const consumptionQuery = require("./consumptionQuery");

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

const queryGraphQL = async function queryGraphQL(
  apiEndpointURL,
  token,
  query,
  variables
) {
  const graphQLClient = new GraphQLClient(apiEndpointURL, {
    headers: { authorization: `Bearer ${token}` },
  });

  return await graphQLClient.request(query, variables);
};

const format = function formatData(data) {
  const rawItems = data.me.home.consumptionChart.items;

  const items = rawItems.map((item) => item.totalConsumption);
  const average = Math.round(meanValue(items));

  return { average, items };
};

const getConsumptionVariables = function getConsumptionVariables() {
  const now = DateTime.now();
  const endOfLastMonth = now.minus({ months: 1 }).endOf("month");
  const oneYearAgo = endOfLastMonth.minus({ months: 11 }).startOf("month");

  const from = oneYearAgo.toISODate();
  const to = endOfLastMonth.toISODate();

  return { from, to };
};

const consumption = async (req, res) => {
  const jwt = await getJWT(tokenURL, email, password);

  const data = await queryGraphQL(
    apiEndpointURL,
    jwt.token,
    consumptionQuery,
    getConsumptionVariables()
  );
  const formattedData = format(data);
  res.json(formattedData);
};

module.exports = consumption;
