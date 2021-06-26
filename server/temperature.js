const fetch = require("node-fetch");

const appOrigin = process.env.APP_ORIGIN;
const email = process.env.EMAIL;
const password = process.env.PASSWORD;

const tokenURL = `${appOrigin}/v4/login.credentials`;

const mockData = {
  average: 10,
  entries: [
    18.4, 18.4, 17.8, 17.4, 17.9, 18.1, 17.6, 18, 17.5, 17.2, 18.2, 20.1, 20.2,
    20.1, 19.9, 20.6, 21.5, 21.7, 21.7, 21.6, 21.1, 20.3, 19, 18,
  ],
};

const getJWT = async function getJSONWebToken(email, password) {
  const response = await fetch(tokenURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return await response.json();
};

const temperature = async (req, res) => {
  const token = await getJWT(email, password);
  res.json({ ...mockData, token });
};

module.exports = temperature;
