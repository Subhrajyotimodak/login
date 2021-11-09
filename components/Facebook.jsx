import React from "react";
import ReactFacebookLogin, {
  FacebookLoginClient,
} from "@greatsumini/react-facebook-login";

const appId = "208932221257528";

export default function Facebook() {
  const [accessToken, setAccessToken] = React.useState("");
  const handleResponse = (response) => {
    console.log(response);
    setAccessToken(response.accessToken);
  };
  const handleFailure = (response) => {
    console.log(response);
  };
  const logout = (e) => {
    e.preventDefault();
    FacebookLoginClient.logout(() => {
      console.log("logout completed!");
    });
  };

  React.useEffect(() => {
    FacebookLoginClient.getLoginStatus((res) => {
      console.log(res.status);
    });

    // FacebookLoginClient.login((res) => {
    //   console.log(res);
    // });

    FacebookLoginClient.getProfile((res) => {
      console.log(res.id, res.name, res.email);
    });
  }, [FacebookLoginClient]);

  return (
    <div>
      <ReactFacebookLogin
        appId={appId}
        fields="name,email,picture,address"
        onProfileSuccess={handleResponse}
        onFail={handleFailure}
        initParams={{
          cookie: true,
          localStorage: false,
        }}
      />
      <button onClick={logout}>Log the fuck out</button>
    </div>
  );
}
