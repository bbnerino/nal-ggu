import styled from "styled-components"

interface Props{
  location:string
}

const MainHeader = ({location}:Props) => {
  return (
    <Wrapper>
      <div className="header">
        <img className='hamburger' src='/assets/hamburger.png'/> 
        <h1 className='location'>{location}</h1>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  
  .header{
    position: fixed;
    width: 100%;
    max-width: 47rem;
    min-width: 22rem;
    background-color: #ffffff71;
    height: 4rem;
    box-shadow:0px 1px 10px #00000029;
    display: flex;
    align-items: center;
    .hamburger{
      height: 2.5rem;    
      margin-left: 1rem;
      cursor: pointer;
    }
    .location{
      margin-left: 6rem;
    }
  }
`

export default MainHeader