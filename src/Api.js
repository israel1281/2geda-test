import axios from "axios";
import FormData from "form-data";

export const Register = (email) => {
  const data = new FormData();
  data.append("email", email);

  const config = {
    method: "post",
    url: "https://api.2geda.net/api/registerUser",
    headers: {
      ...data.getHeaders()
    },
    data: data
  };

  axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const Verify = (email, token) => {
  const data = JSON.stringify({
    email,
    token
  });

  var config = {
    method: "patch",
    url: "https://api.2geda.net/api/verify",
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

export const resendVerifyCode = (email) => {
  var config = {
    method: "patch",
    url: `https://logosabroad.com/api/public//api/resendToken?email=${email}`,
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

export const registerUserDetails = (
  email,
  password,
  first_name,
  surname,
  username
) => {
  const data = JSON.stringify({
    email: email,
    password: password,
    first_name: first_name,
    surname: surname,
    username: username
  });

  const config = {
    method: "patch",
    url: "https://api.2geda.net/api/registerProfile",
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

export const ResetPassword = (email) => {
  const data = new FormData();
  data.append("email", email);

  var config = {
    method: "post",
    url: "https://api.2geda.net/api/password/email",
    headers: {
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

export const updatePasswordReset = (email, token, password) => {
  var data = new FormData();
  data.append("email", email);
  data.append("token", token);
  data.append("password", password);

  var config = {
    method: "post",
    url: "https://api.2geda.net/api/updatePasswordRow",
    headers: {
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
