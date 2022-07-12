import axios from "axios";
import FormData from "form-data";

export const GetUser = (userId, setUserInfo) => {
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
      setUserInfo(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const UpdateUser = (
  first_name,
  surname,
  username,
  address,
  profession,
  city,
  bio,
  dob,
  userId,
  access_token
) => {
  var data = new FormData();
  data.append("first_name", first_name);
  data.append("surname", surname);
  data.append("username", username);
  data.append("address", address);
  data.append("profession", profession);
  data.append("city", city);
  data.append("bio", bio);
  data.append("dob", dob);

  var config = {
    method: "post",
    url: `https://api.2geda.net//api/user/${userId}`,
    headers: {
      Authorization: "Bearer " + access_token,
      ...data.getHeaders()
    },
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

export const UpdateUserImage = (profile_pic, userId, access_token) => {
  var data = new FormData();
  data.append("profile_pic", fs.createReadStream(profile_pic));

  var config = {
    method: "post",
    url: `https://api.2geda.net//api/userImage/${userId}`,
    headers: {
      Authorization: "Bearer " + access_token,
      ...data.getHeaders()
    },
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

export const DeleteUserImage = (userId, access_token) => {
  var data = new FormData();

  var config = {
    method: "delete",
    url: `https://api.2geda.net//api/userImage/${userId}`,
    headers: {
      Authorization: "Bearer " + access_token,
      ...data.getHeaders()
    },
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

export const DeleteUser = (userId, access_token) => {
  var config = {
    method: "delete",
    url: `https://api.2geda.net//api/user/${userId}`,
    headers: {
      Authorization: "Bearer " + access_token
    }
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const GetFeed = (userId) => {
  var config = {
    method: "get",
    url: `https://api.2geda.net//api/feed/${userId}`,
    headers: {}
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const GetAllUsers = () => {
  var config = {
    method: "get",
    url: "https://api.2geda.net//api/users",
    headers: {}
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const ShowAllUserRepost = (access_token) => {
  var config = {
    method: "get",
    url: "http://api.2geda.net//api/reposts",
    headers: {
      Authorization: "Bearer " + access_token
    }
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
