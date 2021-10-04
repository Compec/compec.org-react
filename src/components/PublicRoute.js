// If the user has successfully logged in, redirect registration and login pages to profile page
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UseAuth } from './Member/authcontext';

function PublicRoute({ component: Component, ...rest}){

    const { currentUser, userData } = UseAuth(); 
    return(
        <Route 
        {...rest}
        render={props => {
            if (currentUser) {
                // if (userData) {
                    if (!currentUser.emailVerified || !(userData && userData.signupStep === 6)){
                        return(
                            <Redirect to="/member/unfreg"/>
                        )
                    }
                    else {
                        return(
                            <Redirect to="/member/profile"/>
                        )
                    }
                // }
                // else {
                //     return(
                //         <Component {...props}/>
                //     )
                // }
            // return (!!currentUser && currentUser.emailVerified && userData.signupStep === 4) ? 
            // <Redirect to="/member/profile" /> : 
            // <Component {...props} />

            }

            else {
                return(<Component {...props} />)
            }
        }}
        >
        </Route>
    )
}

export default PublicRoute;