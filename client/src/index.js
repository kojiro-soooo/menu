import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
            <Auth0Provider
                domain="dev-c0dwltendwxbev8d.us.auth0.com"
                clientId="hV55iuMCaQkohRHQwujZdQanluWbNssp"
                authorizationParams={{
                    redirect_uri: window.location.origin
                }}
            >
                <App />
            </Auth0Provider>,
);

