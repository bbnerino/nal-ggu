import React from 'react'
import styled from 'styled-components'

const Main = () => {
  let location = '서울시 '
  return (
    <Wrapper>
      <Header>
        <h1></h1>
      </Header>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  background-color: aliceblue;
  height: 100vh;

`
const Header = styled.nav`
  background-color: #fff;
  height: 70px;
  box-shadow:0px 1px 10px #00000029;
`
export default Main