import styled from "styled-components";
import {bodyColors, device} from "../styles/global.jsx";
import {NavLink} from "react-router-dom";

const Pages = styled.div`
  text-align: center;
  margin: 10px;
  font-size: 1.2em;
  > button {
    border:none;
    cursor:pointer;
    padding: 8px 16px;
    margin: 2px;
    color: ${bodyColors.mainTextColor};
    text-decoration: none;
    background-color: ${bodyColors.mainBlockBackgroundColor};
    &.active{
        color: ${bodyColors.activeLinkColor};
    }
      }
  
  
  @media ${device.laptop} {
    text-align: left;
  }
`;

export {Pages}

export default function Pagination(props) {
    console.log(props)
    const left = "<";
    const right = ">";
    return (
        <Pages>

            {pages &&
                <>
                    <button>{left}</button>
                    {pages.page_previous && <button>{pages.page_previous}</button>}
                    <button>{pages.page_now}</button>
                    {pages.page_next && <button>{pages.page_next}</button>}
                    <button>{right}</button>
                </>}

            {/*}*/}

        </Pages>
    );
}
