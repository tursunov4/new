import Avatar from "../../assets/user.png";
import {SideBarProfileWrapper} from "../../styles/SidebarStyled.jsx";
import { useEffect, useState } from "react";
import http from "../../axios";


export function SideBarProfile(props) {
    const [data , setData] = useState({})
    const getData =()=>{
        http.get("/profile/user-me/").then((res)=>{
            setData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getData()
    },[])
    return (
        <>
            <SideBarProfileWrapper open={props.open}>
                <div>
                    <img src={Avatar} alt=""/>
                </div>
                <h2>{data?.username}</h2>
                <h5>Limit: </h5>
            </SideBarProfileWrapper>
        </>
    )
}
