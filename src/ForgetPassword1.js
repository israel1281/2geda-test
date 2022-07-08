import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { postDataApi } from "./Data";
import { validateEmail } from "./Data";
import { notification } from "antd";
import { ResetPassword } from "./Api/Authorization";
import ReactLoading from "react-loading";

export const ForgetPassword1 = ({}) => {
  const initialState = {
    email: ""
  };
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState({});
  const [userData, setUserData] = React.useState(initialState);
  const { email } = userData;

  const alert = (type, message) => {
    notification[type]({
      message: message,
      placement: "topLeft",
      duration: 4
    });
  };

  const navigate = useNavigate();

  React.useEffect(() => {
    if (data.status === "success") {
      alert("success", data.message);
    }

    if (data.status === "error") {
      alert("error", data.message);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert("error", "Your email is required");
      return;
    }
    postDataApi("password/email", userData)
      .then((res) => {
        localStorage.setItem("email", email);
        setData(res.data);
      })
      .catch((err) => {
        alert("error", err.response.data.message);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <ForgetPasswordRoot>
      <FlexRow>
        <Back
          onClick={() => {
            navigate("/signin");
          }}
          src={"https://file.rendit.io/n/MJYFyczYihminIO3aV0k.svg"}
        />
        <GEDA src={"https://file.rendit.io/n/HujhYAAryYYEHrYCQndz.png"} />
      </FlexRow>
      <Element3>
        <Text2>Reset your password</Text2>
        <Text3
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="input email address"
        />
        <Paragraph>
          We’ll send a verification code to your Phone number or email address
          to verify that you are 2geda with us.
        </Paragraph>
      </Element3>
      <Text4></Text4>
      {!loading ? (
        <PurpleHeartText
          onClick={() => {
            ResetPassword(email, setLoading);
          }}
        >
          Send code
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
    </ForgetPasswordRoot>
  );
};
const ForgetPasswordRoot = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  position: fixed;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  align-items: center;
  padding: 15px 18px 15px 19px;
`;
const FlexRow = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5px;
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
  cursor: pointer;
`;
const Element3 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 136px;
  margin: 0px 0px 31px 0px;
`;
const Text2 = styled.div`
  font-size: 20px;
  font-family: Ubuntu;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
`;
const Text3 = styled.input`
  font-size: 12px;
  font-family: Ubuntu;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 15px;
  background: none;
  width: 100%;
  height: 40px;
  :: placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
  :: focus {
    width: 0px;
  }
`;
const Paragraph = styled.div`
  width: 100%;
  font-size: 13px;
  font-family: Ubuntu;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.3);
  margin: 10px 0px 0px 0px;
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
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-family: Ubuntu;
  font-weight: 300;
  color: #ffffff;
  width: 100%;
  height: 25px;
  background-color: #4e0ca2;
  flex-direction: row;
  justify-content: center;
  border-radius: 10px;
  padding: 18px 0px 20px 0px;
  margin: -20px 0px 0px 8px;
`;
