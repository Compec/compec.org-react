// If the user has not logged in yet, redirect to login page
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UseAuth, userData} from './Member/authcontext';

function UnpaidRoute({ component: Component, ...rest}){

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
                console.log(userData)
                // if (userData) {
                    if (!(userData && userData.signupStep === 5) ) { // burayı kontrol et
                        return(
                            <Redirect to="/member/unfreg"/>
                        )
                    } else {
                        if (!userData.isPaid) {

                            return(<Component {...props} />)
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

export default UnpaidRoute;