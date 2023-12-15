import {useEffect, useContext} from "react";
import UserServices from "../../services/UserServices.jsx";
import Cookies from "universal-cookie";
import {AuthContext} from "../contexts/AuthContext.jsx";
import {useNavigate } from "react-router-dom"

export default function LogoutPage() {
    const {setAuth, setAdmin} = useContext(AuthContext);
    const navigate = useNavigate()
    const cookies = new Cookies()
    useEffect(() => {
        if (cookies.get("token")) {
            UserServices.logoutUser(setAuth, setAdmin, navigate )
        }
    });

    return <></>
}