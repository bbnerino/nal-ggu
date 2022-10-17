import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import StartSelectBox from '../../component/start/startSelectBox';
import { startState } from '../../store/state/startData';
import theme from '../../styles/theme';

interface Props {
  title: string;
  icon: string;
  color: string;
  onClick: () => void;
}

const Start = () => {
  const [startData, setStartData] = useRecoilState(startState);
  const presetData = {
    presets: [
      { id: '1', title: '비가 오는지 궁금해요', icon: '☔', color: '#609FFF' },
      {
        id: '2',
        title: '달릴만한 날씨인지 궁금해요',
        icon: '🏃',
        color: '#FF7A7A',
      },
      {
        id: '3',
        title: '하늘 상태가 궁금해요',
        icon: '🌤️',
        color: '#B470EA',
      },
      {
        id: '4',
        title: '꿉꿉하진 않은지 궁금해요',
        icon: '🌫️',
        color: '#FFC42E',
      },
      { id: '5', title: '아무렇게나 해주세요', icon: '🛏️', color: '#61C3A0' },
    ],
    selfCustom: [{ title: '제가 커스텀할래요', icon: '🌈', color: '#929292' }],
  };

  const initialData = [
    [
      {
        sort: '비',
        category: 'POP',
        title: '강수확률',
        size: '2',
        color: '#64B2E3',
      },
      {
        sort: '비',
        category: 'PCP',
        title: '1시간 강수량',
        size: '2',
        color: '#64B2E3',
      },
    ],
    [
      {
        sort: '비',
        category: 'POP',
        title: '강수확률',
        size: '2',
        color: '#64B2E3',
      },
      {
        sort: '대기',
        category: 'TMP',
        title: '1시간 기온',
        size: '2',
        color: '#64B2E3',
      },
    ],
    [
      {
        sort: '대기',
        category: 'SKY',
        title: '하늘상태',
        size: '2',
        color: '#64B2E3',
      },
      {
        sort: '대기',
        category: 'TMP',
        title: '1시간 기온',
        size: '2',
        color: '#64B2E3',
      },
    ],
    [
      {
        sort: '대기',
        category: 'REH',
        title: '습도',
        size: '2',
        color: '#64B2E3',
      },
      {
        sort: '비',
        category: 'POP',
        title: '강수확률',
        size: '2',
        color: '#64B2E3',
      },
    ],
    [
      {
        sort: '대기',
        category: 'SKY',
        title: '하늘상태',
        size: '2',
        color: '#64B2E3',
      },
      {
        sort: '대기',
        category: 'TMP',
        title: '1시간 기온',
        size: '2',
        color: '#64B2E3',
      },
      {
        sort: '비',
        category: 'PCP',
        title: '1시간 강수량',
        size: '1',
        color: '#64B2E3',
      },
      {
        sort: '비',
        category: 'REH',
        title: '습도',
        size: '1',
        color: '#64B2E3',
      },
      {
        sort: '바람',
        category: 'WSD',
        title: '풍속',
        size: '1',
        color: '#64B2E3',
      },
      {
        sort: '바람',
        category: 'VEC',
        title: '풍향',
        size: '1',
        color: '#64B2E3',
      },
    ],
  ];

  const navigate = useNavigate();

  const navigateSetup = () => {
    navigate('/setup');
  };

  const navigateMain = () => {
    navigate('/main');
  };

  const setStoreInitialData = (id: string) => {
    setStartData(initialData[Number(id) - 1]);
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
            <span className="SubContent">
              저에게 궁금한게 무엇인가요? 선택해주세요!
            </span>
          </Hello>
        </HelloWrapper>
        <BoxWrapper>
          {presetData.presets.map((presetData) => (
            <div
              key={presetData.id}
              style={{ width: '100%' }}
              onClick={() => {
                setStoreInitialData(presetData.id);
                navigateMain();
              }}
            >
              <StartSelectBox
                key={presetData.id}
                title={presetData.title}
                icon={presetData.icon}
                color={presetData.color}
              />
            </div>
          ))}
          <Divider></Divider>
          <div style={{ width: '100%' }} onClick={navigateSetup}>
            <StartSelectBox
              title={presetData.selfCustom[0].title}
              icon={presetData.selfCustom[0].icon}
              color={presetData.selfCustom[0].color}
            />
          </div>
        </BoxWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  padding-left: 7rem;
  padding-right: 7rem;
  user-select: none;
  @media screen and (max-width: 32rem) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 32rem) {
    font-size: 0.5rem;
  }
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
  @media screen and (max-width: 32rem) {
    font-size: 1.5rem;
  }

  .SubContent {
    color: black;
    font-size: 1.5rem;
    @media screen and (max-width: 32rem) {
      font-size: 1rem;
    }
  }
`;

const AppTitle = styled.span`
  font-size: 2rem;
  font-weight: bold;
  @media screen and (max-width: 32rem) {
    font-size: 1rem;
  }
`;
const Logo = styled.img`
  width: 5rem;
  margin-right: 0.5rem;
  @media screen and (max-width: 32rem) {
    width: 3rem;
  }
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
