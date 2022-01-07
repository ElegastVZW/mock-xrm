import xrm from "elegast-mock-xrm";
import { WEBAPI } from "../consts";
import isOnPremises from "./isOnPremises";
import orgUniqueName from "./orgUniqueName";


const executeFetch = (method) => (data) => (action) => async (headers) => {
  let orgName = "";
  let dataFormat = data && JSON.stringify(data)

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

  if(action === "$batch"){
    dataFormat = data;
  }

  return fetch(`${orgName ? '/' + orgName : orgName}${WEBAPI}/${action}`, {
    headers: {
      ...headers,
    },
    method: method,
    body: dataFormat,
  });
};

export default executeFetch;
