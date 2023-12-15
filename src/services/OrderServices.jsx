import axios from "axios";
import Cookies from "universal-cookie";
import {server_url} from "./conf.jsx";

class OrderServices {
    cookies = new Cookies();

    getHeaders() {
        const token = this.cookies.get("token");
        return {
            Authorization: `Token ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
        };
    }


    async createOrder(product_id, order_status) {
        const headers = this.getHeaders()
        const url = `${server_url}/api/orders/`
        return await axios.post(url, {
            product_id: product_id,
            order_status: order_status
        }, {headers})
    }

    async getMyOrders() {
        const headers = this.getHeaders()
        const url = `${server_url}/api/orders/`
        return await axios.get(url, {headers})
    }

    async getAdminOrders(title) {
        console.log(title)
        const headers = this.getHeaders()
        if (title) {
            const url = `${server_url}/api/adminorders/?title=${title}`
            return await axios.get(url, {headers})
        } else {
            const url = `${server_url}/api/adminorders/`
            return await axios.get(url, {headers})
        }
    }

    async updateAdminOrder(id, orderStatus) {
        const headers = this.getHeaders()
        const url = `${server_url}/api/adminorders/update/`
        return await axios.put(url, {'id': id, 'order_status': orderStatus}, {headers})
    }

}

export default new OrderServices();
