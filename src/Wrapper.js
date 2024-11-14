import React from "react";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Router from "./Router";



export default () =>{
    return(
        <AuthProvider>
            <Router/>
        </AuthProvider>
    )
    
}