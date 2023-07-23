import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./components/App";
import { HashRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const root = createRoot(document.getElementById("root"));

root.render(
 
  <Auth0Provider
    domain="dev-2jorlfzkwebgy4e3.us.auth0.com"
    clientId="h8dEMFHj2j861jVDOFUYu4IwXz0z36lP"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <HashRouter>
      <App />
      
    </HashRouter>
  </Auth0Provider>
  
);
