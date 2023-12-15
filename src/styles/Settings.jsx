import { styled } from "styled-components";
import { bodyColors, device } from "./global";

export const SettingsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  > div {
    background-color: ${bodyColors.mainBlockBackgroundColor};
    padding: 10px;
    margin: 10px;
    width: 100%;
    flex: 1 1 40%;
    display: flex;
    justify-content: center;
    align-items: center;

    > canvas {
      #max-width: 50%;
      #max-height: 50%;
    }

    @media ${device.mobileS} {
      > canvas {
        height: 200px !important;
      }
    }
    @media ${device.tablet} {
      > canvas {
        height: 350px !important;
      }
    }
  }
`;
