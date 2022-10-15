import styled from "styled-components"

interface Props{
  location:string
}

const MainHeader = ({location}:Props) => {
  return (
    <Wrapper>
      <img className='hamburger' src='/assets/hamburger.png'/> 
      <h1 className='location'>{location}</h1>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #ffffff71;
  height: 70px;
  box-shadow:0px 1px 10px #00000029;
  display: flex;
  align-items: center;
  .hamburger{
    height: 40px;    
    margin-left: 20px;
    cursor: pointer;
  }
  .location{
    margin-left: 100px;
  }
`

export default MainHeader