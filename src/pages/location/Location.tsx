import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { atom, useRecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import ModalFrame from '../../component/common/ModalFrame';
import useMap from '../../hooks/useMap';
import { xyConvert } from '../../lib/convertCoordinate';

const { persistAtom } = recoilPersist()
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
    <section onClick={handleListClick}>
      {resultArray.map((result, idx) => {
        return <div key={idx} data-x={result.x} data-y={result.y}>{result.roadAddress}</div>
      })}
    </section>
  )
}

const state = atom({
  key: 'selectedInformation',
  default: [''],
  effects_UNSTABLE: [persistAtom],
});

const Location = () => {
  const [inputAddress, setInputAddress] = useState('');
  const [selectedAddress, setSelectedAddress] = useState(['']);
  const [, setSelectedFinalAddress] = useRecoilState(state)
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
    setSelectedFinalAddress(selectedAddress)
  }

  return (
    <ModalFrame>
      <form onSubmit={handleInputSubmit}>
        <section>
          <input
            ref={inputValueRef}
            name="findAddress"
            placeholder='주소를 입력해주세요'
          ></input>
          <button>검색</button>
        </section>
        {inputAddress.length !== 0 && <ResultComponent address={inputAddress} handleListClick={handleListClick} />}
        <section>
          <div>{selectedAddress?.[0]}</div>
          <div>
            <Link to="/main">
              <button>취소</button>
              <button onClick={handleButtonConfirm}>저장</button>
            </Link>
          </div>
        </section>
      </form>
    </ModalFrame>
  )
}

export default Location
