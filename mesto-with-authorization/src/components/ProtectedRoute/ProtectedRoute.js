import React from "react";
import { Route, Redirect } from "react-router-dom"


const ProtectedRoute = ({component:Component, ...props})=>{

    console.log('ProtectedRoute inside')
    console.log('props.loggedIn', props.loggedIn)
    console.log('...props', props)
    return(
  
        <Route>
            {()=>
                props.loggedIn
            ? <Component {...props}/> 
            : <Redirect to = "/signin"/>
            }
        </Route>
    )
}
export default ProtectedRoute;