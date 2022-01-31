/*
import {ConfidentialClientApplication} from "@azure/msal-node";
import config from "../config/auth.json";


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const clientConfig = {
    auth: config.authOptions,
    /*
    cache: {
        cachePlugin
    },
    */
    // Uncomment the code below to enable the MSAL logger
    /*
     *   system: {
     *    loggerOptions: loggerOptions
     *   } 
     */
    /*
};

// Create an MSAL PublicClientApplication object 
const publicClientApplication = new ConfidentialClientApplication(clientConfig);

const authToMicrosoft = function(){

// Execute sample application with the configured MSAL PublicClientApplication
    return getTokenAuthCode(config, publicClientApplication);

}

const getTokenAuthCode = async function (scenarioConfig, clientApplication) {

    const requestConfig = scenarioConfig.request;
    const { authCodeUrlParameters } = requestConfig;

    let authUrl = await clientApplication.getAuthCodeUrl(authCodeUrlParameters);
    console.log(authUrl);
}

export default authToMicrosoft;
*/