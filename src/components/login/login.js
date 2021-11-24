import React from "react";
import logo from "../../assets/logo/uni2.png";
import { Button } from "@material-ui/core";

const Login = (props) => {
  const url = `https://login.microsoftonline.com/960a8c95-729d-4ea5-b06f-8979f25bc65f/oauth2/v2.0/authorize?client_id=4c7f16b0-eaa5-473e-a7f5-280e45b31b70&response_type=code&redirect_uri=http%3a%2f%2flocalhost:3000%2fapi%2fv1%2fms%2fiam%2fverify%2f&response_mode=query&scope=openid+offline_access&state=12345&sso_nonce=AwABAAAAAAACAOz_BAD0_xL7R3NF638M125wi7Jv0qp7UcJfi_iScrw-ZYt05NH60EE1rruSOIlS4pzQl2SRv5djO_pReiC5LdJI4KrZmZMgAA&client-request-id=f552f762-84eb-45ac-8444-e56a95c07896&mscrid=f552f762-84eb-45ac-8444-e56a95c07896`;

  const handleLogin = () => {
    window.location.href = url;
  };
  return (
    <div className="login-container">
      <div className="row sign-in-box sign-in-box-shadow">
        <div className="col-md-6 col-12 uni-logo-login">
          <img src={logo} alt="logo" />
        </div>
        <div className="col-md-6 col-12 sign-in-form">
          <div className="sign-in-box">
            <h2>Sign in</h2>
            <h6>Unilever ( Food & Tasting )</h6>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
            >
              Sign in
            </Button>
            <p>
              Please use the login provided below to access this application
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
