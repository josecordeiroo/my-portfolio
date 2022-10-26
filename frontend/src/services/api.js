import axios from "axios";
const Api = axios.create({ baseURL: "https://josecordeiroo-porfolio.herokuapp.com/api" });
export default Api;

//https://josecordeiroo-porfolio.herokuapp.com/api
//http://localhost:3080/api
//http://192.168.15.65:3000/api