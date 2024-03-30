import { useOktaAuth } from "@okta/okta-react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Preloader, PreloaderWrapper } from "../styles/Preloader";
import http from "../axios";

const Loading = () => {
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(window.location.search);
  const code = queryParams.get("code");

  useEffect(() => {
    if (code) {
      http
        .post("/accounts/okta/login/", {
          code: code,
          // withCredentials: true,
        })
        .then((res) => {
          sessionStorage.setItem("token", res.data.token);
          navigate("/");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          navigate("/login");
        });
    } else {
      navigate("/");
    }
  });

  return (
    <div>
      <PreloaderWrapper>
        <Preloader />
      </PreloaderWrapper>
    </div>
  );
};

export default Loading;
