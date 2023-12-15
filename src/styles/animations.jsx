import {keyframes} from "styled-components";

export const rotate = keyframes`
   0%, 50%, 100% {
     transform: rotate(0deg);
     -webkit-transform: rotate(0deg);
     -moz-transform: rotate(0deg);
     -o-transform: rotate(0deg);
     -ms-transform: rotate(0deg);
   }
   10%, 30% {
     transform: rotate(-10deg);
     -webkit-transform: rotate(-10deg);
     -moz-transform: rotate(-10deg);
     -o-transform: rotate(-10deg);
     -ms-transform: rotate(-10deg);
   }
   20%, 40% {
     transform: rotate(10deg);
     -webkit-transform: rotate(10deg);
     -moz-transform: rotate(10deg);
     -o-transform: rotate(10deg);
     -ms-transform: rotate(10deg);
   }
`

export const preloaderRotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`
