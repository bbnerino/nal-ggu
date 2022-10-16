import styled from 'styled-components'
import { UserWeather, Weather } from '../../type'

interface Props{
  weather:UserWeather
}

const WeatherBox = ({weather}:Props) => {
  return (
    <Wrapper size={weather.size===1 ? "40%":"90%"} color={weather.color} >
      <div>{weather.category}</div>
      <div>{weather.tilte}°C</div>
    </Wrapper>
  )
}

interface IweatherBox{
  size: string,
  color:string
}

const Wrapper = styled.div<IweatherBox>`
  padding: 1rem;
  background-color: ${props=>props.color};
  height: 15rem;
  width: ${props=>props.size};
  margin: 2.5rem 5%;
  border-radius: 10px;
  font-size: 2rem;
  h1{
    font-size: 5rem;
    margin-top: 1.5rem;
  }
  color: white;
  @media screen and (max-width: 32rem) {
    height: 10rem;
    font-size: 1rem;
  } 
`

export default WeatherBox