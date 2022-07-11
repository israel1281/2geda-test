import React from "react";
import styled from "styled-components";
export const Outlet2 = ({}) => {
  return (
    <OutletRoot>
      <WhiteFlexColumn>
        <FlexRow>
          <Back src={"https://file.rendit.io/n/aOnamrfdtRvqEw78zAyY.svg"} />
          <Text2>Outlet</Text2>
          <PurpleHeartText>Change location</PurpleHeartText>
        </FlexRow>
        <Text3>Lekki, Lagos NG</Text3>
        <FlexRow1>
          <FlexRow2>
            <Text4 placeholder={"Search product, services,  work etc"} />
            <Search src={"https://file.rendit.io/n/TGK2MZkJ1yqkOpg5BLFQ.svg"} />
          </FlexRow2>
          <PurpleHeartText1>My inventory</PurpleHeartText1>
        </FlexRow1>
      </WhiteFlexColumn>
      <Text9 margin={"0px 0px 13px 14px"}>Trending</Text9>
      <WhiteFlexRow1>
        <FlexColumn alignSelf={"flex-end"}>
          <FlexRow3>
            {[
              {
                src: "https://file.rendit.io/n/7hCLwMqAeCzHHJQQ96Xl.png"
              },
              {
                src: "https://file.rendit.io/n/ckp7lAFSH3z6nuXJTV54.png"
              },
              {
                src: "https://file.rendit.io/n/gxoxtYCzFbDUJcFh8xLv.png"
              }
            ].map((data) => (
              <UnsplashzbZEJJTo src={data.src} />
            ))}
          </FlexRow3>
          <FlexRow4>
            {[
              {
                childText: "Toyota Camry 07",
                margin: "0px 17px 0px 0px"
              },
              {
                childText: "Washing Machine",
                margin: "0px 13px 0px 0px"
              },
              {
                childText: "2 bedroom flat",
                margin: "0"
              }
            ].map((data) => (
              <Text10 margin={data.margin}>{data.childText}</Text10>
            ))}
          </FlexRow4>
          <FlexRow5>
            {[
              {
                childText: "#2,000,000",
                margin: "0px 72px 0px 0px"
              },
              {
                childText: "#50,000",
                margin: "0px 84px 0px 0px"
              },
              {
                childText: "#300,000 per annum",
                margin: "0"
              }
            ].map((data) => (
              <Text13 margin={data.margin}>{data.childText}</Text13>
            ))}
          </FlexRow5>
          <FlexRow6>
            {[
              {
                childText: "Lagos, Nigeria"
              },
              {
                childText: "Abuja, Nigeria"
              },
              {
                childText: "Alakia, Ibadan"
              }
            ].map((data) => (
              <Text16>{data.childText}</Text16>
            ))}
          </FlexRow6>
        </FlexColumn>
        <FlexColumn alignSelf={"inherit"}>
          <Element37>
            <UnsplashDvTcioYUA
              src={"https://file.rendit.io/n/3VkkxksFpRD697BbgygB.png"}
            />
            <UnsplashydMzpsM
              src={"https://file.rendit.io/n/eqsQhA1JzOZSgRwQoG79.png"}
            />
            <UnsplashgVhARBSpQ
              src={"https://file.rendit.io/n/eqsQhA1JzOZSgRwQoG79.png"}
            />
          </Element37>
          <Element38>
            <Text19>Venza ‘12</Text19>
            <Text20 left={"118px"}>Iphone 13 pro</Text20>
            <Text20 left={"236px"}>Pes 5</Text20>
          </Element38>
          <Element39>
            <Text22>#7,000,000</Text22>
            <Text23 left={"118px"}>#950,000</Text23>
            <Text23 left={"236px"}>#300,000</Text23>
          </Element39>
          <Element40>
            <Text25>Lagos, Nigeria</Text25>
            <Text26 left={"119px"}>Abuja, Nigeria</Text26>
            <Text26 left={"237px"}>Alakia, Ibadan</Text26>
          </Element40>
        </FlexColumn>
      </WhiteFlexRow1>
      <FlexRow7>
        <Text28>Automobile</Text28>
        <Text29 margin={"0px 0px 3px 0px"}>See all</Text29>
      </FlexRow7>
      <WhiteRectangle>
        <FlexColumn2>
          <FlexRow3>
            {[
              {
                src: "https://file.rendit.io/n/l4BcpGXi8DUTDkZfKloF.png"
              },
              {
                src: "https://file.rendit.io/n/dn5pmq161LXGGVCM2mI2.png"
              },
              {
                src: "https://file.rendit.io/n/T6nqZtZ3Ume0jMLdi1g1.png"
              }
            ].map((data) => (
              <UnsplashzbZEJJTo src={data.src} />
            ))}
          </FlexRow3>
          <FlexRow4>
            {[
              {
                childText: "Toyota Camry 07",
                margin: "0px 17px 0px 0px"
              },
              {
                childText: "Washing Machine",
                margin: "0px 13px 0px 0px"
              },
              {
                childText: "2 bedroom flat",
                margin: "0"
              }
            ].map((data) => (
              <Text10 margin={data.margin}>{data.childText}</Text10>
            ))}
          </FlexRow4>
          <FlexRow5>
            {[
              {
                childText: "#2,000,000",
                margin: "0px 72px 0px 0px"
              },
              {
                childText: "#50,000",
                margin: "0px 84px 0px 0px"
              },
              {
                childText: "#300,000 per annum",
                margin: "0"
              }
            ].map((data) => (
              <Text13 margin={data.margin}>{data.childText}</Text13>
            ))}
          </FlexRow5>
          <FlexRow6>
            {[
              {
                childText: "Lagos, Nigeria"
              },
              {
                childText: "Abuja, Nigeria"
              },
              {
                childText: "Alakia, Ibadan"
              }
            ].map((data) => (
              <Text16>{data.childText}</Text16>
            ))}
          </FlexRow6>
        </FlexColumn2>
        <FlexColumn3>
          <FlexRow3>
            {[
              {
                src: "https://file.rendit.io/n/dAuTQoCS7fiQO27fRoYZ.png"
              },
              {
                src: "https://file.rendit.io/n/eqsQhA1JzOZSgRwQoG79.png"
              },
              {
                src: "https://file.rendit.io/n/eqsQhA1JzOZSgRwQoG79.png"
              }
            ].map((data) => (
              <UnsplashzbZEJJTo src={data.src} />
            ))}
          </FlexRow3>
          <FlexRow4>
            {[
              {
                childText: "Venza \u201812",
                margin: "0px 60px 0px 0px"
              },
              {
                childText: "Iphone 13 pro",
                margin: "0px 34px 0px 0px"
              },
              {
                childText: "Pes 5",
                margin: "0"
              }
            ].map((data) => (
              <Text10 margin={data.margin}>{data.childText}</Text10>
            ))}
          </FlexRow4>
          <FlexRow5>
            {[
              {
                childText: "#7,000,000",
                margin: "0px 72px 0px 0px"
              },
              {
                childText: "#950,000",
                margin: "0px 79px 0px 0px"
              },
              {
                childText: "#300,000",
                margin: "0"
              }
            ].map((data) => (
              <Text13 margin={data.margin}>{data.childText}</Text13>
            ))}
          </FlexRow5>
          <FlexRow6>
            {[
              {
                childText: "Lagos, Nigeria"
              },
              {
                childText: "Abuja, Nigeria"
              },
              {
                childText: "Alakia, Ibadan"
              }
            ].map((data) => (
              <Text16>{data.childText}</Text16>
            ))}
          </FlexRow6>
        </FlexColumn3>
      </WhiteRectangle>
      <Element41>
        <AD src={"https://file.rendit.io/n/mRmAeKrmHA0h5XyZvnpv.png"} />
        <WhiteFlexColumn1>
          <PurpleHeartText2>Add your product</PurpleHeartText2>
        </WhiteFlexColumn1>
      </Element41>
      <FlexRow16>
        <Text28>Property and rentals</Text28>
        <Text48>See all</Text48>
      </FlexRow16>
      <WhiteRectangle1>
        <FlexColumn2>
          <FlexRow3>
            <UnsplashzbZEJJTo
              src={"https://file.rendit.io/n/4FK85ublSLNfC8CI2Dtb.png"}
            />
            <UnsplashzbZEJJTo
              src={"https://file.rendit.io/n/w2z70Azz7QTzvnjTg2ea.png"}
            />
            <Text49>See all</Text49>
          </FlexRow3>
          <FlexRow4>
            {[
              {
                childText: "Toyota Camry 07",
                margin: "0px 17px 0px 0px"
              },
              {
                childText: "Washing Machine",
                margin: "0px 13px 0px 0px"
              },
              {
                childText: "2 bedroom flat",
                margin: "0"
              }
            ].map((data) => (
              <Text10 margin={data.margin}>{data.childText}</Text10>
            ))}
          </FlexRow4>
          <FlexRow5>
            {[
              {
                childText: "#2,000,000",
                margin: "0px 72px 0px 0px"
              },
              {
                childText: "#50,000",
                margin: "0px 84px 0px 0px"
              },
              {
                childText: "#300,000 per annum",
                margin: "0"
              }
            ].map((data) => (
              <Text13 margin={data.margin}>{data.childText}</Text13>
            ))}
          </FlexRow5>
          <FlexRow6>
            {[
              {
                childText: "Lagos, Nigeria"
              },
              {
                childText: "Abuja, Nigeria"
              },
              {
                childText: "Alakia, Ibadan"
              }
            ].map((data) => (
              <Text16>{data.childText}</Text16>
            ))}
          </FlexRow6>
        </FlexColumn2>
        <FlexColumn3>
          <FlexRow3>
            {[
              {
                src: "https://file.rendit.io/n/eqsQhA1JzOZSgRwQoG79.png"
              },
              {
                src: "https://file.rendit.io/n/eqsQhA1JzOZSgRwQoG79.png"
              },
              {
                src: "https://file.rendit.io/n/eqsQhA1JzOZSgRwQoG79.png"
              }
            ].map((data) => (
              <UnsplashzbZEJJTo src={data.src} />
            ))}
          </FlexRow3>
          <FlexRow4>
            {[
              {
                childText: "Venza \u201812",
                margin: "0px 60px 0px 0px"
              },
              {
                childText: "Iphone 13 pro",
                margin: "0px 34px 0px 0px"
              },
              {
                childText: "Pes 5",
                margin: "0"
              }
            ].map((data) => (
              <Text10 margin={data.margin}>{data.childText}</Text10>
            ))}
          </FlexRow4>
          <FlexRow5>
            {[
              {
                childText: "#7,000,000",
                margin: "0px 72px 0px 0px"
              },
              {
                childText: "#950,000",
                margin: "0px 79px 0px 0px"
              },
              {
                childText: "#300,000",
                margin: "0"
              }
            ].map((data) => (
              <Text13 margin={data.margin}>{data.childText}</Text13>
            ))}
          </FlexRow5>
          <FlexRow6>
            {[
              {
                childText: "Lagos, Nigeria"
              },
              {
                childText: "Abuja, Nigeria"
              },
              {
                childText: "Alakia, Ibadan"
              }
            ].map((data) => (
              <Text16>{data.childText}</Text16>
            ))}
          </FlexRow6>
        </FlexColumn3>
      </WhiteRectangle1>
      <FlexRow25>
        <Text28>Phones and Assesories</Text28>
        <Text29 margin={"0"}>See all</Text29>
      </FlexRow25>
      <WhiteRectangle2 margin={"0px 0px 35px 0px"}>
        <FlexColumn2>
          <FlexRow3>
            <UnsplashzbZEJJTo
              src={"https://file.rendit.io/n/5IsMoXBMO32F1lmD7uHt.png"}
            />
            <UnsplashzbZEJJTo
              src={"https://file.rendit.io/n/45GHUnB47pyiWZbxVrpu.png"}
            />
            <Text70>See all</Text70>
          </FlexRow3>
          <FlexRow4>
            {[
              {
                childText: "Toyota Camry 07",
                margin: "0px 17px 0px 0px"
              },
              {
                childText: "Washing Machine",
                margin: "0px 13px 0px 0px"
              },
              {
                childText: "2 bedroom flat",
                margin: "0"
              }
            ].map((data) => (
              <Text10 margin={data.margin}>{data.childText}</Text10>
            ))}
          </FlexRow4>
          <FlexRow5>
            {[
              {
                childText: "#2,000,000",
                margin: "0px 72px 0px 0px"
              },
              {
                childText: "#50,000",
                margin: "0px 84px 0px 0px"
              },
              {
                childText: "#300,000 per annum",
                margin: "0"
              }
            ].map((data) => (
              <Text13 margin={data.margin}>{data.childText}</Text13>
            ))}
          </FlexRow5>
          <FlexRow6>
            {[
              {
                childText: "Lagos, Nigeria"
              },
              {
                childText: "Abuja, Nigeria"
              },
              {
                childText: "Alakia, Ibadan"
              }
            ].map((data) => (
              <Text16>{data.childText}</Text16>
            ))}
          </FlexRow6>
        </FlexColumn2>
        <FlexColumn3>
          <FlexRow3>
            {[
              {
                src: "https://file.rendit.io/n/eqsQhA1JzOZSgRwQoG79.png"
              },
              {
                src: "https://file.rendit.io/n/eqsQhA1JzOZSgRwQoG79.png"
              },
              {
                src: "https://file.rendit.io/n/eqsQhA1JzOZSgRwQoG79.png"
              }
            ].map((data) => (
              <UnsplashzbZEJJTo src={data.src} />
            ))}
          </FlexRow3>
          <FlexRow4>
            {[
              {
                childText: "Venza \u201812",
                margin: "0px 60px 0px 0px"
              },
              {
                childText: "Iphone 13 pro",
                margin: "0px 34px 0px 0px"
              },
              {
                childText: "Pes 5",
                margin: "0"
              }
            ].map((data) => (
              <Text10 margin={data.margin}>{data.childText}</Text10>
            ))}
          </FlexRow4>
          <FlexRow5>
            {[
              {
                childText: "#7,000,000",
                margin: "0px 72px 0px 0px"
              },
              {
                childText: "#950,000",
                margin: "0px 79px 0px 0px"
              },
              {
                childText: "#300,000",
                margin: "0"
              }
            ].map((data) => (
              <Text13 margin={data.margin}>{data.childText}</Text13>
            ))}
          </FlexRow5>
          <FlexRow6>
            {[
              {
                childText: "Lagos, Nigeria"
              },
              {
                childText: "Abuja, Nigeria"
              },
              {
                childText: "Alakia, Ibadan"
              }
            ].map((data) => (
              <Text16>{data.childText}</Text16>
            ))}
          </FlexRow6>
        </FlexColumn3>
      </WhiteRectangle2>
      <FlexRow34>
        <Text28>Beauty & Cosmetics</Text28>
        <Text29 margin={"0"}>See all</Text29>
      </FlexRow34>
      <WhiteRectangle3>
        <FlexColumn2>
          <FlexRow3>
            <UnsplashzbZEJJTo
              src={"https://file.rendit.io/n/7hCLwMqAeCzHHJQQ96Xl.png"}
            />
            <UnsplashzbZEJJTo
              src={"https://file.rendit.io/n/ckp7lAFSH3z6nuXJTV54.png"}
            />
            <Text91>See all</Text91>
          </FlexRow3>
          <FlexRow4>
            {[
              {
                childText: "Toyota Camry 07",
                margin: "0px 17px 0px 0px"
              },
              {
                childText: "Washing Machine",
                margin: "0px 13px 0px 0px"
              },
              {
                childText: "2 bedroom flat",
                margin: "0"
              }
            ].map((data) => (
              <Text10 margin={data.margin}>{data.childText}</Text10>
            ))}
          </FlexRow4>
          <FlexRow5>
            {[
              {
                childText: "#2,000,000",
                margin: "0px 72px 0px 0px"
              },
              {
                childText: "#50,000",
                margin: "0px 84px 0px 0px"
              },
              {
                childText: "#300,000 per annum",
                margin: "0"
              }
            ].map((data) => (
              <Text13 margin={data.margin}>{data.childText}</Text13>
            ))}
          </FlexRow5>
          <FlexRow6>
            {[
              {
                childText: "Lagos, Nigeria"
              },
              {
                childText: "Abuja, Nigeria"
              },
              {
                childText: "Alakia, Ibadan"
              }
            ].map((data) => (
              <Text16>{data.childText}</Text16>
            ))}
          </FlexRow6>
        </FlexColumn2>
        <FlexColumn3>
          <FlexRow3>
            {[
              {
                src: "https://file.rendit.io/n/eqsQhA1JzOZSgRwQoG79.png"
              },
              {
                src: "https://file.rendit.io/n/eqsQhA1JzOZSgRwQoG79.png"
              },
              {
                src: "https://file.rendit.io/n/eqsQhA1JzOZSgRwQoG79.png"
              }
            ].map((data) => (
              <UnsplashzbZEJJTo src={data.src} />
            ))}
          </FlexRow3>
          <FlexRow4>
            {[
              {
                childText: "Venza \u201812",
                margin: "0px 60px 0px 0px"
              },
              {
                childText: "Iphone 13 pro",
                margin: "0px 34px 0px 0px"
              },
              {
                childText: "Pes 5",
                margin: "0"
              }
            ].map((data) => (
              <Text10 margin={data.margin}>{data.childText}</Text10>
            ))}
          </FlexRow4>
          <FlexRow5>
            {[
              {
                childText: "#7,000,000",
                margin: "0px 72px 0px 0px"
              },
              {
                childText: "#950,000",
                margin: "0px 79px 0px 0px"
              },
              {
                childText: "#300,000",
                margin: "0"
              }
            ].map((data) => (
              <Text13 margin={data.margin}>{data.childText}</Text13>
            ))}
          </FlexRow5>
          <FlexRow6>
            {[
              {
                childText: "Lagos, Nigeria"
              },
              {
                childText: "Abuja, Nigeria"
              },
              {
                childText: "Alakia, Ibadan"
              }
            ].map((data) => (
              <Text16>{data.childText}</Text16>
            ))}
          </FlexRow6>
        </FlexColumn3>
      </WhiteRectangle3>
      <Text9 margin={"0px 0px 11px 23px"}>Clothings & Assesories</Text9>
      <WhiteRectangle2 margin={"0"}>
        <FlexColumn2>
          <FlexRow3>
            {[
              {
                src: "https://file.rendit.io/n/7hCLwMqAeCzHHJQQ96Xl.png"
              },
              {
                src: "https://file.rendit.io/n/ckp7lAFSH3z6nuXJTV54.png"
              },
              {
                src: "https://file.rendit.io/n/gxoxtYCzFbDUJcFh8xLv.png"
              }
            ].map((data) => (
              <UnsplashzbZEJJTo src={data.src} />
            ))}
          </FlexRow3>
          <FlexRow4>
            {[
              {
                childText: "Toyota Camry 07",
                margin: "0px 17px 0px 0px"
              },
              {
                childText: "Washing Machine",
                margin: "0px 13px 0px 0px"
              },
              {
                childText: "2 bedroom flat",
                margin: "0"
              }
            ].map((data) => (
              <Text10 margin={data.margin}>{data.childText}</Text10>
            ))}
          </FlexRow4>
          <FlexRow5>
            {[
              {
                childText: "#2,000,000",
                margin: "0px 72px 0px 0px"
              },
              {
                childText: "#50,000",
                margin: "0px 84px 0px 0px"
              },
              {
                childText: "#300,000 per annum",
                margin: "0"
              }
            ].map((data) => (
              <Text13 margin={data.margin}>{data.childText}</Text13>
            ))}
          </FlexRow5>
          <FlexRow6>
            {[
              {
                childText: "Lagos, Nigeria"
              },
              {
                childText: "Abuja, Nigeria"
              },
              {
                childText: "Alakia, Ibadan"
              }
            ].map((data) => (
              <Text16>{data.childText}</Text16>
            ))}
          </FlexRow6>
        </FlexColumn2>
        <FlexColumn3>
          <FlexRow3>
            {[
              {
                src: "https://file.rendit.io/n/eqsQhA1JzOZSgRwQoG79.png"
              },
              {
                src: "https://file.rendit.io/n/eqsQhA1JzOZSgRwQoG79.png"
              },
              {
                src: "https://file.rendit.io/n/eqsQhA1JzOZSgRwQoG79.png"
              }
            ].map((data) => (
              <UnsplashzbZEJJTo src={data.src} />
            ))}
          </FlexRow3>
          <FlexRow4>
            {[
              {
                childText: "Venza \u201812",
                margin: "0px 60px 0px 0px"
              },
              {
                childText: "Iphone 13 pro",
                margin: "0px 34px 0px 0px"
              },
              {
                childText: "Pes 5",
                margin: "0"
              }
            ].map((data) => (
              <Text10 margin={data.margin}>{data.childText}</Text10>
            ))}
          </FlexRow4>
          <FlexRow5>
            {[
              {
                childText: "#7,000,000",
                margin: "0px 72px 0px 0px"
              },
              {
                childText: "#950,000",
                margin: "0px 79px 0px 0px"
              },
              {
                childText: "#300,000",
                margin: "0"
              }
            ].map((data) => (
              <Text13 margin={data.margin}>{data.childText}</Text13>
            ))}
          </FlexRow5>
          <FlexRow6>
            {[
              {
                childText: "Lagos, Nigeria"
              },
              {
                childText: "Abuja, Nigeria"
              },
              {
                childText: "Alakia, Ibadan"
              }
            ].map((data) => (
              <Text16>{data.childText}</Text16>
            ))}
          </FlexRow6>
        </FlexColumn3>
      </WhiteRectangle2>
    </OutletRoot>
  );
};
const OutletRoot = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  align-items: flex-end;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;
const WhiteFlexColumn = styled.div`
  width: 100%;
  height: 174px;
  background-color: #ffffff;
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  padding: 15px 18px 13px 19px;
  margin: 0px 0px 16px 0px;
`;
const FlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
`;
const Back = styled.img`
  width: 47px;
  height: 50px;
  margin: 0px 0px 0px 0px;
