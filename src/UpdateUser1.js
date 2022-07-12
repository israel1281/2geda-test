import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { UpdateUser } from "./Api/User";
import { patchDataApi } from "./Data";
import { notification } from "antd";
import axios from "axios";

export const UpdateUser1 = ({}) => {
  const initialState = {
    first_name: "",
    surname: "",
    username: "",
    address: "",
    profession: "",
    city: "",
    bio: "",
    dob: ""
  };

  const [userData, setUserData] = React.useState(initialState);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const navigate = useNavigate();

  const userId = sessionStorage.getItem("currentUser");
  const access_token = sessionStorage.getItem("access_token");

  const alert = (type, message) => {
    notification[type]({
      message: message,
      placement: "topLeft",
      duration: 2
    });
  };

  const {
    first_name,
    surname,
    username,
    address,
    profession,
    city,
    bio,
    dob
  } = userData;

  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <ProfileDetailsRoot>
      <FlexRow>
        <Back
          onClick={() => {
            navigate("/profile");
          }}
          src={"https://file.rendit.io/n/iBtFuxHzfMnvC3VorHnN.svg"}
        />
        <GEDA src={"https://file.rendit.io/n/NP4n86zq5OcLLQqQ04ln.png"} />
      </FlexRow>
      <Element3>
        <Text2>Edit Profile details</Text2>
        <InputField
          type="text"
          name="first_name"
          value={first_name}
          onChange={handleInput}
          placeholder="first_name"
          top="5%"
        />
        <InputField
          type="text"
          name="surname"
          value={surname}
          onChange={handleInput}
          placeholder="surname"
          top="30%"
        />
        <InputField
          type="text"
          name="username"
          value={username}
          onChange={handleInput}
          placeholder="username"
          top="40%"
        />
        <InputField
          type="text"
          name="address"
          value={address}
          onChange={handleInput}
          placeholder="address"
          top="50%"
        />
        <InputField
          type="text"
          name="profession"
          value={profession}
          onChange={handleInput}
          placeholder="profession"
          top="60%"
        />
        <InputField
          type="text"
          name="city"
          value={city}
          onChange={city}
          placeholder="city"
          top="70%"
        />
        <InputField
          type="text"
          name="bio"
          value={bio}
          onChange={bio}
          placeholder="bio"
          top="80%"
        />
        <InputField
          type="date"
          name="dob"
          value={dob}
          onChange={handleInput}
          placeholder="dob"
          top="90%"
        />
      </Element3>
      <PurpleHeartText
        onClick={() => {
          UpdateUser(
            first_name,
            surname,
            username,
            address,
            profession,
            city,
            bio,
            dob,
            userId,
            access_token,
            setLoading
          );
        }}
      >
        Update
      </PurpleHeartText>
    </ProfileDetailsRoot>
  );
};
const ProfileDetailsRoot = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
  align-items: center;
  padding: 15px 18px 15% 19px;
  ::-webkit-scrollbar {
    width: 0px;
  }
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
  margin: 5px 0px 10px 0px;
`;
const Text2 = styled.div`
  width: 100%;
  height: 50px;
  font-size: 20px;
  font-family: Ubuntu;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  left: 13px;
`;
const PurpleHeartText = styled.button`
  display: flex;
  font-size: 17px;
  font-family: Ubuntu;
  font-weight: 300;
  color: #ffffff;
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
  width: 100%;
  height: 53px;
  left: 13px;
  top: ${(props) => props.top};
  border-radius: 10px;
  margin-top: 10px;
  padding: 20px;
`;
