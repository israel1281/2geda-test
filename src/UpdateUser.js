import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { patchDataApi } from "./Data";
import { notification } from "antd";
import axios from "axios";
export const UpdateUser = ({}) => {
  const initialState = {
    email: localStorage.getItem("email"),
    password: "",
    first_name: "",
    surname: "",
    username: ""
  };

  const [file, setFile] = React.useState(null);
  const [userData, setUserData] = React.useState(initialState);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const navigate = useNavigate();

  const alert = (type, message) => {
    notification[type]({
      message: message,
      placement: "topLeft",
      duration: 2
    });
  };

  const homeNavigate = () => {
    navigate("/");
  };

  const { email, password, first_name, surname, username } = userData;

  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    axios
      .patch("https://api.2geda.net/api/registerProfile", userData)
      .then((res) => {
        setLoading(false);
        setSuccess(res.data.msg);
        notification.success({
          message: "Profile Updated, Please Login to Continue",
          placement: "topLeft",
          duration: 10
        });
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.msg);
        alert("error", err.response.data.msg);
      });
  };

  const onChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const fileInput = React.useRef(null);

  return (
    <ProfileDetailsRoot>
      <FlexRow>
        <Back
          onClick={() => {
            navigate("/verify");
          }}
          src={"https://file.rendit.io/n/iBtFuxHzfMnvC3VorHnN.svg"}
        />
        <GEDA src={"https://file.rendit.io/n/NP4n86zq5OcLLQqQ04ln.png"} />
      </FlexRow>
      <Element3>
        <Text2>Profile details</Text2>
        <InputField
          type="email"
          name="email"
          value={email}
          onChange={handleInput}
          placeholder="email"
        />
        <InputField
          top="40%"
          type="text"
          name=" password"
          value={password}
          onChange={handleInput}
          placeholder=" password"
        />
        <InputField
          top="80%"
          type="text"
          name="username"
          value={username}
          onChange={handleInput}
          placeholder="username"
        />
        <InputField
          top="120%"
          type="text"
          name="first_name"
          value={first_name}
          onChange={handleInput}
          placeholder="first_name"
        />
        <InputField
          top="160%"
          type="text"
          name="surname"
          value={surname}
          onChange={handleInput}
          placeholder="surname"
        />
      </Element3>
      <PurpleHeartText onClick={handleSubmit}>Create account</PurpleHeartText>
    </ProfileDetailsRoot>
  );
};
const ProfileDetailsRoot = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  position: fixed;
  align-items: center;
  padding: 15px 18px 15px 19px;
`;
const FlexRow = styled.div`
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 221px;
  align-items: flex-start;
  padding: 0px 7px;
  margin: 0px 0px 25px 0px;
`;
const Back = styled.img`
  width: 47px;
  height: 50px;
`;
const GEDA = styled.img`
  width: 49px;
  height: 50px;
  align-self: flex-end;
`;
const Element3 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 155px;
  position: relative;
  min-width: 338px;
  margin: 0px 0px 10px 0px;
`;
const Text2 = styled.div`
  width: 241px;
  height: 136px;
  font-size: 20px;
  font-family: Ubuntu;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  position: absolute;
  left: 13px;
`;
const PurpleHeartText = styled.div`
  display: flex;
  font-size: 17px;
  font-family: Ubuntu;
  font-weight: 300;
  color: #ffffff;
  align-self: flex-start;
  width: 98%;
  height: 30px;
  background-color: #4e0ca2;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 18px 0px 20px 0px;
  margin: 70% 0px 0px 0px;
`;
const InputField = styled.input`
  width: 90%;
  height: 53px;
  position: absolute;
  left: 13px;
  top: ${(props) => props.top};
  border-radius: 10px;
`;