`;
const Text2 = styled.div`
  font-size: 23px;
  font-family: Ubuntu;
  font-weight: 700;
  color: #4e0ca2;
  margin: 0px 0px 0px 0px;
`;
const PurpleHeartText = styled.div`
  display: flex;
  font-size: 7px;
  font-family: Ubuntu;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  align-self: flex-end;
  width: 78px;
  height: 30px;
  background-color: #4e0ca2;
  flex-direction: row;
  justify-content: center;
  border-radius: 4px;
  padding: 5px 30px;
  margin: 15px 0px 15px 0px;
`;
const Text3 = styled.div`
  font-size: 14px;
  font-family: Ubuntu;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  margin: 0px 0px 18px 0px;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
  align-items: center;
`;
const FlexRow2 = styled.div`
  border-width: 1px;
  border-color: rgba(40, 40, 40, 0.4);
  border-style: solid;
  display: flex;
  flex-direction: row;
  gap: 49px;
  align-items: center;
  border-radius: 5px;
  padding: 15px 13px 12px 9px;
`;
const Text4 = styled.input`
  font-size: 8px;
  font-family: Ubuntu;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.4);
  align-self: flex-start;
  white-space: pre-wrap;
  padding: 0px;
  border-width: 0px;
  background: none;
  width: 100%;
  ::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
  display: inline-block;
  outline-width: 0px;
