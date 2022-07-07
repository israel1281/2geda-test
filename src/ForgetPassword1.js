import React from "react";
import styled from "styled-components";
import { postDataApi } from "./Data";
import { validateEmail } from "./Data";
import { notification, Spin } from "antd";
export const ForgetPassword1 = ({}) => {
      const initialState = {
        email: '',
    }
    
    const [data, setData] = React.useState({});
    const [userData, setUserData] = React.useState(initialState);
    const { email } = userData

      const alert = (type, message) => {
        notification[type]({
            message: message,
            placement: 'topLeft',
            duration: 4
        })
    }

    React.useEffect(() => {
        if (data.status === 'success') {
            alert('success', data.message)
        }

        if (data.status === 'error') {
            alert('error', data.message)
        }
    }, [data])

    const handleSubmit = e => {
        e.preventDefault()
        if (!validateEmail(email)) {
            alert('error', 'Your email is required')
            return
        }
        postDataApi('password/email', userData)
        .then(res => {
            localStorage.setItem('email', email)
            setData(res.data)
        })
        .catch(err => {
            alert('error', err.response.data.message)
        })
    }

    const handleChange = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

  return (
    <ForgetPasswordRoot>
      <StatusBar>
        <Element2>
          <Image1 src={"https://file.rendit.io/n/rBYviZiAHKysqvqYnAbs.svg"} />
          <Text1>12:22</Text1>
        </Element2>
        <Image2 src={"https://file.rendit.io/n/DPGM10sr1XxqxoVopltr.svg"} />
        <Image3 src={"https://file.rendit.io/n/4g8cwghXNj7wrbPlgr9P.svg"} />
        <Image4 src={"https://file.rendit.io/n/OLtasn9WgULZ8jbgCJls.svg"} />
      </StatusBar>
      <FlexRow>
        <Back src={"https://file.rendit.io/n/MJYFyczYihminIO3aV0k.svg"} />
        <GEDA src={"https://file.rendit.io/n/HujhYAAryYYEHrYCQndz.png"} />
      </FlexRow>
      <Element3>
        <Text2>Reset your password</Text2>
        <InputField>
          <Text3 
             type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="input email address"
           />
          <Element4 />
        </InputField>
        <Paragraph>
          We’ll send a verification code to your Phone number or email address
          to verify that you are 2geda with us.
        </Paragraph>
      </Element3>
      <Text4>Use Email instead</Text4>
      <PurpleHeartText onClick={handleSubmit}>Send code</PurpleHeartText>
    </ForgetPasswordRoot>
  );
};
const ForgetPasswordRoot = styled.div`
  width: 338px;
  height: 782px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  align-items: flex-start;
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
const Element2 = styled.div`
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
  align-self: stretch;
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
  align-self: stretch;
  height: 136px;
  position: relative;
  min-width: 338px;
  margin: 0px 0px 31px 0px;
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
  width: 311px;
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
  left: 14px;
  padding: 0px;
  border-width: 0px;
  background: none;
  width: 100%;
  :: placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
  display: inline-block;
  outline-width: 0px;
`;
const Element4 = styled.div`
  border-width: 1px;
  border-color: rgba(40, 40, 40, 0.5);
  border-style: solid;
  width: 309px;
  height: 51px;
  position: absolute;
  top: -1px;
  left: -1px;
  border-radius: 8px;
`;
const Paragraph = styled.div`
  width: 315px;
  font-size: 13px;
  font-family: Ubuntu;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 106px;
  left: 13px;
`;
const Text4 = styled.div`
  font-size: 15px;
  font-family: Ubuntu;
  font-weight: 500;
  color: #4e0ca2;
  margin: 0px 0px 355px 13px;
`;
const PurpleHeartText = styled.div`
  display: flex;
  font-size: 17px;
  font-family: Ubuntu;
  font-weight: 300;
  color: #ffffff;
  width: 321px;
  height: 20px;
  background-color: #4e0ca2;
  flex-direction: row;
  justify-content: center;
  border-radius: 10px;
  padding: 18px 0px 20px 0px;
  margin: 0px 0px 0px 8px;
`;
