import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const clientId =
  "885931050988-hokog5q26ru0meeaju7ncatceg95ifup.apps.googleusercontent.com";

const jsSrc = "https://accounts.google.com/gsi/client";

export default function Google() {
  const onSuccess = (res) => {
    console.log("currentUser", res);
  };

  const onFailure = (res) => {
    console.log(`[LOGIN FAILED] res: ${JSON.stringify(res, null, 2)}`);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Signup with Google"
        cookiePolicy="single_host_origin"
        onSuccess={onSuccess}
        onFailure={onFailure}

        // jsSrc={jsSrc}
      />
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout with Google"
        cookiePolicy="single_host_origin"
        onLogoutSuccess={onSuccess}
        onFailure={onFailure}
        // jsSrc="https://apis.google.com/js/platform.js"
      />
    </div>
  );
}