`;
const Search = styled.img`
  width: 10px;
  height: 10px;
`;
const PurpleHeartText1 = styled.div`
  display: flex;
  font-size: 12px;
  font-family: Ubuntu;
  font-weight: 400;
  color: #ffffff;
  width: 114px;
  height: 14px;
  background-color: #4e0ca2;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 13px 0px 12px 0px;
`;
const WhiteFlexRow = styled.div`
  width: 349px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 5px;
  margin: 0px 0px 32px 0px;
`;
const Text5 = styled.div`
  display: flex;
  font-size: 15px;
  font-family: Ubuntu;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.4);
  border-style: solid;
  width: 34px;
  height: 17px;
  position: absolute;
  left: -99px;
  flex-direction: row;
  border-radius: 7px;
  padding: 6px 33px 7px 24px;
`;
const CottonCandyText = styled.div`
  display: flex;
  font-size: 15px;
  font-family: Ubuntu;
  font-weight: 400;
  color: #ffffff;
  border-width: 1px;
  border-style: solid;
  width: 93px;
  height: 17px;
  background-color: #d8b5d3;
  position: absolute;
  flex-direction: row;
  justify-content: center;
  border-radius: 7px;
  padding: 7px 0px 8px 0px;
`;
const Text6 = styled.div`
  display: flex;
  font-size: 15px;
  font-family: Ubuntu;
  font-weight: 400;
  color: rgba(12, 12, 12, 0.4);
  align-self: center;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.25);
  border-style: solid;
  width: 33px;
  height: 17px;
  flex-direction: row;
  border-radius: 7px;
  padding: 6px 32px 7px 26px;
