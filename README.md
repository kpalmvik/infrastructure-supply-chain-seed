# Infrastructure Supply Chain Seed Lean Startup Technology (ISCSLST)

**ISCSLST** is an API driven web application that displays the hourly temperatures and average value for the current day.

By clicking on the "Show me a Trick" button, the monthly consumption for the last year is shown together with the average monthly consumption for the period. Clicking "Reset" will return to the original state.

The data is fetched by the client from the server API, which in turn makes a request to a third party API service returning hourly temperature readings and consumption history.

The application consist of two parts: [server](#server) and [client](#client).

## Development

To run the application, **the following information must be known and provided in an `.env` file**.
- The `APP_ORIGIN` for the third party app, for example `https://example.com`.
- The `EMAIL` to login to the third party app, for example `test@example.com`.
- The `PASSWORD` to login to the third party app, for example `password`.

To make it easier, an `.env.example` file exists which can be used as a template.

Note that it is also possible to set the same environment variables using other methods, although the `.env` is probably the easiest.

1. Clone the git repository
2. Copy `.env.example` to `.env` and insert the correct values
3. Install the npm dependencies from inside the project directory:
    ```console
    $ npm i
    $ npm i --prefix client
    ```
4. Start the server and client at the same time:
    ```console
    $ npm start
    ```
5. The web application, running on `http://localhost:3000`, will automatically open in a web browser.

Both the server and the client are automatically updated whenever the source files are changed.

### Technical Details

The server is started by running `npm run server`. It is running through [nodemon](https://nodemon.io/), which will monitor for any changes in the source code and automatically restart the server. The server will bind to `http://localhost:3001`.

The client is started by running `npm run client`. It is running using the Create React App server on `http://localhost:3000`, and leverages its [proxy feature](https://create-react-app.dev/docs/proxying-api-requests-in-development/) to transparently proxy the server API. Any request that does not accept `text/html` for an unknown resource will automatically be proxied to the server on `http://localhost:3001`.

The server and client are simultaneously started by running `npm start`, through [concurrently](https://github.com/kimmobrunfeldt/concurrently#readme).

## Server

The server provides a simple API the the client can make a request to.

`/api/temperature` returns a JSON structure with the individual temperatures for each hour during the current day, and the (rounded) average temperature.

Example:
```json
{
  "average": 19,
  "entries": [17.8,17,16.7,17.6,17.6,17.7,18.4,17.9,19.7,21.4,22.6,23.8,23.8,23.7,24.1,20.2,18.2,18.3,18.7,17.8,18.5,18.5,17.8,17.6]
}
```

The server API response is cached for 5 minutes to avoid making repeated requests to the third party GraphQL API. A corresponding `max-age` header is also set on the response, so that a web browser can cache the response until it expires.

### Technology Used

The server is based on [Express](https://expressjs.com/), a minimal and flexible Node.js web application framework.

[apicache](https://github.com/kwhitley/apicache#readme) is used as an Express middleware to cache the API response.

[graphql-request](https://github.com/prisma-labs/graphql-request#readme) is used as a minimal GraphQL client implementation to talk to the third party GraphQL API.

[Node Fetch](https://github.com/node-fetch/node-fetch#readme) is used as a lightweight implementation of `fetch` for Node.js. It is used for all network requests, such as fetching the JWT and GraphQL response.

[dotenv](https://github.com/motdotla/dotenv#readme) is used to allow configuration of required information in a single `.env` file.
## Client

The client is a static HTML website with corresponding JavaScript that makes a request to the API provided by the server. The data is automatically updated every 30 seconds, although the server API is cached so most of the responses should return almost instantly.
### Technology Used

The client is based on [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) to quickly create an efficient development environment.

The server API data is fetched from the server API through [SWR](https://github.com/vercel/swr).
