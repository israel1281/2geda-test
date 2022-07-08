import axios from "axios";
import FormData from "form-data";
import fs from "fs.js";

export const Createpost = (image, video, message_post, access_token) => {
  const data = new FormData();
  data.append("message_post", message_post);
  data.append("image", fs.createReadStream(image));
  data.append("video[]", fs.createReadStream(video));

  const config = {
    method: "post",
    url: "https://logosabroad.com/api/public//api/post",
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

export const ShowPost = (postId, access_token) => {
  const data = new FormData();

  const config = {
    method: "get",
    url: `https://logosabroad.com/api/public//api/post/${postId}`,
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

export const EditPostText = (postId, message_post, access_token) => {
  const data = JSON.stringify({
    message_post: message_post
  });

  const config = {
    method: "patch",
    url: `https://logosabroad.com/api/public//api/post/${postId}`,
    headers: {
      Authorization: "Bearer " + access_token,
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

export const LikePost = (postId, access_token) => {
  const data = "";

  const config = {
    method: "post",
    url: `https://logosabroad.com/api/public//api/like/${postId}`,
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

export const DislikePost = (postId, access_token, email) => {
  var data = JSON.stringify({
    email: email
  });

  const config = {
    method: "post",
    url: `https://logosabroad.com/api/public//api/dislike/${postId}`,
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

export const CommentOnPost = (comments, postId, access_token) => {
  var data = JSON.stringify({
    comments: comments
  });

  var config = {
    method: "post",
    url: `https://logosabroad.com/api/public//api/comment/${postId}`,
    headers: {
      Authorization: "Bearer " + access_token,
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

export const ShowComment = (commentId) => {
  const data = new FormData();

  const config = {
    method: "get",
    url: `https://logosabroad.com/api/public//api/comment/${commentId}`,
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

export const EditComment = (comments, commentId, access_token) => {
  var data = JSON.stringify({
    comments: comments
  });

  var config = {
    method: "patch",
    url: `https://logosabroad.com/api/public//api/comment/${commentId}`,
    headers: {
      Authorization: "Bearer " + access_token,
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

export const DeleteComment = (commentId, access_token) => {
  var data = new FormData();

  var config = {
    method: "delete",
    url: `https://logosabroad.com/api/public//api/comment/${commentId}`,
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

export const DeletePost = (postId, access_token) => {
  var data = new FormData();

  var config = {
    method: "delete",
    url: `https://logosabroad.com/api/public//api/post/${postId}`,
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

export const GetTotalComments = (postId) => {
  var config = {
    method: "get",
    url: `https://logosabroad.com/api/public//api/commentstotal/${postId}`,
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

export const GetTotalLikes = (postId) => {
  var config = {
    method: "get",
    url: `https://logosabroad.com/api/public//api/likestotal/${postId}`,
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
