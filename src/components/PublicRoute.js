import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UseAuth } from './Member/authcontext';

function PublicRoute({ component: Component, ...rest}){

    const { currentUser } = UseAuth();    
    return(
        <Route 
        {...rest}
        render={props => {
            return currentUser ? 
            <Redirect to="/member/home" /> : 
            <Component {...props} />
        }}
        >
        </Route>
    )
}

export default PublicRoute;