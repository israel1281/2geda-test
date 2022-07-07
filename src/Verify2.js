import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import { patchDataApi } from "./Data";
import ReactLoading from "react-loading"
export const Verify2 = ({}) => {
      const [loading, setLoading] = React.useState(false);
    const [enabled, setEnabled] = React.useState(false);
    const [counter, setCounter] = React.useState(60);

       const initialState = {
        email: localStorage.getItem('email'),
        token: 0
    }

    const [userData, setUserData] = React.useState(initialState);
    const [data, setData] = React.useState({});
    const { email, token } = userData;

    const navigate = useNavigate();


    const handleChangeInput = e => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    React.useEffect(() => {
        if (counter > 0) {
            setEnabled(setTimeout(() => {
                setCounter(counter - 1);
            }, 1000));
        } else {
            setEnabled(false);
            clearTimeout(enabled);
        }
    }, [counter]);

    React.useEffect(() => {
        if (data.message === 'Invalid token or email') {
            notification.error({
                message: 'Invalid token',
                placement: 'topLeft',
                duration: 4
            })
        } else if (data.status === 'success') {
            navigate('/profile-upload')
        }
    }, [data])

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        if (!token) {
            setLoading(false);
            notification.error({
                message: 'Your token is required',
                placement: 'topLeft',
                duration: 4
            })
            return;
        }
        patchDataApi('verify', userData)
        .then(res => {
            setLoading(false);
            setData(res.data);
            localStorage.removeItem('email');
        })
        .catch(err => {
            setLoading(false);
            console.log(err)
        })
    }

    const handleResend = async (e) => {
        e.preventDefault();
        
        try {
            setEnabled(false)
            const res = await patchDataApi(`resendToken?email=${email}`);
            setCounter(60);
            notification.success({
                message: res.data.message,
                placement: 'topLeft',
                duration: 4
            })
        } catch (err) {
            notification.error({
                message: 'Error',
                description: err.message,
                placement: 'topLeft'
            })
        }
    }
  return (
    <VerifyRoot>
      <FlexRow>
        <Back 
          onClick={
            () => {
              navigate("/signup")
            }
          }
        src={"https://file.rendit.io/n/PFPi6YzDnGX6Xf7WsLuO.svg"} />
        <GEDA src={"https://file.rendit.io/n/8okSpiQxAX0hcxg33d3g.png"} />
      </FlexRow>
      <Text2>Please verify your email</Text2>
      <Text3>We sent a 4 digits code to your email</Text3>
      <FlexRow1>
        <Element4 
           type="number"
            placeholder="* * * * * *"
            name="token"
            value={token}
            onChange={handleChangeInput}
         />
      </FlexRow1>
      <Text4>00:{counter}</Text4>
      <Text5   onClick={handleResend}>Didn’t get code? Resend code</Text5>
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
    </VerifyRoot>
  );
};
const VerifyRoot = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  position: fixed;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  align-items: flex-start;
  padding: 15px 18px 15px 19px;
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
const Text2 = styled.div`
  font-size: 20px;
  font-family: Ubuntu;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  margin: 0px 0px 5px 13px;
`;
const Text3 = styled.div`
  font-size: 12px;
  font-family: Ubuntu;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  margin: 0px 0px 25px 13px;
`;
const FlexRow1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 11px;
  align-items: center;
  margin: 0px 0px 39px 13px;
`;
const Text4 = styled.div`
  font-size: 15px;
  font-family: Ubuntu;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  align-self: center;
  margin: 0px 0px 8px 0px;
`;
const Text5 = styled.div`
  font-size: 12px;
  font-family: Ubuntu;
  font-weight: 400;
  color: rgba(79, 13, 163, 0.4);
  align-self: center;
  margin: 0px 0px 341px 0px;
  cursor: pointer
`;
const PurpleHeartText = styled.div`
  display: flex;
  font-size: 17px;
  font-family: Ubuntu;
  font-weight: 300;
  color: #ffffff;
  width: 100%;
  height: 30px;
  background-color: rgba(79, 13, 163, 0.5);
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 18px 0px 20px 0px;
  margin: -60px 0px 0px 8px;
`;
const Element4 = styled.input`
  border-width: 1px;
  border-color: rgba(40, 40, 40, 0.5);
  border-style: solid;
  width: 90%;
  height: 52px;
  border-radius: 8px;
  padding: 0px 35%
`;
const Element7 = styled.div`
  border-width: 1px;
  border-color: rgba(40, 40, 40, 0.5);
  border-style: solid;
  width: 54px;
  height: 52px;
  position: absolute;
  top: -0.5px;
  border-radius: 8px;
  left: ${(props) => props.left};
`;
