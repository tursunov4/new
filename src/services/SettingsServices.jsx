import axios from "axios";
import Cookies from "universal-cookie";
import {server_url} from "./conf.jsx";

class SettingsServices {
    cookies = new Cookies();

    getHeaders() {
        const token = this.cookies.get("token");
        return {
            Authorization: `Token ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
        };
    }

    async getSettings() {
        const headers = this.getHeaders()
        const url = `${server_url}/api/settings/1/`
        return await axios.get(url, {headers})
    }

    async updateSettings({globalDiscount, dateAddLimit}) {
        const headers = this.getHeaders()
        const url = `${server_url}/api/settings/1/`
        return await axios.put(url, {
            global_discount: globalDiscount,
            date_add_limit: dateAddLimit
        }, {headers})
    }

    async updateUserLimit(updatedData) {
        //console.log(updatedData)
        const headers = this.getHeaders()
        const url = `${server_url}/api/adminusers/update/`
        return await axios.put(url, updatedData, {headers})
    }

    async getOrdersCount() {
        const headers = this.getHeaders()
        const url = `${server_url}/api/adminorders/`
        return await axios.post(url, {}, {headers})
    }

}

export default new SettingsServices();