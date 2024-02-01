import { useOktaAuth } from "@okta/okta-react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Preloader, PreloaderWrapper } from "../styles/Preloader";
import http from "../axios";

const Loading = () => {
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get("token");

  useEffect(() => {
    if (token) {
      http
        .post("/profile/check/", {
          check: token,
        })
        .then((res) => {
          if (res.data.status === true) {
            sessionStorage.setItem("token", token);
            navigate("/");
            window.location.reload();
          } else {
            navigate("/login");
          }
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