`;
const Element35 = styled.div`
  width: 53px;
  height: 32px;
  position: absolute;
`;
const Element36 = styled.div`
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.25);
  border-style: solid;
  width: 52px;
  height: 30px;
  position: absolute;
  top: 1px;
  left: 1px;
  border-radius: 7px;
`;
const Text7 = styled.div`
  font-size: 15px;
  font-family: Ubuntu;
  font-weight: 400;
  color: rgba(12, 12, 12, 0.4);
  width: 34px;
  height: 17px;
  position: absolute;
  top: 7px;
  left: 19px;
`;
const Erty = styled.div`
  display: flex;
  font-size: 15px;
  font-family: Ubuntu;
  font-weight: 400;
  color: rgba(12, 12, 12, 0.4);
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.25);
  border-style: solid;
  width: 91px;
  height: 17px;
  position: absolute;
  top: -1px;
  left: 98px;
  flex-direction: row;
  justify-content: center;
  border-radius: 7px;
  padding: 6px 0px 7px 0px;
`;
const Text8 = styled.div`
  display: flex;
  font-size: 15px;
  font-family: Ubuntu;
  font-weight: 400;
  color: rgba(12, 12, 12, 0.4);
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.25);
  border-style: solid;
  width: 54px;
  height: 17px;
  position: absolute;
  top: -1px;
  left: 197px;
  flex-direction: row;
  border-radius: 7px;
  padding: 6px 15px 7px 22px;
