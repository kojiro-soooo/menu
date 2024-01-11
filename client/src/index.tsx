import ReactDOM from "react-dom/client";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    // const clientId = process.env.REACT_APP_CLIENT_ID_PRODUCTION; // prod
    const clientId = process.env.REACT_APP_CLIENT_ID_STAGING // staging

    root.render(
        clientId && (
            <Auth0Provider
                domain="dev-c0dwltendwxbev8d.us.auth0.com"
                cacheLocation="localstorage" // enables storing auth status in localstorage so it doesn't have to be retrieved on refresh
                clientId={clientId}
                authorizationParams={{
                    redirect_uri: window.location.origin,
                    // audience: "https://dev-c0dwltendwxbev8d.us.auth0.com/api/v2/",
                    // scope: "read:current_user update:current_user_metadata"
                }}
            >
                <App />
            </Auth0Provider>
        )
    );
} else {
    console.error('Root element with id "root" not found.');
}
