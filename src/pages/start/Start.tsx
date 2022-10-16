import React from "react";
import styled from "styled-components";
import StartSelectBox from "../../component/start/startSelectBox";
import theme from "../../styles/theme";

const Start = () => {
  const presetData = {
    presets: [
      { id: "1", title: "비가 오는지 궁금해요", icon: "☔", color: "#609FFF" },
      {
        id: "2",
        title: "달릴만한 날씨인지 궁금해요",
        icon: "🏃",
        color: "#FF7A7A",
      },
      { id: "3", title: "미세먼지가 궁금해요", icon: "😷", color: "#B470EA" },
      { id: "4", title: "선크림 발라야 할까요?", icon: "🌞", color: "#FFC42E" },
      { id: "5", title: "아무렇게나 해줘", icon: "🛏️", color: "#61C3A0" },
    ],
    selfCustom: [
      { title: "저는 제가 커스텀할래요", icon: "🌈", color: "#929292" },
    ],
  };

  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <Logo src="/assets/sun.png" />
          <AppTitle>NALGGU</AppTitle>
        </LogoWrapper>
        <HelloWrapper>
          <Hello>
            안녕하세요. 저는 <span>날꾸</span>에요! <br />
            <br />
            저에게 궁금한게 무엇인가요?
            <br /> 선택해주세요!
          </Hello>
        </HelloWrapper>
        <BoxWrapper>
          {presetData.presets.map((presetData) => (
            <StartSelectBox
              key={presetData.id}
              title={presetData.title}
              icon={presetData.icon}
              color={presetData.color}
            />
          ))}
          <Divider></Divider>
          <StartSelectBox
            title={presetData.selfCustom[0].title}
            icon={presetData.selfCustom[0].icon}
            color={presetData.selfCustom[0].color}
          />
        </BoxWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: mintcream;
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  padding-left: 7rem;
  padding-right: 7rem;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const HelloWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
`;

const Hello = styled.div`
  font-size: 2rem;
  font-weight: bolder;
  span {
    color: #6d39ff;
  }
`;

const AppTitle = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;
const Logo = styled.img`
  width: 5rem;
  margin-right: 0.5rem;
`;

const Divider = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  border-top: solid 2px lightgray;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Start;
