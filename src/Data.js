import axios from "axios";

export const getDataApi = async (url, token) => {
  const res = await axios.get(`/api/${url}`, {
    headers: { Authorization: token }
  });
  return res;
};

export const postDataApi = async (url, post, token) => {
  const res = await axios.post(`https://api.2geda.net/api/${url}`, post, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res;
};

export const putDataApi = async (url, post, token) => {
  const res = await axios.put(`https://api.2geda.net/api/${url}`, post, {
    headers: { Authorization: token }
  });
  return res;
};

export const patchDataApi = async (url, post, token) => {
  const res = await axios.patch(`https://api.2geda.net/api/${url}`, post, {
    headers: { Authorization: token }
  });
  return res;
};

export const resendToken = async (url, token) => {
  const res = await axios.post(`https://api.2geda.net/api/${url}`, {
    headers: { Authorization: token }
  });
  return res;
};

export const deleteDataApi = async (url, token) => {
  const res = await axios.delete(`https://api.2geda.net/api/${url}`, {
    headers: { Authorization: token }
  });
  return res;
};

export const signupValidate = ({ email }) => {
  const err = {};

  if (!email) {
    err.email = "Please add your email.";
  } else if (!validateEmail(email)) {
    err.email = "Please add a valid email.";
  }

  function validateEmail(email) {
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  return {
    errMsg: err,
    errLength: Object.keys(err).length
  };
};

export function validateEmail(email) {
  // eslint-disable-next-line
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
