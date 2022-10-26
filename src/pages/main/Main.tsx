import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import MainHeader from "../../component/main/Header";
import WeatherBox from "../../component/main/WeatherBox";
import { getAstronomyInformation, getWeatherInformation } from "../../lib/api";
import { locationState, startState } from "../../store/state/startData";
import { MOCKUP_ASTRONOMY_DATA, MOCKUP_WEATHER_DATA } from "../../utils/constants";

const Main = () => {
  const [userSelectWeather, setUserSelectWeather] = useRecoilState(startState);
  console.log(userSelectWeather);
  const [selectedFinalAddress, setSelectedFinalAddress] =
    useRecoilState(locationState);
  console.log(selectedFinalAddress);
  const [name, x, y, lon, lat] = selectedFinalAddress;
  const location = { name, x, y, lon, lat };

  const [weather, setWeather] = useState<any>({});

  useEffect(() => {
    let weatherArray: any = {};

    Promise.all(
      [getWeatherInformation(x, y), getAstronomyInformation(lon, lat)]
    ).then(response => response.forEach((data: Weather[] | Astronomy[]) => {
      console.log(data);
      data.forEach((val: any) => {
        weatherArray[val.category] = val;
      })
      setWeather(weatherArray);
      console.log(weatherArray);
    })).catch(error => {
      console.log(error);
      [...MOCKUP_WEATHER_DATA, ...MOCKUP_ASTRONOMY_DATA].forEach((val) => {
        weatherArray[val.category] = val;
      })
      setWeather(weatherArray)
      console.log(weatherArray);
    })

  }, [name]);

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
