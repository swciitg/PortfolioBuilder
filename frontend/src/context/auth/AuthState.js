import React, { useState } from 'react';
import AuthContext from './AuthContext';

const AuthState = (props) => {
    const [studInfo,setStudInfo] = useState({ name : "" , email : "", roll : ""});
    const url = "http://localhost:5001";

    const userLogin = async()=>{
        window.location.href = `${url}/auth/microsoft`;
    }

    const getToken = async(code)=>{
        console.log("json.studInformation")
        const response = await fetch(`${url}/auth/microsoft/getToken`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'Code': code
            }
        });
        console.log("222")

        const json=await response.json();
        console.log(json.studInformation)
        localStorage.setItem('studName',json.studInformation.givenName);
        localStorage.setItem('studId',json.studInformation.mail);
        localStorage.setItem('studRoll',json.studInformation.surname);
        localStorage.setItem('studJob',json.studInformation.jobTitle);

        setStudInfo({...studInfo, name : json.studInformation.givenName , roll : json.studInformation.surname , email : json.studInformation.mail});
    }

    const logOut=async()=>{
        console.log( process.env.REACT_APP_MICROSOFT_GRAPH_TENANT_ID)
        
        const tenantID = process.env.REACT_APP_MICROSOFT_GRAPH_TENANT_ID;
        const logoutEndpoint = `https://login.microsoftonline.com/${tenantID}/oauth2/v2.0/logout?post_logout_redirect_uri=${process.env.REACT_APP_FRONTEND_URL}`;
        window.location.href = logoutEndpoint;
    }

    return (<AuthContext.Provider value={{ userLogin,getToken ,logOut , studInfo ,setStudInfo}}>
                {props.children}
            </AuthContext.Provider>)
}

export default AuthState;