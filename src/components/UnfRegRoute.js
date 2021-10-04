// If the user has not logged in yet, redirect to login page
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UseAuth, userData} from './Member/authcontext';

function UnfregRoute({ component: Component, ...rest}){

    const { currentUser, userData } = UseAuth();    
    // return(
    //     <Route 
    //     {...rest}
    //     render={props => {
    //         return !!currentUser ? 
    //         <Component {...props} /> : 
    //         <Redirect to="/member/login" />

    //     }}
    //     >

    //     </Route>
    // )
    return(
        <Route 
        {...rest}
        render={props => {
            if (currentUser) {
                // if (userData) {
                    if (!(userData && userData.signupStep >= 4) ) { // burayı kontrol et
                        return(<Component {...props} />)
                    } else {
                        if (!userData.isPaid) {
                            return(
                                <Redirect to="/member/unpaidreg"/>
                            )
                        } else {
                            if (!currentUser.emailVerified) {
                                return(
                                    <Redirect to="/member/unverifiedemailreg"/>
                                )
                            } else {
                                return(
                                    <Redirect to="/member/profile"/>
                                )
                            }
                        }
                    }

                    // if (!currentUser.emailVerified || !(userData && userData.signupStep === 5)){
                    //     return(
                    //         <Redirect to="/member/unfreg"/>
                    //     )
                    // }
                    // else {
                    //     return(
                    //     <Component {...props} />
                    //     )
                    // }
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

export default UnfregRoute;