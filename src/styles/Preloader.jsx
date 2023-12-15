import styled from "styled-components";
import {preloaderRotate} from "./animations.jsx";
import {bodyColors} from "./global.jsx";

export const Preloader = styled.span`
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: ${bodyColors.activeLinkColor};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${preloaderRotate} 1s linear infinite;
`

export const PreloaderWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    position:fixed;
    z-index: 3;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    overflow: auto;
    left: 0;
    top: 0;
`


