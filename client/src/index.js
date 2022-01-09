<<<<<<< HEAD
import React from 'react';
import { StyleReset } from 'atomize'
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Auth0Provider } from "@auth0/auth0-react";

import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
=======
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
>>>>>>> 306a8295ea2eb9be360365b0b1b3ef8ece417bae

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

// 2. Provide the engine to the app
// debug engine needs inlined source maps
ReactDOM.render(
<<<<<<< HEAD
  <StyletronProvider value={engine} debug={debug} debugAfterHydration>
    <Auth0Provider
    useCookiesForTransactions={true}
  domain="dev-y40m5-by.eu.auth0.com"
  clientId="3i3EpEbX8yyZA9qh1R04f119gr7ZZbkr"
  redirectUri={window.location.origin}
>
  <App />
</Auth0Provider>
    <StyleReset />
  </StyletronProvider>,
  document.getElementById('root')
=======
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
>>>>>>> 306a8295ea2eb9be360365b0b1b3ef8ece417bae
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
