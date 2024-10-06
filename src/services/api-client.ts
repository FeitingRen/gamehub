import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "517b647dfb2c4fc9922a9c04e2b3ac0d",
  },
});
