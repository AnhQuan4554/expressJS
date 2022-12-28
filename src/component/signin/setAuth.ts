import axios from "axios";
const setAuthToken = (token: String) => {
  if (token) {
    const x = token.toString().slice(1, token.length - 1);
    axios.defaults.headers.common["Authorization"] = "Beaer " + x;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};
export default setAuthToken;
