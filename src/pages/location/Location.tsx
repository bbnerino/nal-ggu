import React, { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import LocationModalFrame from '../../component/location/LocationModalFrame';
import useMap from '../../hooks/useMap';
import { xyConvert } from '../../lib/convertCoordinate';
import { locationState } from '../main/Main';

interface HandleSubmitEvent {
  (e: React.SyntheticEvent<HTMLFormElement>): void
}

interface HandleClickEvent {
  (e: React.MouseEvent<HTMLElement>): void;
}

interface Props {
  address: string,
  handleListClick: HandleClickEvent
}

const ResultComponent = ({ address, handleListClick }: Props) => {
  const resultArray = useMap({ address })

  if (!resultArray) {
    return <div>다시 검색해주세요</div>
  }
  if (address.length === 0) {
    return <div>결과가 없습니다.</div>
  }

  return (
    <section className='result_container' onClick={handleListClick}>
      {resultArray.map((result, idx) => {
        return <div key={idx} data-x={result.x} data-y={result.y}>{result.roadAddress}</div>
      })}
    </section>
  )
}

interface IProps {
  setPopLocationModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Location = ({ setPopLocationModal }: IProps) => {
  const [inputAddress, setInputAddress] = useState('');
  const [selectedAddress, setSelectedAddress] = useState(['']);
  const [, setSelectedFinalAddress] = useRecoilState(locationState)
  const inputValueRef = useRef<HTMLInputElement>(null);

  const handleInputSubmit: HandleSubmitEvent = e => {
    e.preventDefault();
    if (inputValueRef.current) {
      const inputValue = inputValueRef.current.value;
      if (inputValue.length === 0) return;
      setInputAddress(inputValue)
      inputValueRef.current.value = '';
    }
  };

  const handleListClick: HandleClickEvent = (e) => {
    const target = e.target as HTMLFormElement;
    console.log(target);
    const convertedGrid = xyConvert(Number(target.dataset.y), Number(target.dataset.x));
    setSelectedAddress([String(target.textContent), String(convertedGrid.x), String(convertedGrid.y)])
  }

  const handleButtonConfirm: HandleClickEvent = (e) => {
    console.log(selectedAddress);
    if (selectedAddress.length !== 1) {
      setSelectedFinalAddress(selectedAddress)
      setPopLocationModal(false)
    }
    console.log(selectedAddress);
  }

  return (
    <LocationModalFrame>
      <Wrapper>
        <button onClick={() => { setPopLocationModal(false) }} className='close'>
        </button>
        <form onSubmit={handleInputSubmit}>
          <section >
            <input
              className='input'
              ref={inputValueRef}
              name="findAddress"
              placeholder='주소를 입력해주세요'
            ></input>
            <button className='search_btn'>검색</button>
          </section>
          <section>
            {inputAddress.length !== 0 && <ResultComponent address={inputAddress} handleListClick={handleListClick} />}
          </section>
          <section >
            <div className='selected'>{selectedAddress?.[0]}</div>
            <div>
              <div className='button_container'>
                <button className='cancel_button' onClick={() => { setPopLocationModal(false) }}>취소</button>
                <button className='save_button' onClick={handleButtonConfirm}>저장</button>
              </div>
            </div>
          </section>
        </form>
      </Wrapper>
    </LocationModalFrame>
  )
}

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  section{
    margin: auto;
    width: 90%;
  }
  .input{
    height: 2rem;
    width: 9rem;
    margin-right: 0.5rem;
  }
  .search_btn{
    /* margin-right: 1rem; */
    height: 2rem;
    width: 3rem;
    font-size:15px;
    border-radius: 5px;
    border: none;
    background-color: #6D3DFF;
    color: white;
    cursor: pointer;
  }
  .close {
    position: absolute;
    right: 16px;
    top: 16px;
    width: 32px;
    height: 32px;
    opacity: 0.8;
    appearance: none;
  }
  .close:hover {
    opacity: 1;
  }
  .close:before, .close:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  .close:before {
    transform: rotate(45deg);
  }
  .close:after {
    transform: rotate(-45deg);
  }
  form{
    margin-top: 2rem;
  }
  .result_container{
    border: 2px solid #bebdbd;
    padding-top: 1rem;
    margin-top: 1rem;
    height: 10rem;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 5px;
    padding-left: 0.3rem;
    div{
      padding-bottom: 0.4rem;
      cursor: pointer;
    }
  }
  .selected{
    margin-top: 1rem;
    height: 1.5rem;
    overflow-y: hidden;
  }
  .button_container{
    margin-top: 0.5rem;
    display: flex;
    width: 12rem;
    height: 2rem;
    justify-content: space-around;
    button{
      width: 4rem;
      border-radius: 5px;
      /* border: 0.2px solid '#b5b4b43'; */
      border: none;
      color: white;
      &.cancel_button{
        color: #333;
      }
      &.save_button{
        background-color: #6D3DFF;
      }
    }
  }

`
export default Location;
