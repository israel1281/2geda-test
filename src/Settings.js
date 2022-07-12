import React from "react";
import styled from "styled-components";
import { GetUser } from "./Api/User";
import { useNavigate } from "react-router-dom";

export const Settings = ({}) => {
  const [userInfo, setUserInfo] = React.useState([]);

  const navigate = useNavigate();
  const UserId = sessionStorage.getItem("currentUser");

  React.useEffect(() => {
    GetUser(UserId, setUserInfo);
  }, [userInfo, UserId]);

  return (
    <WhiteFlexColumnRoot>
      <Top>
        <GEDA src={"https://file.rendit.io/n/jqllIJLZtPiv6HPCqIB0.png"} />
        <X
          onClick={() => {
            navigate("/profile");
          }}
          src={"https://file.rendit.io/n/PFPi6YzDnGX6Xf7WsLuO.svg"}
        />
      </Top>
      <Element1>
        <Line
          src={"https://file.rendit.io/n/BLDKl0cLEKAz7WUlEekm.svg"}
          left={"-0.5px"}
        />
        <Text1>Edit profile</Text1>
      </Element1>
      <Element1>
        <Line
          src={"https://file.rendit.io/n/BLDKl0cLEKAz7WUlEekm.svg"}
          left={"-0.5px"}
        />
        <Text1>Switch to Business Page</Text1>
      </Element1>
      <Element1>
        <Line
          src={"https://file.rendit.io/n/BLDKl0cLEKAz7WUlEekm.svg"}
          left={"-0.5px"}
        />
        <Text1>Change Password</Text1>
      </Element1>
      <Element1>
        <Line
          src={"https://file.rendit.io/n/BLDKl0cLEKAz7WUlEekm.svg"}
          left={"-0.5px"}
        />
        <Text1>Change Email or Phone number</Text1>
      </Element1>
      <Element1>
        <Line
          src={"https://file.rendit.io/n/BLDKl0cLEKAz7WUlEekm.svg"}
          left={"-0.5px"}
        />
        <Text1>Saved Posts</Text1>
      </Element1>
      <Element6>
        <Line
          src={"https://file.rendit.io/n/BLDKl0cLEKAz7WUlEekm.svg"}
          left={"0.5px"}
        />
        <Text1>Request Verification</Text1>
      </Element6>
      <Element7>
        <Line
          src={"https://file.rendit.io/n/BLDKl0cLEKAz7WUlEekm.svg"}
          left={"0.5px"}
        />
        <Text1>Manage Ads</Text1>
      </Element7>
      <Element8>
        <Line7 src={"https://file.rendit.io/n/BLDKl0cLEKAz7WUlEekm.svg"} />
        <SignOut src={"https://file.rendit.io/n/45DyEM8XlPhBoobukVEJ.svg"} />
        <Text8>Logout</Text8>
      </Element8>
    </WhiteFlexColumnRoot>
  );
};
const WhiteFlexColumnRoot = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  transform-origin: 0px 0px;
  transform: rotate(0.11deg);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  align-items: flex-start;
  padding: 38px 23px 38px 24px;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const X = styled.img`
  width: 32px;
  height: 32px;
  margin: 4px 0px 0px 0px;
`;
const GEDA = styled.img`
  width: 49px;
  height: 50px;
  margin: 0px 0px 0px 0px;
`;
const Element6 = styled.div`
  width: 250px;
  height: 28px;
  position: relative;
  margin: 0px 0px 12px 0px;
`;
const Element7 = styled.div`
  width: 250px;
  height: 28px;
  position: relative;
  margin: 0px 0px 285px 0px;
`;
const Element8 = styled.div`
  width: 100%;
  height: 39px;
  display: flex;
  align-items: center;
`;
const Line7 = styled.img`
  width: 250px;
  height: 2px;
  position: absolute;
  top: 38px;
  left: -0.5px;
`;
const Text8 = styled.div`
  font-size: 15px;
  font-family: Ubuntu;
  font-weight: 400;
  color: #e61515;
  top: 6px;
  left: 46px;
`;
const SignOut = styled.img`
  width: 32px;
  height: 32px;
  left: 4px;
`;
const Element1 = styled.div`
  width: 250px;
  height: 28px;
  position: relative;
  margin: 0px 0px 20px 0px;
`;
const Line = styled.img`
  width: 250px;
  height: 2px;
  position: absolute;
  top: 27px;
  left: ${(props) => props.left};
`;
const Text1 = styled.div`
  font-size: 13px;
  font-family: Ubuntu;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  position: absolute;
`;
