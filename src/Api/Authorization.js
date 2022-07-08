import axios from "axios";
import FormData from "form-data";
import { notification } from "antd";
import { validateEmail } from "../Data";

const Erroralert = (message) => {
  notification.error({
    message: message,
    placement: "topLeft",
    duration: 4
  });
};

const Successalert = (message) => {
  notification.success({
    message: message,
    placement: "topLeft",
    duration: 4
  });
};

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

export const Verify = (email, otp) => {
  const data = JSON.stringify({
    email,
    otp
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
    url: `https://api.2geda.net//api/resendToken?email=${email}`,
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

export const ResetPassword = (email, setLoading) => {
  const data = new FormData();
  data.append("email", email);

  if (!validateEmail(email)) {
    Erroralert("Your email is required");
    return;
  }

  var config = {
    method: "post",
    url: "https://api.2geda.net/api/password/email",
    headers: {},
    data: data
  };
  setLoading(true);
  axios(config)
    .then(function (response) {
      setLoading(false);
      console.log(JSON.stringify(response.data));
      if (response.data.status === "success") {
        Successalert(response.data.message);
        setLoading(false);
      } else if (response.data.status === "error") {
        Erroralert(response.data.message);
        setLoading(false);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const updatePasswordReset = (email, otp, password) => {
  var data = new FormData();
  data.append("email", email);
  data.append("token", otp);
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

export const Login = (email, password, setLoading, navigate, validateForm) => {
  setLoading(true);
  validateForm();
  var data = JSON.stringify({
    email: email,
    password: password
  });

  var config = {
    method: "post",
    url: "https://api.2geda.net//api/login",
    headers: {
      "Content-Type": "application/json"
    },
    data: data
  };
  axios(config)
    .then(function (response) {
      setLoading(false);
      console.log(JSON.stringify(response.data));
      sessionStorage.setItem("access_token", response.data.access_token);
      sessionStorage.setItem(
        "currentUser",
        JSON.stringify(response.data.user.id)
      );
      Successalert(response.data.message);
      navigate("/home");
    })
    .catch(function (error) {
      console.log(error);
      Erroralert(error);
    });
};

export const Logout = (access_token) => {
  var config = {
    method: "post",
    url: "https://api.2geda.net//api/logout",
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
