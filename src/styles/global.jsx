import styled, { createGlobalStyle } from "styled-components";

const bodyColors = {
  bodyBackgroundColor: "#141B2D",
  mainTextColor: "#fff",
  semiTextColor: "#FFCF01",
  activeLinkColor: "rgb(104, 112, 250)",
  mainBlockBackgroundColor: "#1F2A40",
};

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: "SourceSans", sans-serif;
    
    }
    
    body {
        background-color: ${bodyColors.bodyBackgroundColor};
    }
    
    *::-webkit-scrollbar-thumb {
        background-color: ${bodyColors.activeLinkColor};
    }
    
    *::-webkit-scrollbar-track {
        -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
        background-color: ${bodyColors.mainBlockBackgroundColor};
    }
    
    *::-webkit-scrollbar {
        width: 5px;
    }
`;

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

const HeadTitle = styled.h1`
  color: ${bodyColors.mainTextColor};
  font-size: 50px ;
`;

const SelectStyled = styled.select`
  background-color: ${bodyColors.mainBlockBackgroundColor};
  font: inherit;
  letter-spacing: inherit;
  word-spacing: inherit;
  border: 0.1em solid;
  padding: 0 0.2em;
`;

export { bodyColors, device, GlobalStyle, HeadTitle, SelectStyled };
