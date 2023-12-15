import styled from "styled-components";
import {bodyColors, device} from "./global.jsx";

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  background-color: ${bodyColors.mainBlockBackgroundColor};
  padding: 15px;
  > h2 {
    text-align: center;
    font-size: 2em;
    color: ${bodyColors.mainTextColor};
  }
  > div {
    margin: 15px 0;

    > span {
      color: ${bodyColors.semiTextColor};
    }
    > label {
      color: ${bodyColors.mainTextColor};
      font-size: 1.2em;
      display: block;
    }
    > input,
    textarea {
      box-sizing: border-box;
      width: 100%;
      padding: 5px 10px;
      background-color: ${bodyColors.bodyBackgroundColor};
      border: none;

      color: ${bodyColors.mainTextColor};
      line-height: 2;
      outline: none;
    }

    > input[type="submit"] {
      padding: 5px 20px;
      cursor: pointer;
      transition: 0.2s ease-in-out;
      width: 100%;
    }
    > input[type="submit"]:hover {
      color: ${bodyColors.activeLinkColor};
    }
    @media ${device.mobileS} {
      > input,
      textarea {
        font-size: 1em;
      }
    }
    @media ${device.mobileM} {
      > input,
      textarea {
        font-size: 1.2em;
      }
    }
  }
`;
const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  > input[type="checkbox"] {
    height: 18px;
    width: 18px;
    transition: 0.2s ease-in-out;
    margin: 0 10px;
    color: ${bodyColors.activeLinkColor};
  }
`;

export {LoginWrapper, LoginForm, CheckBoxWrapper};