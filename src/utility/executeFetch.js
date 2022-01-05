import xrm from "elegast-mock-xrm";
import { WEBAPI } from "../consts";
import isOnPremises from "./isOnPremises";
import orgUniqueName from "./orgUniqueName";


const executeFetch = (method) => (data) => (action) => async (headers) => {
  let orgName = "";
  if (isOnPremises()) {
    orgName = await orgUniqueName();
  }
  
  // Allow testing in localhost
  if(xrm.getAuth()){
    if(!headers){
      headers = {}
    }
    headers['Authorization'] = 'Bearer '+xrm.getAuth();
  }

  return fetch(`${orgName ? '/' + orgName : orgName}${WEBAPI}/${action}`, {
    headers: {
      ...headers,
    },
    method: method,
    body: data && JSON.stringify(data),
  });
};

export default executeFetch;