`;
const WhiteFlexRow1 = styled.div`
  height: 164px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  gap: 7px;
  justify-content: center;
  align-items: flex-start;
  margin: 0px 0px 43px 0px;
`;
const Element37 = styled.div`
  height: 124px;
  position: relative;
  min-width: 4px;
  margin: 0px 0px 5px 0px;
`;
const UnsplashDvTcioYUA = styled.img`
  width: 4px;
  height: 124px;
  position: absolute;
`;
const UnsplashydMzpsM = styled.img`
  width: 111px;
  height: 124px;
  position: absolute;
  left: 118px;
`;
const UnsplashgVhARBSpQ = styled.img`
  width: 111px;
  height: 124px;
  position: absolute;
  left: 236px;
`;
const Element38 = styled.div`
  height: 15px;
  position: relative;
  min-width: 4px;
`;
const Text19 = styled.div`
  font-size: 13px;
  font-family: Ubuntu;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  width: 4px;
  height: 15px;
  position: absolute;
`;
const Element39 = styled.div`
  height: 10px;
  position: relative;
  min-width: 4px;
  margin: 0px 0px 1px 0px;
`;
const Text22 = styled.div`
  font-size: 9px;
  font-family: Ubuntu;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  width: 4px;
  height: 10px;
  position: absolute;
