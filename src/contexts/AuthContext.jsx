import {createContext, useEffect, useState} from "react";
import Cookies from "universal-cookie";
import UserServices from "../services/UserServices";

export const AuthContext = createContext({
    isAuthenticated: false,
    setAuth: () => {
    },
    isAdmin: false,
    setAdmin: () => {

    }
});

export const AuthContextProvider = ({children}) => {
    const [isAuthenticated, setAuth] = useState(false);
    const [isAdmin, setAdmin] = useState(false);
    const [refresh2 ,setRefresh2] = useState(false)
    const cookies = new Cookies()
    
    useEffect(() => {
        if (cookies.get("token")) {
            UserServices.identifyUser(setAuth, setAdmin)
        }
    });

    return (
        <AuthContext.Provider value={{isAuthenticated, setAuth, isAdmin, setAdmin , refresh2 , setRefresh2}}>
            {children}
        </AuthContext.Provider>
    );
};
