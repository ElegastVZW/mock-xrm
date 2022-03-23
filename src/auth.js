import msalInstance from "./config/authObject";

const request = {
  scopes: [
    "openid",
    "profile",
    "https://elegastsandbox.crm4.dynamics.com//user_impersonation",
  ],
};

const login = async () => {
  try {
    await msalInstance.loginPopup();
    return await acquireToken();
  } catch (err) {
    // handle error
    console.log(err);
  }
};

const acquireToken = async () => {
  let tokenResponse = null;
  try {
    tokenResponse = await msalInstance.acquireTokenPopup(request);
  } catch (err) {
    console.log(err);
  } finally {
    return tokenResponse;
  }
};

export { login };
