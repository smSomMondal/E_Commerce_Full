// import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';


import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <Auth0Provider domain="dev-yqoxqptsa3h8pccd.us.auth0.com"
  clientId="jpFcuWTFK9U3zbQbQKfhEJbEycOY50r7"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>

  <StrictMode>
    <App />
  </StrictMode>,
 
  </Auth0Provider>
);