`;
const Element40 = styled.div`
  height: 8px;
  position: relative;
  min-width: 4px;
`;
const Text25 = styled.div`
  font-size: 7px;
  font-family: Ubuntu;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.8);
  width: 3px;
  height: 8px;
  position: absolute;
  left: 1px;
`;
const FlexRow7 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  gap: 191px;
  align-items: center;
  padding: 0px 25px 0px 21px;
  margin: 0px 0px 11px 0px;
`;
const WhiteRectangle = styled.div`
  width: 354px;
  height: 164px;
  background-color: #ffffff;
  position: relative;
  margin: 0px 0px 17px 0px;
`;
const Element41 = styled.div`
  align-self: stretch;
  height: 94px;
  position: relative;
  min-width: 375px;
  margin: 0px 0px 29px 0px;
`;
const AD = styled.img`
  width: 338px;
  height: 79px;
  position: absolute;
  top: 15px;
  left: 19px;
`;
const WhiteFlexColumn1 = styled.div`
  height: 77px;
  background-color: #ffffff;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 16px;
`;
const PurpleHeartText2 = styled.div`
  display: flex;
  font-size: 14px;
  font-family: Ubuntu;
  font-weight: 400;
  color: #ffffff;
  width: 343px;
  height: 16px;
  background-color: #4e0ca2;
  flex-direction: row;
  justify-content: center;
  border-radius: 8px;
  padding: 14px 0px 13px 0px;
`;
const FlexRow16 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 22px;
  margin: 0px 0px 11px 0px;
