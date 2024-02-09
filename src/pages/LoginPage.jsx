import { useState } from "react";
import http from "../axios";
import "./style.css";
import { useNavigate } from "react-router-dom";
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
              href={`${process.env.REACT_APP_MAINURL}/oauth2/v1/authorize?client_id=${process.env.REACT_APP_CLIENTID}&response_type=code&scope=openid+profile+email&redirect_uri=${process.env.REACT_APP_REDIRECTURL}`}
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
