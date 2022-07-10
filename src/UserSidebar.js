import React from "react";
import styled from "styled-components";
export const WhiteFlexColumn1 = ({}) => {
  return (
    <WhiteFlexColumnRoot>
      <Text1>Unfollow</Text1>
      <Line src={"https://file.rendit.io/n/kKmOEiGEW0Efled3F5mm.svg"} />
      <Text2>Report abuse</Text2>
      <Line1 src={"https://file.rendit.io/n/kKmOEiGEW0Efled3F5mm.svg"} />
      <Text3>Flag profile</Text3>
      <Line1 src={"https://file.rendit.io/n/kKmOEiGEW0Efled3F5mm.svg"} />
      <Text4>Block User</Text4>
    </WhiteFlexColumnRoot>
  );
};
const WhiteFlexColumnRoot = styled.div`
  width: 121.5px;
  height: 149px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  align-items: flex-start;
  border-radius: 10px;
  padding: 20px 19.5px 20px 16px;
`;
const Text1 = styled.div`
  width: 81px;
  height: 17px;
  font-size: 13px;
  font-family: Ubuntu;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  margin: 0px 0px 5.5px 0px;
`;
const Line = styled.img`
  width: 121px;
  height: 1px;
  align-self: flex-end;
  margin: 0px 0px 10.5px 0px;
`;
const Text2 = styled.div`
  width: 97px;
  height: 18px;
  font-size: 13px;
  font-family: Ubuntu;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  margin: 0px 0px 10.5px 0px;
`;
const Text3 = styled.div`
  width: 79px;
  height: 17px;
  font-size: 13px;
  font-family: Ubuntu;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  margin: 0px 0px 10.5px 0px;
`;
const Text4 = styled.div`
  width: 63px;
  height: 17px;
  font-size: 13px;
  font-family: Ubuntu;
  font-weight: 400;
  color: #8b1212;
`;
const Line1 = styled.img`
  width: 121px;
  height: 1px;
  align-self: flex-end;
  margin: 0px 0px 11.5px 0px;
`;
