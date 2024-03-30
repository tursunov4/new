import axios from "axios";
import { server_url } from "./services/conf";

const http = axios.create({
  baseURL: server_url,
});
http.interceptors.request.use(
  (config) => {
    let token = sessionStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }
    // config.headers["Accept"] = "application/json";

    // 'resolve.fallback: { "http": require.resolve("stream-http") }'
    // resolve.fallback:{ "http": false }

    //   'resolve.fallback: { "http": require.resolve("stream-http") }'
    // resolve.fallback: { "http": false }
    // config.headers["Access-Control-Allow-Origin"] = "*";
    // config.headers["Content-Type"] = "multipart/form-data";
    // config.headers['Content-Type'] = "application/json"
    return config;
  },
  (error) => Promise.reject(error)
);

export default http;
