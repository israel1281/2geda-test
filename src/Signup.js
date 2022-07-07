import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { notification } from 'antd'
import { useNavigate } from 'react-router-dom'
import { validateEmail } from './Data'
import { postDataApi } from './Data'
import ReactLoading from "react-loading"


export const Signup = ({}) => {
      const initialState = {
        email: '',
    }

    const [loading, setLoading] = React.useState(false);    
    const [error, setError] = React.useState('');
    const [success, setSuccess] = React.useState('');
    const [userData, setUserData] = React.useState(initialState);
    const [data, setData] = React.useState({});

      const { email } = userData;

          const alert = (type, message) => {
        notification[type]({
            message: message,
            placement: 'topLeft',
            duration: 4
        })
    }

    const navigate = useNavigate();

        useEffect(() => {
        if (data.status === "success") {
            navigate("/verify")
        }

        if (data.status === 'error') {
            navigate('/profile-upload')
        }
    }, [data])

        const handleSubmit = e => {
        e.preventDefault()
        setLoading(true)
        if (!validateEmail(email)) {
            setError('Your email is required')
            alert('error', 'Your email is required')
            setLoading(false)
            return
        } else {
            setError('')
        }
        postDataApi('registerUser', userData)
        .then(res => {
            localStorage.setItem('email', email)
            setLoading(false)
            setSuccess(res.data.message)
            setData(res.data)
            setUserData(initialState)
            alert('success', res.data.message)
        })
        .catch(err => {
            setLoading(false)
            setError(err.response.data.message)
            alert('error', err.response.data.message)
        })
    }

      const handleChangeInput = e => {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
    }


  return (
    <OnboardingRoot>
      <FlexRow>
        <Back 
          onClick={
            () => {
              navigate("/")
            }
          }
        src={"https://file.rendit.io/n/sUuetKgsVUbHkvau2EzY.svg"} />
        <GEDA src={"https://file.rendit.io/n/TJCOmuloSTmGbXGedgJ0.png"} />
      </FlexRow>
      <Element3>
        <Text2>Sign up with email</Text2>
        <InputField
          type='email'
          name='email'
          value={email}
          onChange={handleChangeInput}
          placeholder={"Input email address"} 
        />
        <Paragraph>
          We’ll verify the email provided to be sure it belongs to you
        </Paragraph>
      </Element3>
      {
        !loading ?  <PurpleHeartText
          onClick={handleSubmit}
        >Continue</PurpleHeartText> : <PurpleHeartText>
          <ReactLoading 
          type="cylon"
          color="#fff"
          height={40}
          width={40}
          marginTop={20}
          />
        </PurpleHeartText>
      }
    </OnboardingRoot>
  );
};
const OnboardingRoot = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  position: fixed;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  align-items: flex-start;
  padding: 15px 18px 15px 5px;
`;
const FlexRow = styled.div`
  width: 100%;
  height: 56px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 7px;
  margin: 0px 0px 25px 0px;
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
const Element3 = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  width: 100%;
  margin: 0px auto 38px auto;
`;
const Text2 = styled.div`
  width: 241px;
  height: 136px;
  font-size: 20px;
  font-family: Ubuntu;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  position: relative;
  left: 13px;
`;
const InputField = styled.input`
  width: 95%;
  height: 53px;
  position: relative;
  top: -20%;
  left: 13px;
  border-radius: 10px;
   font-size: 12px;
  font-family: Ubuntu;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.4);
  :: placeholder {
    color: rgba(0, 0, 0, 0.4);
`;
const Paragraph = styled.div`
  width: 90%;
  font-size: 15px;
  font-family: Ubuntu;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.8);
  position: relative;
  top: -19%;
  left: 16px;
`;
const PurpleHeartText = styled.div`
  display: flex;
  font-size: 17px;
  font-family: Ubuntu;
  font-weight: 300;
  color: #ffffff;
  width: 100%;
  height: 25px;
  background-color: #4e0ca2;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 18px 0px 20px 0px;
  margin: 0px 0px 0px 8px;
  cursor: pointer;
`;
