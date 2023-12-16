import { useEffect, useState } from "react";
import http from "../axios";
import Avatar from "../assets/products/person.jfif"

const UserProfile = () => {
   const [data ,setData] = useState({})
   const getData =()=>{
    http.get("/profile/user-me/").then((res)=>{
      setData(res.data)
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
   }
   useEffect(()=>{
    getData()
   }, [])
  return (
    <div>
      <div className="profile__wrapper">
        <img className="profile__img" width={250} height={250} src={Avatar} alt="" />
        <div className="profile-text">
           <h3>First Name: {data?.first_name}</h3>
           <h3>Last Name: {data?.last_name}</h3>
           <h3>Username: {data?.username}</h3>
          <h3>Email: {data?.email}</h3>
          <h4>Limit: {data?.limit?.limit} </h4>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
