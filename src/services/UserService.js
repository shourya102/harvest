import axios from "axios";
import TokenService from "./TokenService.js";

const url = "http://localhost:8080/api/auth";
const url1 = "http://localhost:8080/user";
const url2 = "http://localhost:8080/wallet";

class UserService {
  register(data) {
    return axios.post(url + "/signup", data);
  }

  login(data) {
    return axios.post(url + "/signin", data);
  }

  checkValidUsername(username) {
    return axios.post(url + "/validate-username", username);
  }

  checkValidEmail(email) {
    return axios.post(url + "/validate-email", email);
  }

  enableFarmerAccount() {
    const config = {
      headers: {
        Authorization: "Bearer " + TokenService.getLocalAccessToken(),
      },
    };
    return axios.post(url1 + "/usertofarmer", {}, config);
  }

  logout() {
    let user_id;
    if (!!localStorage.getItem("user")) {
      user_id = JSON.parse(localStorage.getItem("user")).id;
      localStorage.removeItem("user");
      localStorage.removeItem("profile");
    }
    if (user_id) console.log(user_id);
    return axios.post(url + "/signout/" + user_id);
  }

  getYourListings() {
    const config = {
      headers: {
        Authorization: "Bearer " + TokenService.getLocalAccessToken(),
      },
    };
    return axios.get(url1 + "/getproductoffarmer", config);
  }

  getProfile() {
    const config = {
      headers: {
        Authorization: "Bearer " + TokenService.getLocalAccessToken(),
      },
    };
    return axios.get(url1 + "/getuser", config);
  }

  getMoney() {
    const config = {
      headers: {
        Authorization: "Bearer " + TokenService.getLocalAccessToken(),
      },
    };
    return axios.get(url2 + "/getbalance", config);
  }

  updateMoney(money) {
    const config = {
      headers: {
        Authorization: "Bearer " + TokenService.getLocalAccessToken(),
      },
      params: {
        money: money,
      },
    };
    return axios.post(url2 + "/updatemoney", {}, config);
  }

  updateProfile(data) {
    const config = {
      headers: {
        Authorization: "Bearer " + TokenService.getLocalAccessToken(),
      },
    };
    return axios.post(url1 + "/updateprofiledata", data, config);
  }

  updateProfileImage(data) {
    const config = {
      headers: {
        Authorization: "Bearer " + TokenService.getLocalAccessToken(),
      },
    };
    return axios.post(url1 + "/updateprofilepic", data, config);
  }
}

export default new UserService();
