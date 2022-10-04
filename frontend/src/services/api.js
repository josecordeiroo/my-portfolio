import axios from "axios";
const Api = axios.create({ baseURL: "http://localhost:3080/api" });
export default Api;
