import React from 'react'
import styled from 'styled-components'
import MainHeader from '../../component/main/Header'
import WeatherBox from '../../component/main/WeatherBox'
import { Weather } from '../../type'

const Main = () => {
  const location = '서울시 동작구 노량진로 74'
  const weatherGroup:Weather[] = [
    {
      type:'날씨',
      temperature :16,
      low_temperature : 11,
      high_low_temperature : 20,
      size:1,
      color:'#B0ABB7'
    },
    {
      type:'강수량',
      percentage : 30,
      size:1,
      color:'#64B2E3'
    },
    {
      type:'강수확률',
      percentage : 50,
      size:1,
      color:'#ECC331'
    },
    {
      type:'습도',
      percentage : 20,
      size:2,
      color:'#56DFA3'
    },
    {
      type:'습도',
      percentage : 20,
      size:1,
      color:'#FFA57A'
    },
    {
      type:'습도',
      percentage : 20,
      size:1,
      color:'#64B2E3'
    },
    {
      type:'습도',
      percentage : 20,
      size:2,
      color:'#FFA57A'
    },
  ]
  return (
    <Wrapper className='wr'>
      <MainHeader location={location}/>
      <WeatherWrapper>
        {weatherGroup.map((weather)=>
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