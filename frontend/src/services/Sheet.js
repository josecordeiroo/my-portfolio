import axios from "axios";

const api = axios.create({
  baseURL: "https://sheet.best/api/sheets/0d7c27dd-97da-4044-b473-c033b5a640cc",
});

export default api;
