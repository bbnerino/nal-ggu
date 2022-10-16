import { useState } from "react";
import styled from "styled-components";
import SideBar from "../../component/SideBar";

interface Props {
  location: string;
}

const MainHeader = ({ location }: Props) => {
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false);

  const showSideBar = () => {
    setIsOpenSideBar(!isOpenSideBar);
  };

  const hideSideBar = () => {
    setIsOpenSideBar(false);
  };

  return (
    <Wrapper>
      <div className="header">
        <img
          className="hamburger"
          src="/assets/hamburger.png"
          onClick={showSideBar}
        />
        <h1 className="location">{location}</h1>
      </div>
      <SideBar isOpenSideBar={isOpenSideBar} hideSideBar={hideSideBar} />
    </Wrapper>
  );
};

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

export default MainHeader;