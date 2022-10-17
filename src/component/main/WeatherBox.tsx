import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { UserWeather } from "../../type";

interface Props {
  userWeather: UserWeather;
  weather: any;
}

const WeatherBox = ({ userWeather, weather }: Props) => {
  const [weatherData, setWeatherData] = useState<string>();
  const [weatherImg, setWeatherImg] = useState<string>();

  const skyTransform = (code: string) => {
    switch (code) {
      case "1":
        setWeatherImg("/assets/icon/sunny.png");
        return "맑음";
      case "2":
        return "구름조금";
      case "3":
        return "구름많음";
      default:
        return "흐림";
    }
  };

  const rainTransform = (code: string) => {
    switch (code) {
      case "0":
        return "없음";
      case "1":
        setWeatherImg("/assets/icon/rainy.png");
        return "비";
      case "2":
        return "비/눈";
      case "3":
        setWeatherImg("/assets/icon/snow.png");
        return "눈";
      case "4":
        setWeatherImg("/assets/icon/rainy.png");
        return "소나기";
    }
  };

  useEffect(() => {
    const CATEGORY = userWeather.category;

    if (weather[CATEGORY]) {
      switch (CATEGORY) {
        case "SKY":
          setWeatherData(skyTransform(weather[CATEGORY].fcstValue));
          setWeatherImg("/assets/icon/rainy.png");
          return;
        case "PTY":
          setWeatherData(rainTransform(weather[CATEGORY].fcstValue));
          setWeatherImg("/assets/icon/rainy.png");
          return;
        case "TMP":
          setWeatherData(weather[CATEGORY].fcstValue + "℃");
          setWeatherImg("/assets/icon/temp.png");
          return;
        case "PCP":
          if (weather[CATEGORY].fcstValue === "강수없음")
            setWeatherData(weather[CATEGORY].fcstValue);
          else setWeatherData(weather[CATEGORY].fcstValue + "mm");
          setWeatherImg("/assets/icon/rain_onehour.png");
          return;
        case "SNO":
          setWeatherData(weather[CATEGORY].fcstValue + "cm");
          setWeatherImg("/assets/icon/snow.png");
          return;
        case "POP":
          setWeatherData(weather[CATEGORY].fcstValue + "%");
          setWeatherImg("/assets/icon/rainy.png");
          return;
        case "REH":
          setWeatherData(weather[CATEGORY].fcstValue + "%");
          setWeatherImg("/assets/icon/wet.png");
          return;
        case "WAV":
          setWeatherData(weather[CATEGORY].fcstValue + "M");
          setWeatherImg("/assets/icon/wave.png");
          return;
        case "VEC":
          setWeatherData(weather[CATEGORY].fcstValue + "deg");
          setWeatherImg("/assets/icon/dust.png");
          return;
        case "WSD":
          setWeatherData(weather[CATEGORY].fcstValue + "m/s");
          setWeatherImg("/assets/icon/dust.png");
          return;
        default:
          return setWeatherData(weather[CATEGORY].fcstValue);
      }
    }
  }, [weather]);

  return (
    <Wrapper
      size={userWeather.size === 1 ? "40%" : "90%"}
      color={userWeather.color}
    >
      <img src={weatherImg} />
      <div className="weatherDataWrapper">
        <div className="weatherTitle">{userWeather.title}</div>
        <div className="weatherData">{weatherData}</div>
      </div>
    </Wrapper>
  );
};

interface IweatherBox {
  size: string;
  color: string;
}

const Wrapper = styled.div<IweatherBox>`
  display: flex;
  padding: 1rem;
  background-color: ${(props) => props.color};
  height: 15rem;
  width: ${(props) => props.size};
  margin: 2.5rem 5%;
  border-radius: 10px;
  ${(props) =>
    props.size === "40%" &&
    css`
      .weatherDataWrapper {
        margin: auto auto 1rem auto;
        text-align: center;
        .weatherTitle {
          font-size: 1rem;
        }
        .weatherData {
          font-size: 2rem;
        }
      }
      img {
        width: 5rem;
        height: 5rem;
      }
    `}

  ${(props) =>
    props.size === "90%" &&
    css`
      justify-content: space-around;
      align-items: center;
      .weatherDataWrapper {
        text-align: center;
        .weatherTitle {
          font-size: 1.5rem;
        }
        .weatherData {
          font-size: 3rem;
        }
      }
      img {
        width: 8rem;
        height: 8rem;
      }
    `}


  /* h1 {
    font-size: 5rem;
    margin-top: 1.5rem;
  } */
  color: white;
  @media screen and (max-width: 32rem) {
    height: 10rem;
    font-size: 1rem;
  }
`;

export default WeatherBox;
