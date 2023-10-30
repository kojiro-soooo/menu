import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
            <Auth0Provider
                domain="dev-c0dwltendwxbev8d.us.auth0.com"
                clientId="nCEx1jEbQTgFbqzI1YrOtCfhfVvu74bU"
                // clientId="hV55iuMCaQkohRHQwujZdQanluWbNssp"
                authorizationParams={{
                    redirect_uri: window.location.origin,
                    // audience: "https://dev-c0dwltendwxbev8d.us.auth0.com/api/v2/",
                    // scope: "read:current_user update:current_user_metadata"
                }}
            >
                <App />
            </Auth0Provider>,
);

