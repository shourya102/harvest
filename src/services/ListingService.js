import axios from "axios";
import TokenService from "./TokenService.js";

const url = "http://localhost:8080/product";
const url1 = "http://localhost:8080/bids";

class ListingService {
  postListing(data) {
    console.log(data);
    const config = {
      headers: {
        Authorization: "Bearer " + TokenService.getLocalAccessToken(),
      },
    };
    return axios.post(url + "/save", data, config);
  }

  getListing(data) {
    const config = {
      params: {
        page: data.page,
        pageSize: data.pageSize,
      },
    };
    return axios.get(url + `/products`, config);
  }

  getSingleListing(id) {
    return axios.get(url + `/products/${id}`);
  }

  postBid(price, id) {
    const config = {
      headers: {
        Authorization: "Bearer " + TokenService.getLocalAccessToken(),
      },
      params: {
        price: price,
        product_id: id,
      },
    };
    return axios.post(url1 + "/createbids", {}, config);
  }

  deleteListing(id) {
    const config = {
      headers: {
        Authorization: "Bearer " + TokenService.getLocalAccessToken(),
      },
      params: {
        productId: id
      }
    };
    return axios.get(url + "/delete-product",config)
  }

  getTopBid(id) {
    return axios.get(url1 + "/topbid/" + id);
  }
}

export default new ListingService();
