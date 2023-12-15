import styled, {keyframes} from 'styled-components';
import { NavLink } from 'react-router-dom';
import {bodyColors, device} from "./global.jsx";
import {rotate} from "./animations.jsx";


const openedSidebarBodyPadding = "20px 25px";
const closedSidebarBodyPadding = "20px 10px";

const openedSidebarBodyJustify = "space-between";
const openedSidebarBodyLinkJustify = "start";
const closedSidebarBodyJustify = "center";

const openedTextAlign = 'left';
const closedTextAlign = 'center';

const openedSidebarMinWidth = '270px';
const closedSidebarMinWidth = '0px';

const displayNone = 'none';
const displayFlex = 'flex';
const displayBlock = 'block';

const SidebarStyled = styled.div`
    overflow-y:auto;
    position: ${props => props.open ? 'fixed' : 'sticky'}; 
    z-index:2;
    top:0;
    left:0;
    width:100vw;
    height:${props => props.open ? '100vh' : 'auto'};
    background-color:${bodyColors.mainBlockBackgroundColor};
    color: ${bodyColors.mainTextColor};
    @media ${device.laptop} { 
        width: auto;
        height: 100vh;
        position: sticky;  
    }
`;

const SideBarBody = styled.div`  
    transition: all 0.15s ease-out;
    min-width: ${props => props.open ? openedSidebarMinWidth : closedSidebarMinWidth};
    padding:  ${openedSidebarBodyPadding};
    @media ${device.laptop} { 
        padding:  ${props => props.open ? openedSidebarBodyPadding : closedSidebarBodyPadding};
    }
`;

const SideBarHeader = styled.div`

    display:flex;
    justify-content: ${openedSidebarBodyJustify};
    align-items:center;
    > h3{
        font-size:24px;
        font-weight:400;
    }
    > button {
        background-color: transparent;
        color: ${bodyColors.mainTextColor};
        border:none;
        border-radius:50px;
        font-size: 24px;
        display:flex;
        align-items:center;
        cursor:pointer;
        padding:10px;
        transition: 0.2s ease-in-out;
        &:hover {
            background-color: rgba(255, 255, 255, 0.1);
          
        }
    }
    @media ${device.laptop} { 
        justify-content:${props => props.open ? openedSidebarBodyJustify : closedSidebarBodyJustify};
        margin-bottom:20px;
        > h3 {             
            display: ${props => props.open ? displayBlock : displayNone};
        }
    }
    
`

const SideBarProfileWrapper = styled.div`
    display: ${props => props.open ? displayBlock : displayNone};
    margin: 20px 0;
    > div {
        display:flex;
        align-items:center;
        justify-content:center;
        margin-bottom: 20px;
        > img{
            border-radius:50%;
            width:100px;
            height:100px;
        }
    }
    
    > h2 {
        text-align:center;
        font-size: 32px;
        font-weight: 700;
    }
    > h5 {
        text-align:center;
        font-size: 16px;
        font-weight: 400;
        color: ${bodyColors.semiTextColor};
    }

`


const SideBarLink = styled(NavLink)`
    display:flex;
    justify-content: ${closedSidebarBodyJustify};
    align-items: center;
    color: ${bodyColors.mainTextColor};
    font-size: 1.2em;
    text-decoration:none;
    font-weight:400;
    transition: 0.2s ease-in-out;
    &.active{
        color:${bodyColors.activeLinkColor};
    }
    &:hover{ 
        > span{
            > svg{
                animation: ${rotate} 1s linear infinite;
            }
        }      
    }
    > span {
        display: ${props => props.open ? displayBlock : displayNone};
        
        align-items:center;
        justify-content: ${closedSidebarBodyJustify};
        padding: 15px 5px;
    }
    > h5 {
        margin-left: 10px;
        display: ${props => props.open ? displayBlock : displayNone};
    }
    @media ${device.laptop} { 
        justify-content: ${props => props.open ? openedSidebarBodyLinkJustify : closedSidebarBodyJustify};
        > span {
            display:${displayFlex};
        }
    }
`

const SideBarLinka = styled.a`
    display:flex;
    justify-content: ${closedSidebarBodyJustify};
    align-items: center;
    color: ${bodyColors.mainTextColor};
    font-size: 1.2em;
    text-decoration:none;
    font-weight:400;
    transition: 0.2s ease-in-out;
    &.active{
        color:${bodyColors.activeLinkColor};
    }
    &:hover{ 
        > span{
            > svg{
                animation: ${rotate} 1s linear infinite;
            }
        }      
    }
    > span {
        display: ${props => props.open ? displayBlock : displayNone};
        
        align-items:center;
        justify-content: ${closedSidebarBodyJustify};
        padding: 15px 5px;
    }
    > h5 {
        margin-left: 10px;
        display: ${props => props.open ? displayBlock : displayNone};
    }
    @media ${device.laptop} { 
        justify-content: ${props => props.open ? openedSidebarBodyLinkJustify : closedSidebarBodyJustify};
        > span {
            display:${displayFlex};
        }
    }
`

const SideBarHeader5 = styled.h5`
    margin: 10px 0;
    color:gray;
    text-align: ${closedTextAlign};
    display: ${props => props.open ? displayBlock : displayNone};
    @media ${device.laptop} {       
        display:${displayBlock};
    }
`

export {SidebarStyled, SideBarBody, SideBarHeader, SideBarLink, SideBarProfileWrapper, SideBarHeader5 ,SideBarLinka};