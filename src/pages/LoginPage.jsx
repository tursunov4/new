import { useState } from "react";
import http from "../axios";
import "./style.css";
import { useNavigate } from "react-router-dom";
const client_id = "0oadr4dwtfZLCRFub5d7";
const mainurl = "https://dev-05121880.okta.com";
const redirect_uri =
  "http://localhost:3000/accounts/callback/&state=296bc9a0-a2a2-4a57-be1a-d0e2fd9bb601";
const LoginPage = () => {
  const token = sessionStorage.getItem("token");

  const navigate = useNavigate();
  const handleLogut = () => {
    http
      .post("/profile/logout/")
      .then((res) => {
        if (res.status === 200) {
          sessionStorage.removeItem("token");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {!token ? (
        <>
          <div className="loginPage__wrapp">
            <h4>Sign In Via Okta</h4>
            <a
              href={`${mainurl}/oauth2/v1/authorize?client_id=${client_id}&response_type=code&scope=openid+profile+email&redirect_uri=${redirect_uri}`}
            >
              Sign In{" "}
            </a>
          </div>
        </>
      ) : (
        <>
          <div className="loginPage__wrapp">
            <h4>You are logged in!</h4>
            <a onClick={handleLogut}>Logout</a>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginPage;