`;
const Text48 = styled.div`
  font-size: 12px;
  font-family: Ubuntu;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  align-self: flex-start;
  margin: 3px 0px 0px 0px;
`;
const WhiteRectangle1 = styled.div`
  width: 353px;
  height: 164px;
  background-color: #ffffff;
  position: relative;
  margin: 0px 0px 29px 0px;
`;
const Text49 = styled.div`
  display: flex;
  font-size: 12px;
  font-family: Ubuntu;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  width: 37px;
  height: 74px;
  background-image: url("https://file.rendit.io/n/CEP7CdkX0lipJHIOc0Ny.png");
  background-size: cover;
  flex-direction: column;
  justify-content: flex-end;
  padding: 25px 17px 25px 57px;
`;
const FlexRow25 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 106px;
  align-items: center;
  padding: 0px 13px;
  margin: 0px 0px 11px 0px;
`;
const Text70 = styled.div`
  display: flex;
  font-size: 12px;
  font-family: Ubuntu;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  width: 37px;
  height: 86px;
  background-image: url("https://file.rendit.io/n/rsyN74nSRK4MwGynQN0w.png");
  background-size: cover;
  flex-direction: column;
  justify-content: flex-end;
  padding: 19px 17px 19px 57px;
`;
const FlexRow34 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 128px;
  align-items: center;
  padding: 0px 15px;
  margin: 0px 0px 11px 0px;
