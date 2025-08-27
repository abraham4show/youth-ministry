import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // change later if deployed
});

export default API;
