import React, { useEffect, useState} from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import { validateEmail } from './Data'
import { postDataApi } from './Data'
import ReactLoading from "react-loading"
export const SignIn2 = ({}) => {
    const initialState = { email: '', password: '' };
    const [loading, setLoading] = React.useState(false);
    const [userData, setUserData] = React.useState(initialState);
    const { email, password } = userData;
    const inputRef = React.createRef();

     const navigate = useNavigate();
    
    const alert = (type, message) => {
        notification[type]({
            message: message,
            placement: 'topLeft',
            duration: 4
        })
    }

    useEffect(() => {
         if (inputRef.current) {
      inputRef.current.focus(); // This should work
    }
    }, [inputRef])

    const validateForm = () => {
        if (!validateEmail(email)) {
            alert('error', 'Your email is required')
            return false
        }
        if (!password || password.length < 6) {
            alert('error', 'Your password is required')
            return false
        }
    }

     const handleChangeInput = e => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        validateForm()
        postDataApi('login', userData)
        .then(res => {
            setLoading(false);
            sessionStorage.setItem('access_token', res.data.access_token)
            sessionStorage.setItem('currentUser', JSON.stringify(res.data.user.id))
            navigate('/home')
        })
        .catch(err => {
          console.log(err)
        })
    }

  return (
    <SignInRoot>
      <FlexRow>
        <Back onClick={
          () => {
            navigate("/")
          }
        } src={"https://file.rendit.io/n/ptbgIBQ7cFXSLTqtDdUx.svg"} />
        <GEDA src={"https://file.rendit.io/n/W9giRPrqfMXzoHBdicfw.png"} />
      </FlexRow>
      <Element4>
        <Text2>Sign in with Phone number</Text2>
         <InputField>
          <Text3 
            type="email"
            placeholder={"Input Phone number"} 
             value={email}
             name="email"
             onChange={handleChangeInput}
          />
        </InputField>
        <InputField1>
          <Text3 
            type="password"
              placeholder='input password'
                                onChange={handleChangeInput}
                                name='password'
                                value={password}
          />
        </InputField1>
      </Element4>
      <FlexRow4>
        <Text6>Sign up here</Text6>
        <Text7>Forget Password?</Text7>
      </FlexRow4>
      <Text8>Use Email instead</Text8>
      {
                        !loading ?  <PurpleHeartText
                          onClick={handleSubmit}
                        >Signin</PurpleHeartText> : <PurpleHeartText>
                          <ReactLoading 
                          type="cylon"
                          color="#fff"
                          height={40}
                          width={40}
                          marginTop={20}
                          />
                        </PurpleHeartText>
                    }
    </SignInRoot>
  );
};
const SignInRoot = styled.div`
  width: 338px;
  height: 782px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  padding: 15px 18px 15px 19px;
`;
const StatusBar = styled.div`
  width: 338px;
  display: flex;
  align-self: center;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin: 0px 0px 49px 0px;
`;
const Element3 = styled.div`
  align-self: stretch;
  width: 50px;
  height: 15px;
  position: relative;
  flex-grow: 1;
  margin: 0px 229px 0px 0px;
`;
const Image1 = styled.img`
  width: 12px;
  height: 10px;
  position: absolute;
  top: 2px;
  left: 38px;
`;
const Text1 = styled.div`
  width: 45px;
  font-size: 13px;
  font-family: Roboto;
  font-weight: 700;
  color: #282828;
  position: absolute;
`;
const Image2 = styled.img`
  width: 14px;
  height: 12px;
  margin: 0px 5px 0px 0px;
`;
const Image3 = styled.img`
  width: 16px;
  height: 11px;
  margin: 0px 5px 0px 0px;
`;
const Image4 = styled.img`
  width: 19px;
  height: 10px;
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
const Element4 = styled.div`
  height: 160px;
  position: relative;
  min-width: 338px;
  margin: 0px 0px 22px 0px;
`;
const Text2 = styled.div`
  width: 267px;
  height: 136px;
  font-size: 20px;
  font-family: Ubuntu;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  position: absolute;
  left: 13px;
`;
const InputField = styled.div`
  width: 305px;
  height: 53px;
  position: absolute;
  top: 39px;
  left: 13px;
`;
const Text3 = styled.input`
  font-size: 12px;
  font-family: Ubuntu;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 21px;
  left: 93px;
  padding: 0px;
  border: 1px solid black;
  height: 50px;
  border-radius: 10px;
  background: none;
  width: 100%;
  :: placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
  display: inline-block;
  outline-width: 0px;
`;
const Element5 = styled.div`
  border-width: 1px;
  border-color: rgba(40, 40, 40, 0.5);
  border-style: solid;
  width: 228px;
  height: 51px;
  position: absolute;
  top: -1px;
  left: 74px;
  border-radius: 8px;
`;
const FlexRow1 = styled.div`
  border-width: 1px;
  border-color: rgba(40, 40, 40, 0.5);
  border-style: solid;
  height: 17.1px;
  display: flex;
  position: absolute;
  top: -1px;
  left: -1px;
  flex-direction: row;
  gap: 3px;
  align-items: center;
  border-radius: 8px;
  padding: 18px 5px 15.9px 6px;
`;
const FlexRow2 = styled.div`
  width: 26px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0.33px;
  align-items: center;
`;
const FernRectangle = styled.div`
  width: 8.67px;
  height: 17.1px;
  background-color: #117b15;
`;
const Element6 = styled.div`
  width: 16.67px;
  height: 17.1px;
  position: relative;
  flex-grow: 1;
`;
const WhiteRectangle = styled.div`
  width: 8.67px;
  height: 17.1px;
  background-color: #ffffff;
  position: absolute;
`;
const FernRectangle1 = styled.div`
  width: 8.67px;
  height: 17.1px;
  background-color: #117b15;
  position: absolute;
  left: 8px;
`;
const Text4 = styled.div`
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  align-self: flex-start;
  margin: 2px 0px 0px 0px;
`;
const InputField1 = styled.div`
  width: 311px;
  height: 53px;
  position: absolute;
  top: 107px;
  left: 13px;
`;
const Text5 = styled.div`
  font-size: 12px;
  font-family: Ubuntu;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 21px;
  left: 14px;
`;
const FlexRow3 = styled.div`
  border-width: 1px;
  border-color: rgba(40, 40, 40, 0.5);
  border-style: solid;
  width: 277px;
  display: flex;
  position: absolute;
  top: -1px;
  left: -1px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-radius: 8px;
  padding: 15px 16px 12px 16px;
`;
const Removeredeye = styled.img`
  width: 24px;
  height: 24px;
`;
const FlexRow4 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 110px;
  align-items: center;
  padding: 0px 14px 0px 11px;
  margin: 0px 0px 33px 0px;
`;
const Text6 = styled.div`
  font-size: 15px;
  font-family: Ubuntu;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
`;
const Text7 = styled.div`
  font-size: 15px;
  font-family: Ubuntu;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.8);
`;
const Text8 = styled.div`
  font-size: 15px;
  font-family: Ubuntu;
  font-weight: 500;
  color: #4e0ca2;
  align-self: flex-start;
  margin: 0px 0px 290px 13px;
`;
const PurpleHeartText = styled.div`
  display: flex;
  font-size: 17px;
  font-family: Ubuntu;
  font-weight: 300;
  color: #ffffff;
  align-self: flex-start;
  width: 50px;
  height: 20px;
  background-color: #4e0ca2;
  flex-direction: row;
  border-radius: 10px;
  padding: 18px 145px 20px 126px;
  margin: 0px 0px 0px 8px;
`;
