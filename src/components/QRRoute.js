import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UseAuth } from './Member/authcontext';

function QRRoute({ component: Component, ...rest}){

    const { currentUser, userData } = UseAuth();

    return(
        <Route 
        {...rest}
        render={props => {
            if (currentUser) {
                // if (userData) {
                    if (currentUser.emailVerified && (userData && userData.signupStep === 5)){
                        return(
                            <Redirect to="/member/unfreg"/>
                        )
                    }
                    else {
                        return(
                        <Component {...props} />
                        )
                    }
                // }
                // else {
                //     return(
                //         <Redirect to="/member/login"/>
                //     )
                // }
                // return (!!currentUser && currentUser.emailVerified && userData.signupStep === 5) ? 
                // <Component {...props} /> : 
                // <Redirect to="/member/login" />
            }
            else {
                return(
                    <Redirect to="/member/login" />
                )
            }
        }}
        >

        </Route>
    )
}

export default QRRoute;