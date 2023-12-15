import axios from "axios";
import Cookies from "universal-cookie";
import {server_url} from "./conf.jsx";

class ProductServices {
    cookies = new Cookies();

    getHeaders() {
        const token = this.cookies.get("token");
        return {
            Authorization: `Token ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
        };
    }

    async getProducts(title, page = 1) {
        if (title) {
            return await axios.get(`${server_url}/api/products/?title=${title}&page=${page}`)
        }
        return await axios.get(`${server_url}/api/products/?page=${page}`)
    }

    async getAdminProducts(title, page = 1) {
        const headers = this.getHeaders()
        if (title) {
            return await axios.get(`${server_url}/api/adminproducts/?title=${title}&page=${page}`, {headers})
        }
        return await axios.get(`${server_url}/api/adminproducts/?page=${page}`, {headers})
    }

    async updateProduct(updatedProduct) {
        console.log(updatedProduct)
        const headers = this.getHeaders()
        const url = `${server_url}/api/adminproducts/update/`
        return await axios.put(url, updatedProduct, {headers})
    }


}

export default new ProductServices();
