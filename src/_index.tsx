// Libraries
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// App
import App from "./Modules/App/Pages/App/App";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql/",
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-xrmh37ogdbmx6wt0.us.auth0.com"
        clientId="LpC3fUDoKXT9IEzWw4Jon9m7upPPZNL4"
        authorizationParams={{
          redirect_uri: window.location.origin + "/dashboard",
          audience: "http://localhost:3000",
        }}
      >
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Auth0Provider>
    </BrowserRouter>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
