import styled from 'styled-components'
import { Weather } from '../../type'

interface Props{
  weather:Weather
}

const WeatherBox = ({weather}:Props) => {
  return (
    <Wrapper size={weather.size===1 ? "40%":"90%"} color={weather.color} >
      <div>{weather.type}</div>
      <h1>{weather.percentage&&`${weather.percentage}%`}</h1>
      <h1>{weather.temperature&&`${weather.temperature}°C`}</h1>
    </Wrapper>
  )
}

interface IweatherBox{
  size: string,
  color:string
}

const Wrapper = styled.div<IweatherBox>`
  padding: 20px;
  background-color: ${props=>props.color};
  height: 240px;
  width: ${props=>props.size};
  margin: 40px 5%;
  border-radius: 10px;
  font-size: 30px;
  h1{
    font-size: 70px;
    margin-top: 20px;
  }
  color: white;
  @media screen and (max-width: 500px) {
    height: 150px;
  } 
`

export default WeatherBox