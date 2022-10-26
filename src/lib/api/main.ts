import axios from 'axios';

export const apiWithWeather = axios.create({
  baseURL: `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst`
});

export const apiWithAstronomy = axios.create({
  baseURL: `http://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getLCRiseSetInfo`
});
