import axios from "axios";
import FormData from "form-data";

export const GetUser = (userId) => {
  const data = "";

  const config = {
    method: "get",
    url: `https://logosabroad.com/api/public//api/user/${userId}`,
    headers: {},
    data: data
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
