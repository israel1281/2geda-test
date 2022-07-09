import React from "react";
import styled from "styled-components";
export const UserProfile1 = ({}) => {
  return (
    <UserProfileRoot>
      <WhiteFlexColumn>
        <FlexRow padding={"0px 4px"}>
          <Back src={""} />
          <Text2>Profile</Text2>
          <DotsThreeCircle
            src={"https://file.rendit.io/n/O34P177UWMfLbrdqYYWM.svg"}
          />
        </FlexRow>
      </WhiteFlexColumn>
      <Ellipse>
        <Image5 src={"https://file.rendit.io/n/vKWkiw9W1VsrL0QSxAnw.png"} />
      </Ellipse>
      <Text3>Ruth obe</Text3>
      <Text4>Professional Tech Consultant</Text4>
      <Text5>Lagos, Nigeria</Text5>
      <PurpleHeartFlexRow>
        <Posts1>
          Posts
          <br />
          <Posts>570</Posts>
        </Posts1>
        <Posts1>
          Followers
          <br />
          <Posts>18m</Posts>
        </Posts1>
        <Posts1>
          Following
          <br />
          <Posts>23k</Posts>
        </Posts1>
      </PurpleHeartFlexRow>
      <Element7>
        <Text6>Following</Text6>
        <BlackText>Direct message</BlackText>
      </Element7>
      <Element8>
        <Text7>Posts (560)</Text7>
        <Text8>Outlet (0)</Text8>
        <Line src={"https://file.rendit.io/n/b5S9s9moTzKULFnl3Ig9.svg"} />
        <Line1 src={"https://file.rendit.io/n/b5S9s9moTzKULFnl3Ig9.svg"} />
        <Line2 src={"https://file.rendit.io/n/qBaFQIcSWMumNCW3uOs2.svg"} />
      </Element8>
      <FlexColumn margin={"0px 0px 37px 0px"}>
        <WhiteFlexColumn1>
          <FlexRow1>
            <Ellipse2>
              <Verified src={""} />
            </Ellipse2>
            <FlexColumn1>
              <Element9>
                <Text9>Dr. Salem Lawal</Text9>
                <Text10>Pharmacist</Text10>
              </Element9>
              <Text11>Lagos, Nigeria</Text11>
            </FlexColumn1>
            <Text12>1hr ago</Text12>
          </FlexRow1>
          <Line3 src={""} />
          <Paragraph>
            This is the Opportunity to Join the World Leading Tech Professionals
            in 2022. All you{"  "}need do is to register with the link below
            <br />
            <br />
            <Text13>www.ileifetech.com/freshmen</Text13>
          </Paragraph>
          <UnsplashsqPLlXc>
            <Ellipse1>
              <Polygon src={""} />
            </Ellipse1>
          </UnsplashsqPLlXc>
          <FlexRow2>
            <Image6 src={""} />
            <Image7 src={""} />
            <Image8 src={""} />
            <Image9 src={""} />
            <Options src={""} />
          </FlexRow2>
          <FlexRow padding={"0px 2px"}>
            <Text14 margin={"0px 36px 0px 0px"}>3.2K</Text14>
            <Text15>115</Text15>
            <Text16>5</Text16>
            <Text14 margin={"0"}>1.3K</Text14>
          </FlexRow>
        </WhiteFlexColumn1>
        <WhiteFlexColumn2>
          <Text18>Comment</Text18>
          <Element10>
            <Text19>Your comment goes here</Text19>
            <FlexRow4>
              <FlexRow5>
                <Text20>Post</Text20>
              </FlexRow5>
            </FlexRow4>
          </Element10>
          <Text21>See all comments</Text21>
        </WhiteFlexColumn2>
      </FlexColumn>
    </UserProfileRoot>
  );
};
const UserProfileRoot = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  align-items: center;
`;
const WhiteFlexColumn = styled.div`
  height: 112px;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 37px;
  align-items: center;
  padding: 5px 18px 5px 19px;
  margin: 0px 0px 7px 0px;
