import * as msal from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "cd023a23-4fff-48b5-84fc-6e458b839915",
  },
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

export default msalInstance;
