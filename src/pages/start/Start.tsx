import React from 'react';
import styled from 'styled-components';
import StartSelectBox from '../../component/start/startSelectBox';

const Start = () => {
  const data = {
    selectBox: [
      { title: '비가 오는지 궁금해요', icon: '☔', color: '#FF7A7A' },
      { title: '달릴만한 날씨인지 궁금해요', icon: '🏃', color: '#609FFF' },
      { title: '미세먼지가 궁금해요', icon: '😷', color: '#B470EA' },
      { title: '선크림 발라야 할까요?', icon: '🌞', color: '#FFC42E' },
      { title: '아무렇게나 해줘', icon: '🛏️', color: '#61C3A0' },
      { title: '저는 제가 커스텀할래요', icon: '🌈', color: '#929292' },
    ],
  };

  return (
    <>
      <LogoWrapper>
        <Logo src='/assets/sun.png' />
        <AppTitle>NALGGU</AppTitle>
      </LogoWrapper>
      <HelloWrapper>
        <Hello>
          안녕하세요 저는 <span>날꾸</span>에요! <br />
          <br />
          저에게 궁금한게 무엇인가요?
          <br /> 선택해주세요!
        </Hello>
      </HelloWrapper>
      <BoxWrapper>
        {data.selectBox.map((data) => (
          <StartSelectBox
            title={data.title}
            icon={data.icon}
            color={data.color}
          />
        ))}
      </BoxWrapper>
    </>
  );
};

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const HelloWrapper = styled.div``;

const Hello = styled.div`
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
`;

const BoxWrapper = styled.div``;

export default Start;