`;
const Back = styled.img`
  width: 47px;
  height: 50px;
  margin: 0px 80px 0px 0px;
`;
const Text2 = styled.div`
  font-size: 23px;
  font-family: Ubuntu;
  font-weight: 700;
  color: #4e0ca2;
  margin: 0px 86px 0px 0px;
`;
const DotsThreeCircle = styled.img`
  width: 32px;
  height: 32px;
`;
const Ellipse = styled.div`
  height: 114px;
  background-image: url("undefined");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 4px 11px 4px 3px;
  margin: 0px 0px 8px 0px;
`;
const Image5 = styled.img`
  width: 106px;
  height: 106px;
`;
const Text3 = styled.div`
  font-size: 18px;
  font-family: Ubuntu;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  margin: 0px 0px 5px 0px;
`;
const Text4 = styled.div`
  font-size: 12px;
  font-family: Ubuntu;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  margin: 0px 0px 4px 0px;
`;
const Text5 = styled.div`
  font-size: 12px;
  font-family: Ubuntu;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  margin: 0px 0px 11px 0px;
`;
const PurpleHeartFlexRow = styled.div`
  background-color: #4e0ca2;
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
  border-radius: 10px;
  padding: 11px 19px 9px 26px;
  margin: 0px 0px 18px 0px;
`;
const Element7 = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0px 0px 5px 0px;
`;
const Text6 = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  border-width: 1px;
  border-color: #282828;
  border-style: solid;
  width: 130px;
  height: 11px;
  top: -1px;
  left: -1px;
  flex-direction: row;
  justify-content: center;
  border-radius: 10px;
  padding: 12px 0px;
`;
const BlackText = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 500;
  color: #ffffff;
  width: 132px;
  height: 11px;
  background-color: #282828;
  left: 142px;
  flex-direction: row;
  justify-content: center;
  border-radius: 10px;
  padding: 13px 0px;
`;
const Element8 = styled.div`
  width: 90%;
  height: 41px;
  margin: 10px 0px 4px 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Text7 = styled.div`
  font-size: 14px;
  font-family: Ubuntu;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.8);
  top: 14px;
  left: 35px;
`;
const Text8 = styled.div`
  font-size: 14px;
  font-family: Ubuntu;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  top: 13px;
  left: 205px;
`;
const Line = styled.img`
  width: 322px;
  height: 2px;
  position: absolute;
  left: 0.5px;
`;
const Line1 = styled.img`
  width: 322px;
  height: 2px;
  position: absolute;
  top: 40px;
  left: 0.5px;
`;
const Line2 = styled.img`
  width: 1px;
  height: 40px;
  position: absolute;
  top: -39.5px;
  left: 164.5px;
`;
const FlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: ${(props) => props.padding};
`;
const Posts1 = styled.div`
  text-align: center;
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 400;
  color: #ffffff;
`;
const Posts = styled.div`
  font-size: 15px;
  font-family: Ubuntu;
  font-weight: 700;
  color: #ffffff;
  display: contents;
`;
const FlexColumn = styled.div`
  width: 100%;
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  gap: 3px;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const WhiteFlexColumn1 = styled.div`
  height: 408px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 15px;
  padding: 9px 13px 9px 22px;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 8px;
`;
const Ellipse2 = styled.div`
  height: 50px;
  background-image: url("");
  background-size: cover;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 4px 0px 32px;
  margin: 0px 8px 0px 0px;
`;
const Verified = styled.img`
  width: 14px;
  height: 14px;
`;
const FlexColumn1 = styled.div`
  align-self: stretch;
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 2px;
  flex-grow: 1;
  align-items: flex-start;
  padding: 7px 0px;
  margin: 0px 25px 0px 0px;
`;
const Element9 = styled.div`
  align-self: stretch;
  height: 28px;
  position: relative;
  min-width: 180px;