`;
const WhiteRectangle3 = styled.div`
  width: 351px;
  height: 164px;
  background-color: #ffffff;
  position: relative;
  margin: 0px 0px 32px 0px;
`;
const Text91 = styled.div`
  display: flex;
  font-size: 12px;
  font-family: Ubuntu;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  width: 37px;
  height: 80px;
  background-image: url("https://file.rendit.io/n/gxoxtYCzFbDUJcFh8xLv.png");
  background-size: cover;
  flex-direction: column;
  justify-content: flex-end;
  padding: 22px 19px 22px 55px;
`;
const Element33 = styled.div`
  height: 32px;
  position: relative;
  flex-grow: 1;
  align-items: center;
  width: ${(props) => props.width};
`;
const Text9 = styled.div`
  font-size: 18px;
  font-family: Ubuntu;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.6);
  align-self: flex-start;
  margin: ${(props) => props.margin};
`;
const FlexColumn = styled.div`
  height: 163px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: ${(props) => props.alignSelf};
`;
const FlexRow3 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 5px 0px;
`;
const UnsplashzbZEJJTo = styled.img`
  width: 111px;
  height: 124px;
`;
const FlexRow4 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Text10 = styled.div`
  font-size: 13px;
  font-family: Ubuntu;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  margin: ${(props) => props.margin};
`;
const FlexRow5 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 1px 0px;
`;
const Text13 = styled.div`
  font-size: 9px;
  font-family: Ubuntu;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  margin: ${(props) => props.margin};
`;
const FlexRow6 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 74px;
  align-items: center;
  padding: 0px 1px;
`;
const Text16 = styled.div`
  font-size: 7px;
  font-family: Ubuntu;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.8);
`;
const Text20 = styled.div`
  font-size: 13px;
  font-family: Ubuntu;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  position: absolute;
  left: ${(props) => props.left};
`;
const Text23 = styled.div`
  font-size: 9px;
  font-family: Ubuntu;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  position: absolute;
  left: ${(props) => props.left};
`;
const Text26 = styled.div`
  font-size: 7px;
  font-family: Ubuntu;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.8);
  position: absolute;
  left: ${(props) => props.left};
`;
const Text28 = styled.div`
  font-size: 18px;
  font-family: Ubuntu;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.6);
`;
const Text29 = styled.div`
  font-size: 12px;
  font-family: Ubuntu;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  align-self: flex-end;
  margin: ${(props) => props.margin};
`;
const FlexColumn2 = styled.div`
  height: 163px;
  display: flex;
  position: absolute;
  top: 1px;
  flex-direction: column;
  justify-content: center;
`;
const FlexColumn3 = styled.div`
  height: 163px;
  display: flex;
  position: absolute;
  left: 354px;
  flex-direction: column;
  justify-content: center;
`;
const WhiteRectangle2 = styled.div`
  width: 352px;
  height: 164px;
  background-color: #ffffff;
  position: relative;
  margin: ${(props) => props.margin};
`;
