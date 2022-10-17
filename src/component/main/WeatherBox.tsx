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
  const [weatherUnit, setWeatherUnit] = useState<string>();

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
          setWeatherData(weather[CATEGORY].fcstValue);
          setWeatherUnit("℃");
          setWeatherImg("/assets/icon/temp.png");
          return;
        case "PCP":
          if (weather[CATEGORY].fcstValue === "강수없음") {
            setWeatherUnit("");
            setWeatherData(weather[CATEGORY].fcstValue);
          } else {
            setWeatherData(weather[CATEGORY].fcstValue);
            setWeatherUnit("mm");
          }
          setWeatherImg("/assets/icon/rain_onehour.png");

          return;
        case "SNO":
          setWeatherData(weather[CATEGORY].fcstValue);
          setWeatherImg("/assets/icon/snow.png");
          setWeatherUnit("cm");
          return;
        case "POP":
          setWeatherData(weather[CATEGORY].fcstValue);
          setWeatherImg("/assets/icon/rainy.png");
          setWeatherUnit("%");
          return;
        case "REH":
          setWeatherData(weather[CATEGORY].fcstValue);
          setWeatherImg("/assets/icon/wet.png");
          setWeatherUnit("%");
          return;
        case "WAV":
          setWeatherData(weather[CATEGORY].fcstValue);
          setWeatherImg("/assets/icon/wave.png");
          setWeatherUnit("M");
          return;
        case "VEC":
          setWeatherData(weather[CATEGORY].fcstValue);
          setWeatherImg("/assets/icon/dust.png");
          setWeatherUnit("deg");
          return;
        case "WSD":
          setWeatherData(weather[CATEGORY].fcstValue);
          setWeatherImg("/assets/icon/dust.png");
          setWeatherUnit("m/s");
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
        <div className="weatherDataGroup">
          <div className="weatherData">{weatherData}</div>
          <div className="weatherUnit">{weatherUnit}</div>
        </div>
      </div>
    </Wrapper>
  );
};

interface IweatherBox {
  size: string;
  color: string;
}

const Wrapper = styled.div<IweatherBox>`
  box-shadow: 2px 2px 2px 2px rgb(223, 222, 223);
  display: flex;
  padding: 1rem;
  background-color: ${(props) => props.color};
  height: 15rem;
  width: ${(props) => props.size};
  margin: 2.5rem 5%;
  border-radius: 10px;
  font-weight: 600;
  .weatherDataGroup {
    display: flex;
  }
  ${(props) =>
    props.size === "40%" &&
    css`
      .weatherDataWrapper {
        margin: auto auto 2rem auto;
        line-height: 3rem;
        text-align: center;
        .weatherTitle {
          font-size: 1.5rem;
          font-weight: 400;
        }
        .weatherData {
          font-size: 4rem;
        }

        .weatherUnit {
          font-size: 1.5rem;
          margin-left: 10px;
        }
      }
      img {
        width: 8rem;
        height: 8rem;
      }
    `}

  ${(props) =>
    props.size === "90%" &&
    css`
      justify-content: space-around;
      align-items: center;
      .weatherDataWrapper {
        line-height: 4rem;
        text-align: center;
        .weatherTitle {
          font-size: 1.5rem;
          font-weight: 400;
        }
        .weatherData {
          font-size: 5rem;
          margin-bottom: 2.5rem;
        }
        .weatherUnit {
          font-size: 1.5rem;
          margin-left: 10px;
        }
      }
      img {
        width: 11rem;
        height: 11rem;
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

    ${(props) =>
      props.size === "40%" &&
      css`
        .weatherDataWrapper {
          line-height: 2rem;
          margin-top: 3.5rem;
          .weatherTitle {
            font-size: 1rem;
            font-weight: 400;
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
        .weatherDataWrapper {
          line-height: 2.5rem;
          margin-top: 2rem;
          .weatherTitle {
            font-size: 1.5rem;
            font-weight: 400;
          }
          .weatherData {
            font-size: 3rem;
          }
        }
        img {
          width: 7rem;
          height: 7rem;
        }
      `}
  }
`;

export default WeatherBox;
