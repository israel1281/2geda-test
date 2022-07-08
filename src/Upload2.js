import React from "react";
import styled from "styled-components";
export const Upload2 = ({}) => {
  return (
    <UploadRoot>
      <FlexRow>
        <FlexColumn>
          <Text1>Update your feed</Text1>
          <Text2>How are you doing today?</Text2>
        </FlexColumn>
        <X src={"https://file.rendit.io/n/MWlSeGqTqTvqjg8sNIwF.svg"} />
      </FlexRow>
      <Element1>
        <Text3>You can write up to 1,000 words</Text3>
        <SilverRectangle placeholder="You can write p to 1,000 words" />
      </Element1>
      <ManateeFlexRow>
        <Text4>Add images or Videos</Text4>
      </ManateeFlexRow>
      <FlexRow1>
        <Image1 src={"https://file.rendit.io/n/SBRQWxPR9NhzndIosgTs.png"} />
        <UnsplashyPAZYqs>
          <Image2 src={"https://file.rendit.io/n/DA5qlisUz0qr10aLQdy8.svg"} />
        </UnsplashyPAZYqs>
        <Image1 src={"https://file.rendit.io/n/XeC8yqdugPEhx1hyMZbA.png"} />
        <SilverSquare />
      </FlexRow1>
      <Text5 margin={"0px 0px 14.5px 26px"}>Tag Friends</Text5>
      <Line src={"https://file.rendit.io/n/efHpnPcxTmd17H15IWfY.svg"} />
      <Text5 margin={"0px 0px 12.5px 26px"}>Add Location</Text5>
      <Line1 src={"https://file.rendit.io/n/efHpnPcxTmd17H15IWfY.svg"} />
      <Text5 margin={"0px 0px 21px 26px"}>Schedule Post</Text5>
      <PurpleHeartText>Upload</PurpleHeartText>
    </UploadRoot>
  );
};
const UploadRoot = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  align-items: flex-start;
  border-radius: 20px 20px 0px 0px;
`;
const FlexRow = styled.div`
  width: 100%;
  background-image: url("https://file.rendit.io/n/muImiViIGgfv3CfrtLX2.svg");
  background-size: cover;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 27px;
  align-items: flex-start;
  padding: 26px 27px 24px 27px;
  margin: 0px 0px 18px 0px;
`;
const FlexColumn = styled.div`
  align-self: stretch;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
`;
const Text1 = styled.div`
  font-size: 25px;
  font-family: Ubuntu;
  font-weight: 500;
  color: #ffffff;
`;
const Text2 = styled.div`
  font-size: 15px;
  font-family: Ubuntu;
  font-weight: 300;
  color: #ffffff;
  margin: 0px 0px 0px 10px;
`;
const X = styled.img`
  width: 32px;
  height: 32px;
  margin: 4px 0px 0px 0px;
`;
const Element1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 148px;
  margin: 0px 0px 13px 0px;
`;
const Text3 = styled.div`
  font-size: 15px;
  font-family: Ubuntu;
  font-weight: 300;
  color: #bebbbb;
  position: absolute;
  top: 19px;
  left: 33px;
  display: none;
`;
const SilverRectangle = styled.textarea`
  width: 90%;
  height: 148px;
  background-color: rgba(196, 196, 196, 0.21);
  border-radius: 10px;
  margin: 0px auto;
  padding: 5px 0px 0px 10px;
  ::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
  ::focus {
    display: none;
  }
`;
const ManateeFlexRow = styled.div`
  background-color: rgba(165, 156, 172, 0.74);
  display: flex;
  align-self: center;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  padding: 18px 97px 18px 79px;
  margin: 0px 0px 24px 0px;
`;
const Text4 = styled.div`
  width: 154px;
  font-size: 15px;
  font-family: Ubuntu;
  font-weight: 400;
  color: #ffffff;
`;
const FlexRow1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  gap: 13px;
  align-items: center;
  padding: 0px 43px 0px 29px;
  margin: 0px 0px 24px 0px;
`;
const UnsplashyPAZYqs = styled.div`
  background-image: url("https://file.rendit.io/n/ethodMDoXztDS8D9bDAy.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 23px 25px 26.52px 24px;
`;
const Image2 = styled.img`
  width: 17px;
  height: 16.48px;
`;
const SilverSquare = styled.div`
  width: 66px;
  height: 66px;
  background-color: rgba(196, 196, 196, 0.1);
  border-radius: 5px;
`;
const Line = styled.img`
  width: 121px;
  height: 1px;
  margin: 0px 0px 11.5px 29.5px;
`;
const Line1 = styled.img`
  width: 121px;
  height: 1px;
  margin: 0px 0px 15.5px 29.5px;
`;
const PurpleHeartText = styled.div`
  display: flex;
  font-size: 15px;
  font-family: Ubuntu;
  font-weight: 400;
  color: #ffffff;
  align-self: center;
  width: 318px;
  height: 17px;
  background-color: #4e0ca2;
  flex-direction: row;
  justify-content: center;
  border-radius: 5px;
  padding: 18px 0px;
`;
const Image1 = styled.img`
  width: 66px;
  height: 66px;
`;
const Text5 = styled.div`
  font-size: 15px;
  font-family: Ubuntu;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.7);
  margin: ${(props) => props.margin};
`;
