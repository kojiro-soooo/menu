import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = ( {isLoading} ) => {
    const { loginWithRedirect }  = useAuth0();
    
    if (isLoading) {
        return null
    }
    
    return (
        <button onClick={() => loginWithRedirect()}>Log In</button>
    );
};

export default LoginButton;