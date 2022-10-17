import React, { useEffect, useState } from "react";
import { atom, useRecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import styled from "styled-components";
import MainHeader from "../../component/main/Header";
import WeatherBox from "../../component/main/WeatherBox";
import { getInformation } from "../../lib/api";
import { UserWeather, Weather } from "../../type";

const { persistAtom } = recoilPersist()

export const locationState = atom({
  key: 'selectedInformation',
  default: ['경기도 성남시 분당구 판교동', '62', '123'],
  effects_UNSTABLE: [persistAtom],
});

const Main = () => {
  const [selectedFinalAddress, setSelectedFinalAddress] = useRecoilState(locationState);
  console.log(selectedFinalAddress);
  const [name, x, y] = selectedFinalAddress;
  const location = { name, x, y };
  const random = () => {
    return Math.round(Math.random()) + 1;
  };
  const [weather, setWeather] = useState<any>({});

  const [userSelectWeather, setUserSelectWeather] = useState<UserWeather[]>([
    {
      sort: "비",
      category: "PCP",
      title: "강수량",
      size: random(),
      color: "#64B2E3",
    },
    {
      sort: "해",
      category: "TMP",
      title: "온도",
      size: random(),
      color: "#ECC331",
    },
    {
      sort: "비",
      category: "POP",
      title: "강수확률",
      size: random(),
      color: "#56DFA3",
    },
    {
      sort: "비",
      category: "REH",
      title: "습도",
      size: random(),
      color: "#FFA57A",
    },
    {
      sort: "해",
      category: "SKY",
      title: "하늘상태",
      size: random(),
      color: "#ECC331",
    },
  ]);

  useEffect(() => {
    let weatherData: Weather[] = [
      {
        baseDate: "20221016",
        baseTime: "1400",
        category: "TMP",
        fcstDate: "20221016",
        fcstTime: "1500",
        fcstValue: "20",
        nx: 55,
        ny: 127,
      },
      {
        baseDate: "20221016",
        baseTime: "1400",
        category: "UUU",
        fcstDate: "20221016",
        fcstTime: "1500",
        fcstValue: "1.8",
        nx: 55,
        ny: 127,
      },
      {
        baseDate: "20221016",
        baseTime: "1400",
        category: "VVV",
        fcstDate: "20221016",
        fcstTime: "1500",
        fcstValue: "-0.8",
        nx: 55,
        ny: 127,
      },
      {
        baseDate: "20221016",
        baseTime: "1400",
        category: "VEC",
        fcstDate: "20221016",
        fcstTime: "1500",
        fcstValue: "294",
        nx: 55,
        ny: 127,
      },
      {
        baseDate: "20221016",
        baseTime: "1400",
        category: "WSD",
        fcstDate: "20221016",
        fcstTime: "1500",
        fcstValue: "1.9",
        nx: 55,
        ny: 127,
      },
      {
        baseDate: "20221016",
        baseTime: "1400",
        category: "SKY",
        fcstDate: "20221016",
        fcstTime: "1500",
        fcstValue: "4",
        nx: 55,
        ny: 127,
      },
      {
        baseDate: "20221016",
        baseTime: "1400",
        category: "PTY",
        fcstDate: "20221016",
        fcstTime: "1500",
        fcstValue: "0",
        nx: 55,
        ny: 127,
      },
      {
        baseDate: "20221016",
        baseTime: "1400",
        category: "POP",
        fcstDate: "20221016",
        fcstTime: "1500",
        fcstValue: "30",
        nx: 55,
        ny: 127,
      },
      {
        baseDate: "20221016",
        baseTime: "1400",
        category: "WAV",
        fcstDate: "20221016",
        fcstTime: "1500",
        fcstValue: "0",
        nx: 55,
        ny: 127,
      },
      {
        baseDate: "20221016",
        baseTime: "1400",
        category: "PCP",
        fcstDate: "20221016",
        fcstTime: "1500",
        fcstValue: "강수없음",
        nx: 55,
        ny: 127,
      },
      {
        baseDate: "20221016",
        baseTime: "1400",
        category: "REH",
        fcstDate: "20221016",
        fcstTime: "1500",
        fcstValue: "65",
        nx: 55,
        ny: 127,
      },
      {
        baseDate: "20221016",
        baseTime: "1400",
        category: "SNO",
        fcstDate: "20221016",
        fcstTime: "1500",
        fcstValue: "적설없음",
        nx: 55,
        ny: 127,
      },
    ];
    
    let weatherArray = {};

    async function test() {
      try {
        const {item}  = await getInformation(x, y);
        console.log(item);
        item.forEach((data: Weather) => {
          weatherArray = Object.assign(weatherArray, { [data.category]: data });
        });
      } catch (error) {
        console.log(error)
        weatherData.forEach((data) => {
          weatherArray = Object.assign(weatherArray, { [data.category]: data });
        });
      } finally {
        console.log(weatherArray);
        setWeather(weatherArray);
      }
    }
    test()

  }, [x, y]);

  return (
    <Wrapper className="wr">
      <MainHeader location={location.name} />
      <WeatherWrapper>
        {userSelectWeather.map((userWeather) => (
          <WeatherBox
            userWeather={userWeather}
            weather={weather}
            key={userWeather.category}
          />
        ))}
      </WeatherWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
`;
const WeatherWrapper = styled.article`
  padding-top: 60px;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
`;

export default Main;
