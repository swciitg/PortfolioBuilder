import msal from '@azure/msal-node';
import fetch from "node-fetch"
import dotenv from 'dotenv';
dotenv.config({path:'Config/.env'});

const clientID = process.env.MICROSOFT_GRAPH_CLIENT_ID;
const tenantID = process.env.MICROSOFT_GRAPH_TENANT_ID;
const clientSecret = process.env.MICROSOFT_GRAPH_CLIENT_SECRET;

const config = {
  auth: {
    clientId: clientID,
    authority: "https://login.microsoftonline.com/"+tenantID,
    clientSecret: clientSecret,
    redirectUri: `${process.env.FRONTENDURL}/main`,
  },
  system: {
    loggerOptions: {
      loggerCallback(loglevel, message) {
      },
      piiLoggingEnabled: false,
      logLevel: msal.LogLevel.Verbose,
    },
  },
};

const pca = new msal.PublicClientApplication(config);


export const login = async (req, res) => {
  const authCodeUrlParameters = {
    scopes: ['user.read'],
    redirectUri: `${process.env.FRONTENDURL}/main`,
  };

  const authUrl = await pca.getAuthCodeUrl(authCodeUrlParameters);

  res.redirect(authUrl);
};



export const getToken = async (req,res) => {

  const url = `https://login.microsoftonline.com/${tenantID}/oauth2/token`;
  const formData = new URLSearchParams();
  //formdata
  formData.append('client_id', clientID);
  formData.append('client_secret', clientSecret);
  formData.append('scope', "openid profile email");
  formData.append('redirect_uri', `${process.env.FRONTENDURL}/main`);
  formData.append('grant_type', 'authorization_code');
  formData.append('code', req.headers.code);
  formData.append('resource', "https://graph.microsoft.com");

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData.toString(),
  });

  if (response.ok) {
    const data = await response.json();
   
    const accessToken=data.access_token;
    
    const url2 = 'https://graph.microsoft.com/v1.0/me';

    const response2 = await fetch(url2, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    
    if (response2.ok) {
      const data = await response2.json();
      

      res.status(200).json({ studInformation: data });
    } else {
      throw new Error(await response2.text());
    }
    } 
  };