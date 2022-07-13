import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import { validateEmail } from "./Data";
import { postDataApi } from "./Data";
import ReactLoading from "react-loading";
import { Login } from "./Api/Authorization";

export const SignIn2 = ({}) => {
  const initialState = { email: "", password: "" };
  const [loading, setLoading] = React.useState(false);
  const [userData, setUserData] = React.useState(initialState);
  const { email, password } = userData;

  const navigate = useNavigate();

  const alert = (type, message) => {
    notification[type]({
      message: message,
      placement: "topLeft",
      duration: 4
    });
  };

  const validateForm = () => {
    if (!validateEmail(email)) {
      alert("error", "Your email is required");
      return false;
    }
    if (!password || password.length < 6) {
      alert("error", "Your password is required");
      return false;
    }
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    validateForm();
    postDataApi("login", userData)
      .then((res) => {
        setLoading(false);
        sessionStorage.setItem("access_token", res.data.access_token);
        sessionStorage.setItem("currentUser", JSON.stringify(res.data.user.id));
        sessionStorage.setItem("email", res.data.user.email);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SignInRoot>
      <FlexRow>
        <Back
          onClick={() => {
            navigate("/");
          }}
          src={"https://file.rendit.io/n/ptbgIBQ7cFXSLTqtDdUx.svg"}
        />
        <GEDA src={"https://file.rendit.io/n/W9giRPrqfMXzoHBdicfw.png"} />
      </FlexRow>
      <Element4>
        <Text2>Sign in with your email</Text2>
        <Text3
          type="email"
          placeholder={"Input Phone number"}
          value={email}
          name="email"
          onChange={handleChangeInput}
        />
        <Text3
          type="password"
          placeholder="input password"
          onChange={handleChangeInput}
          name="password"
          value={password}
        />
      </Element4>
      <FlexRow4>
        <Text6
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign up here
        </Text6>
        <Text7
          onClick={() => {
            navigate("/forget-password");
          }}
        >
          Forget Password?
        </Text7>
      </FlexRow4>
      {!loading ? (
        <PurpleHeartText
          onClick={() => {
            Login(email, password, setLoading, navigate, validateForm);
          }}
        >
          Signin
        </PurpleHeartText>
      ) : (
        <PurpleHeartText>
          <ReactLoading
            type="cylon"
            color="#fff"
            height={40}
            width={50}
            marginTop={20}
          />
        </PurpleHeartText>
      )}
    </SignInRoot>
  );
};
const SignInRoot = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  position: fixed;
  display: flex;
  flex-direction: column;
  margin: auto;
`;
const FlexRow = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 7px;
  margin: 15px 0px 25px 0px;
`;
const Back = styled.img`
  width: 47px;
  height: 50px;
  cursor: pointer;
`;
const GEDA = styled.img`
  width: 49px;
  height: 50px;
  align-self: flex-end;
`;
const Element4 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Text2 = styled.div`
  margin: 0px 0px 0px -10%;
  font-size: 20px;
  font-family: Ubuntu;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
`;
const Text3 = styled.input`
  font-size: 12px;
  font-family: Ubuntu;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.4);
  margin: 10px 0px 5px 0px;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  height: 50px;
  border-radius: 10px;
  background: none;
  width: 90%;
  :: placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
  :: focus {
    display: none;
  }
  display: inline-block;
  outline-width: 0px;
`;
const FlexRow4 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 0px 14px 0px 11px;
  margin: 10px 0px 0px 0px;
`;
const Text6 = styled.div`
  font-size: 15px;
  font-family: Ubuntu;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
`;
const Text7 = styled.div`
  font-size: 15px;
  font-family: Ubuntu;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
`;
const PurpleHeartText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-family: Ubuntu;
  font-weight: 300;
  color: #ffffff;
  align-self: flex-start;
  width: 90%;
  height: 30px;
  background-color: #4e0ca2;
  border-radius: 10px;
  padding: 18px 145px 20px 126px;
  margin: 80% auto 0px auto;
  cursor: pointer;
`;
