import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UseAuth } from './Member/authcontext';

function PrivateRoute({ component: Component, ...rest}){

    const { currentUser } = UseAuth();    
    return(
        <Route 
        {...rest}
        render={props => {
            return !!currentUser ? 
            <Component {...props} /> : 
            <Redirect to="/member/login" />

        }}
        >

        </Route>
    )
}

export default PrivateRoute;