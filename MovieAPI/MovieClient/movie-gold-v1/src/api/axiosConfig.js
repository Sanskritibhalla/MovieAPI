import axios from "axios";
const cors = require("cors");

export default axios.create({
  baseURL: "http://localhost:8080",
});
