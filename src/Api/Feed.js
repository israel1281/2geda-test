import axios from "axios";
import FormData from "form-data";
import { notification } from "antd";

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

export const Createpost = (
  images,
  videos,
  message_post,
  access_token,
  setLoading,
  navigate
) => {
  setLoading(true);
  const data = new FormData();
  data.append("message_post", message_post);
  for (let i = 0; i < images.length; i++) {
    data.append("images[]", images[i]);
  }
  for (let i = 0; i < videos.length; i++) {
    data.append("videos[]", videos[i]);
  }

  const config = {
    method: "post",
    url: "https://api.2geda.net//api/post",
    headers: {
      Authorization: "Bearer " + access_token
    },
    data: data
  };

  axios(config).then(function (response) {
    setLoading(false);
    console.log(JSON.stringify(response.data));
    if (response.data.status === "error") {
      Erroralert(response.data.message);
    } else if (response.data.status === "success") {
      Successalert(response.data.message);
    }
  });
  navigate("/home").catch(function (error) {
    console.log(error);
  });
};

export const ShowPost = (postId, access_token, setUserPost) => {
  const data = new FormData();

  const config = {
    method: "get",
    url: `https://api.2geda.net//api/post/${postId}`,
    headers: {
      Authorization: "Bearer " + access_token
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setUserPost(response.data);
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
    url: `https://api.2geda.net//api/post/${postId}`,
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
    url: `https://api.2geda.net//api/like/${postId}`,
    headers: {
      Authorization: "Bearer " + access_token
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      Successalert(response.data.message);
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
    url: `https://api.2geda.net/api/dislike/${postId}`,
    headers: {
      Authorization: "Bearer " + access_token
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      Successalert(response.data.message);
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
    url: `https://api.2geda.net//api/comment/${postId}`,
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
    url: `https://api.2geda.net//api/comment/${commentId}`,
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
    url: `https://api.2geda.net//api/comment/${commentId}`,
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
    url: `https://api.2geda.net//api/comment/${commentId}`,
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
    url: `https://api.2geda.net//api/post/${postId}`,
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
    url: `https://api.2geda.net//api/commentstotal/${postId}`,
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
    url: `https://api.2geda.net//api/likestotal/${postId}`,
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

export const Repost = (message, postId, access_token) => {
  var data = JSON.stringify({
    message: message
  });

  var config = {
    method: "post",
    url: `http://api.2geda.net//api/repost/${postId}`,
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

export const SavePost = (postId, access_token) => {
  var config = {
    method: "post",
    url: `http://api.2geda.net//api/savepost/${postId}`,
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
