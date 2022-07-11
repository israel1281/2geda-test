import React from "react";
import { Logo } from "./assets/_2GEDA21.png";
import styled from "styled-components";
import ReactLoading from "react-loading";
export const Splash1 = ({}) => {
  return (
    <SplashRoot>
      <GEDA src={Logo} alt="logo" />
      <Text1>The Platform we build together</Text1>
      <ReactLoading
        type="spinningBubbles"
        color="#fff"
        height={40}
        width={40}
        marginTop={20}
      />
    </SplashRoot>
  );
};
const SplashRoot = styled.div`
  width: 100%;
  height: 100%;
  background-color: #4e0ca2;
  position: fixed;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  margin: auto;
  align-items: center;
  padding: 291px 83px 291px 84px;
`;
const Text1 = styled.div`
  font-size: 12px;
  font-family: Roboto;
  font-weight: 500;
  color: #ffffff;
  width: 180px;
`;
const GEDA = styled.img`
  width: 50%;
`;
