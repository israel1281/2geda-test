import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Splash1 } from "./Splash1";
import { Carousel } from "antd";

const LandingIntro = [
  {
    title: "Unlock Business and Personal Potentials"
  },
  {
    title: "Connect with Business around your locality"
  },
  {
    title: "Post free ads instantly on the Marketplace"
  }
];

export const Onboarding1 = ({}) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  const navigate = useNavigate();

  const Landing = () => {
    return (
      <OnboardingRoot>
        <GEDA src={"https://file.rendit.io/n/lEe43NhdRn0Jp6gejHVT.png"} />
        <Element3>
          <Carousel autoplay>
            {LandingIntro.map((item, index) => {
              return (
                <div key={index}>
                  <div
                    style={{
                      width: "70%",
                      fontSize: "35px",
                      fontWeight: "500"
                    }}
                  >
                    {item.title}
                  </div>
                  <div className="intro-text">
                    <p>
                      Meet prospective clients and vendors for your next product
                      or service needs
                    </p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </Element3>
        <PurpleHeartText
          onClick={() => {
            navigate("/signup");
          }}
        >
          Open an account
        </PurpleHeartText>
        <Text2
          onClick={() => {
            navigate("/signin");
          }}
        >
          Sign in
        </Text2>
      </OnboardingRoot>
    );
  };
  return <>{isLoading ? <Splash1 /> : <Landing />}</>;
};
const OnboardingRoot = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  position: fixed;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  align-items: flex-start;
  padding: 15px 18px 15px 19px;
`;
const GEDA = styled.img`
  width: 77px;
  height: 78px;
  margin: 0px 0px 30px 17px;
`;
const Element3 = styled.div`
  align-self: stretch;
  height: 192px;
  position: relative;
  min-width: 100%;
  margin: 0px 0px 241px 0px;
`;
const PurpleHeartText = styled.div`
  display: flex;
  font-size: 17px;
  font-family: Ubuntu;
  font-weight: 500;
  color: #ffffff;
  width: 95%;
  height: 25px;
  background-color: #4e0ca2;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 18px 0px 20px 0px;
  margin: 0px 0px 7px 8px;
  cursor: pointer;
`;
const Text2 = styled.div`
  display: flex;
  font-size: 17px;
  font-family: Ubuntu;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.3);
  border-style: solid;
  width: 95%;
  height: 25px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 18px 0px;
  margin: 0px 0px 0px 7px;
  cursor: pointer;
`;
