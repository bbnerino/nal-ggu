import { useState } from "react";
import styled from "styled-components";
import SideBar from "../../component/SideBar";
import Location from "../../pages/location/Location";

interface Props {
  location: string;
}

const MainHeader = ({ location }: Props) => {
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false);
  const [popLocationModal,setPopLocationModal] = useState(false)
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
        <button className="location_btn"
        onClick={()=>{setPopLocationModal(!popLocationModal)}}>장소 변경</button>
      </div>
      <SideBar isOpenSideBar={isOpenSideBar} hideSideBar={hideSideBar} />
      {popLocationModal && <Location setPopLocationModal={setPopLocationModal}/>}
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
    justify-content: space-between;
    .hamburger{
      height: 2.5rem;    
      margin-left: 1rem;
      cursor: pointer;
    }
    .location_btn{
      margin-right: 1.5rem;
      height: 2.5rem;
      width: 5rem;
      font-size:15px;
      border-radius: 5px;
      border: none;
      background-color: #6D3DFF;
      color: white;
      cursor: pointer;
    }
  }
`

export default MainHeader;