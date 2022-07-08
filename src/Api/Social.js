import axios from "axios";
import FormData from "form-data";

export const Follow = (followed_email, access_token) => {
  var data = "";

  var config = {
    method: "post",
    url: `http://api.2geda.net//api/follow?followed=${followed_email}`,
    headers: {
      Authorization: "Bearer " + access_token
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

export const ShowFollowers = (email) => {
  var data = JSON.stringify({
    email: email
  });

  var config = {
    method: "post",
    url: "http://api.2geda.net//api/followers",
    headers: {
      "Content-Type": "application/json"
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

export const ShowFollowings = (email) => {
  var data = JSON.stringify({
    email: email
  });

  var config = {
    method: "post",
    url: "http://api.2geda.net//api/followings",
    headers: {
      "Content-Type": "application/json"
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

export const IsFollower = (email, followed) => {
  var data = JSON.stringify({
    email: email,
    followed: followed
  });

  var config = {
    method: "post",
    url: "http://api.2geda.net//api/isfollower",
    headers: {
      "Content-Type": "application/json"
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

export const ShowUserSavedPost = (access_token) => {
  var config = {
    method: "get",
    url: "http://api.2geda.net//api/saveposts",
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
