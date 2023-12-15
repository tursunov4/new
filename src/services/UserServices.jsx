import axios from "axios";
import Cookies from "universal-cookie";
import {server_url} from "./conf.jsx";

class UserServices {
    cookies = new Cookies();

    getHeaders() {
        const token = this.cookies.get("token");
        return {
            Authorization: `Token ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
        };
    }

    async authUser({username, password}, setAuth, setAdmin, navigate) {
        const url = `${server_url}/api/auth/token/login`;
        const postData = {
            username: username,
            password: password,
        };
        this.cookies.set("token", "dfasdf");
        await axios.post(url, postData).then(async (res) => {
            this.cookies.set("token", res.data.auth_token);
            await this.identifyUser(setAuth, setAdmin);
            await navigate("/");
        });
    }

    async identifyUser(setAuth, setAdmin) {
        const url = `${server_url}/api/auth/me`;
        const headers = this.getHeaders();
        await axios.get(url, {headers}).then((res) => {
            if (res.data.is_staff) {
                setAdmin(true);
            }
            setAuth(true);
            this.cookies.set("first_name", res.data.first_name);
            this.cookies.set("last_name", res.data.last_name);
            this.cookies.set("amount_of_deals", res.data.amount_of_deals);
        });
    }

    async getAllUsers(title) {
        const headers = this.getHeaders()
        if (title) {
            return await axios.get(`${server_url}/api/users/?title=${title}`, {headers})
        } else {
            return await axios.get(`${server_url}/api/users/`, {headers})
        }

    }

    getUserInfo() {
        const firstName = this.cookies.get("first_name");
        const lastName = this.cookies.get("last_name");
        const amount_of_deals = this.cookies.get("amount_of_deals");
        return {firstName, lastName, amount_of_deals};
    }

    logoutUser(setAuth, setAdmin, navigate) {
        this.cookies.remove("token", {path: "/"});
        this.cookies.remove("first_name", {path: "/"});
        this.cookies.remove("last_name", {path: "/"});
        setAuth(false);
        setAdmin(false);
        navigate("/login");
    }
}

export default new UserServices();
