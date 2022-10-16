import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MainHeader from '../../component/main/Header'
import WeatherBox from '../../component/main/WeatherBox'
import { UserWeather, Weather } from '../../type'

const Main = () => {
  const location = {"name":"서울시 동작구 노량진로 74","x":4,"y":4}
  const random = ()=>{
    return Math.round(Math.random())+1
  }
  const [weather,setWeather] = useState<any>({})
  
  const colors = ['#56DFA3','#B0ABB7','#64B2E3','#ECC331','#FFA57A']

  const [userSelectWeather,setUserSelectWeather] = useState<UserWeather[]>([
    { 
      category: '비', 
      tilte: '강수량',
      size: random(),
      color:'#64B2E3',
    },
    { 
      category: '해', 
      tilte: '온도',
      size: random(),
      color:'#ECC331',
    },
    { 
      category: '비', 
      tilte: '강수량',
      size: random(),
      color:'#64B2E3',
    },
    { 
      category: '비', 
      tilte: '강수확률',
      size: random(),
      color:'#56DFA3',
    },
    { 
      category: '비', 
      tilte: '습도',
      size: random(),
      color:'#FFA57A',
    },
  ])
  
  useEffect(()=>{
    const weatherData:Weather[] = [
      {
          "baseDate": "20221014",
          "baseTime": "0500",
          "category": "TMP",
          "fcstDate": "20221014",
          "fcstTime": "0600",
          "fcstValue": "12",
          "nx": 55,
          "ny": 127
      },
      {
          "baseDate": "20221014",
          "baseTime": "0500",
          "category": "UUU",
          "fcstDate": "20221014",
          "fcstTime": "0600",
          "fcstValue": "-1.3",
          "nx": 55,
          "ny": 127
      },
      {
          "baseDate": "20221014",
          "baseTime": "0500",
          "category": "VVV",
          "fcstDate": "20221014",
          "fcstTime": "0600",
          "fcstValue": "0.4",
          "nx": 55,
          "ny": 127
      },
      {
          "baseDate": "20221014",
          "baseTime": "0500",
          "category": "VEC",
          "fcstDate": "20221014",
          "fcstTime": "0600",
          "fcstValue": "106",
          "nx": 55,
          "ny": 127
      },
      {
          "baseDate": "20221014",
          "baseTime": "0500",
          "category": "WSD",
          "fcstDate": "20221014",
          "fcstTime": "0600",
          "fcstValue": "1.5",
          "nx": 55,
          "ny": 127
      },
      {
          "baseDate": "20221014",
          "baseTime": "0500",
          "category": "SKY",
          "fcstDate": "20221014",
          "fcstTime": "0600",
          "fcstValue": "3",
          "nx": 55,
          "ny": 127
      },
      {
          "baseDate": "20221014",
          "baseTime": "0500",
          "category": "PTY",
          "fcstDate": "20221014",
          "fcstTime": "0600",
          "fcstValue": "0",
          "nx": 55,
          "ny": 127
      },
      {
          "baseDate": "20221014",
          "baseTime": "0500",
          "category": "POP",
          "fcstDate": "20221014",
          "fcstTime": "0600",
          "fcstValue": "20",
          "nx": 55,
          "ny": 127
      },
      {
          "baseDate": "20221014",
          "baseTime": "0500",
          "category": "WAV",
          "fcstDate": "20221014",
          "fcstTime": "0600",
          "fcstValue": "0",
          "nx": 55,
          "ny": 127
      },
      {
          "baseDate": "20221014",
          "baseTime": "0500",
          "category": "PCP",
          "fcstDate": "20221014",
          "fcstTime": "0600",
          "fcstValue": "강수없음",
          "nx": 55,
          "ny": 127
      }
    ]
    let weatherArray = new Array
    weatherData.map((data)=>{
      Object.assign(weatherArray,{ [data.category] :data})
    })  
    setWeather(weatherArray)
  },[])

  return (
    <Wrapper className='wr'>
      <MainHeader location={location.name}/>
      <WeatherWrapper>
        {userSelectWeather.map((weather)=>
          <WeatherBox weather={weather}/>
        )}
      </WeatherWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 100vh;
`
const WeatherWrapper = styled.article`
  padding-top: 60px;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
`



export default Main