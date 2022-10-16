import React, { useRef, useState } from 'react'
import useMap from '../../hooks/useMap'

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
        return <div key={idx}>{result.roadAddress}</div>
      })}
    </section>
  )
}

const Location = () => {
  const [inputAddress, setInputAddress] = useState('');
  const [selectedAddress, setSelectedAddress] = useState<string | null>('');

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

  const handleListClick: HandleClickEvent =  (e) => {
    const target = e.target as HTMLFormElement;
    console.log(target.textContent);
    setSelectedAddress(target.textContent)
  }

  const handleButtonConfirm: HandleClickEvent =  (e) => {
    // localStorage.setItem('place', JSON.stringify([34, 55]))
  }



  return (
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
        <div>{selectedAddress}</div>
        <div>
          <button>취소</button>
          <button onClick={handleButtonConfirm}>저장</button>
        </div>
      </section>
    </form>
  )
}

export default Location
