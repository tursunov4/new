import Avatar from "../../assets/user.png";
import {SideBarProfileWrapper} from "../../styles/SidebarStyled.jsx";
import { useEffect, useState } from "react";
import http from "../../axios";
import Person from "../../assets/products/user.jpeg"

export function SideBarProfile(props) {
    const [data , setData] = useState({})
    const [limit , setLimit] = useState("")
    const getLimit =()=>{
        http.get("/profile/user-me/").then((res)=>{
          setLimit(res?.data?.limit?.limit)
        }).catch((err)=>{
          console.log(err)
        })
       }
    const getData =()=>{
        http.get("/profile/user-me/").then((res)=>{
            setData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getData()
        getLimit()
    },[])
    return (
        <>
            <SideBarProfileWrapper open={props.open}>
                <div>
                    <img src={Person} alt=""/>
                </div>
                <h2>{data?.username}</h2>
                <h5>Limit: {limit}</h5>
            </SideBarProfileWrapper>
        </>
    )
}
