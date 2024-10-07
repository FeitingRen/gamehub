import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b8bf65b894ca4ee284cca2bd1a5d326d",
  },
});

export { CanceledError };