`;
const Text9 = styled.div`
  width: 180px;
  height: 19px;
  font-size: 14px;
  font-family: Ubuntu;
  font-weight: 500;
  position: absolute;
`;
const Text10 = styled.div`
  width: 115px;
  height: 10px;
  font-size: 8px;
  font-family: Ubuntu;
  font-weight: 400;
  position: absolute;
  top: 18px;
`;
const Text11 = styled.div`
  width: 110px;
  height: 10px;
  font-size: 8px;
  font-family: Ubuntu;
  font-weight: 300;
  margin: 0px 0px 0px 1px;
`;
const Text12 = styled.div`
  width: 37px;
  height: 12px;
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 300;
`;
const Line3 = styled.img`
  width: 190px;
  height: 1px;
  align-self: center;
  margin: 0px 0px 14px 0px;
`;
const Paragraph = styled.div`
  height: 59px;
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 400;
  align-self: flex-end;
  margin: 0px 0px 12px 0px;
  white-space: pre-wrap;
`;
const Text13 = styled.div`
  font-size: 10px;
  font-family: Ubuntu;
  color: #4e0ca2;
  display: contents;
`;
const UnsplashsqPLlXc = styled.div`
  width: 313px;
  background-color: #c4c4c4;
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 77px 0px 78px 0px;
  margin: 0px 0px 16px 2px;
`;
const Ellipse1 = styled.div`
  width: 18.88px;
  background-image: url("undefined");
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 8.18px 7.06px 7.02px 7.06px;
`;
const Polygon = styled.img`
  width: 14.58px;
  height: 16.8px;
`;
const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 8.05px 0px;
`;
const Image6 = styled.img`
  width: 26.19px;
  height: 26.95px;
  margin: 0px 31.81px 0px 0px;
`;
const Image7 = styled.img`
  width: 22px;
  height: 23px;
  margin: 0px 32px 0px 0px;
`;
const Image8 = styled.img`
  width: 26.95px;
  height: 26.02px;
  align-self: flex-start;
  margin: 0px 29.05px 0px 0px;
`;
const Image9 = styled.img`
  width: 26.95px;
  height: 26.95px;
  margin: 0px 83.55px 0px 0px;
`;
const Options = styled.img`
  width: 33px;
  height: 11px;
  align-self: flex-start;
  margin: 1.5px 0px 0px 0px;
`;
const Text14 = styled.div`
  width: 22px;
  height: 12px;
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 400;
  margin: ${(props) => props.margin};
`;
const Text15 = styled.div`
  width: 18px;
  height: 12px;
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 400;
  margin: 0px 43px 0px 0px;
`;
const Text16 = styled.div`
  width: 7px;
  height: 12px;
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 400;
  margin: 0px 41px 0px 0px;
`;
const WhiteFlexColumn2 = styled.div`
  height: 76px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 15px;
  padding: 10px 23px 8px 11px;
`;
const Text18 = styled.div`
  width: 49px;
  height: 12px;
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  margin: 0px 0px 4px 3px;
`;
const Element10 = styled.div`
  align-self: stretch;
  height: 38px;
  position: relative;
  min-width: 326px;
  margin: 0px 0px 10px 0px;
`;
const Text19 = styled.div`
  width: 114px;
  height: 12px;
  font-size: 10px;
  font-family: Ubuntu;
  color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 13px;
  left: 9px;
`;
const FlexRow4 = styled.div`
  width: 326px;
  background-image: url("undefined");
  background-size: cover;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
const FlexRow5 = styled.div`
  width: 76px;
  background-image: url("undefined");
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 0px 11px 0px;
`;
const Text20 = styled.div`
  width: 27px;
  height: 15px;
  font-size: 12px;
  font-family: Ubuntu;
  font-weight: 500;
  color: #ffffff;
`;
const Text21 = styled.div`
  width: 87px;
  height: 12px;
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  align-self: flex-end;
  margin: 0px 4px 0px 0px;
`;
