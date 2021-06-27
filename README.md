# Infrastructure Supply Chain Seed Lean Startup Technology (ISCSLST)

**ISCSLST** is an API driven web application that displays the hourly temperatures and average value for the current day.

The data is fetched by the client from the server API, which in turn makes a request to a third party API service returning hourly temperature readings.

The application consist of two parts: [server](#server) and [client](#client).

## Development

To run the application, the following information must be known and provided:
- The origin for the third party app, for example `https://example.com`.
- The email to login to the third party app, for example `test@example.com`.
- The password to login to the third party app, for example `password`.

1. Clone the git repository
2. Install the npm dependencies from inside the project directory:
    ```console
    $ npm i
    $ npm i --prefix client
    ```
3. Start the server and client at the same time, providing the required information as environment variables on the command line:
    ```console
    $ APP_ORIGIN=https://example.com EMAIL=test@example.com PASSWORD=password npm start
    ```
4. The web application, running on `http://localhost:3000`, will automatically open in a web browser.

Both the server and the client are automatically updated whenever the source files are changed.

### Technical Details

The server is started by running `npm run server`. It is running through [nodemon](https://nodemon.io/), which will monitor for any changes in the source code and automatically restart the server. The server will bind to `http://localhost:3001`.

The client is started by running `npm run client`. It is running using the Create React App server on `http://localhost:3000`, and leverages its [proxy feature](https://create-react-app.dev/docs/proxying-api-requests-in-development/) to transparently proxy the server API. Any request that does not accept `text/html` for an unknown resource will automatically be proxied to the server on `http://localhost:3001`.

The server and client are simultaneously started by running `npm start`, through [concurrently](https://github.com/kimmobrunfeldt/concurrently#readme).

## Server

The server provides a simple API the the client can make a request to.

### Technology Used

The server is based on [Express](https://expressjs.com/), a minimal and flexible Node.js web application framework.

[graphql-request](https://github.com/prisma-labs/graphql-request#readme) is used as a minimal GraphQL client implementation to talk to the third party GraphQL API.

[Node Fetch](https://github.com/node-fetch/node-fetch#readme) is used as a lightweight implementation of `fetch` for Node.js. It is used for all network requests, such as fetching the JWT and GraphQL response.

## Client

The client is a static HTML website with corresponding JavaScript that makes a request to the API provided by the server.
### Technology Used

The client is based on [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) to quickly create an efficient development environment.
