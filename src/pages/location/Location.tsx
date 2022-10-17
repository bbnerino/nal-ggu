import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
import styled from "styled-components";
import ModalFrame from "../../component/common/ModalFrame";
import useMap from "../../hooks/useMap";
import { xyConvert } from "../../lib/convertCoordinate";

const { persistAtom } = recoilPersist();
interface HandleSubmitEvent {
  (e: React.SyntheticEvent<HTMLFormElement>): void;
}

interface HandleClickEvent {
  (e: React.MouseEvent<HTMLElement>): void;
}

interface Props {
  address: string;
  handleListClick: HandleClickEvent;
}

const ResultComponent = ({ address, handleListClick }: Props) => {
  const resultArray = useMap({ address });

  if (!resultArray) {
    return <div>다시 검색해주세요</div>;
  }
  if (address.length === 0) {
    return <div>결과가 없습니다.</div>;
  }

  return (
    <section className="result_container" onClick={handleListClick}>
      {resultArray.map((result, idx) => {
        return (
          <div key={idx} data-x={result.x} data-y={result.y}>
            {result.roadAddress}
          </div>
        );
      })}
    </section>
  );
};

const state = atom({
  key: "selectedInformation",
  default: [""],
  effects_UNSTABLE: [persistAtom],
});

interface IProps {
  setPopLocationModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Location = ({ setPopLocationModal }: IProps) => {
  const [inputAddress, setInputAddress] = useState("");
  const [selectedAddress, setSelectedAddress] = useState([""]);
  const [, setSelectedFinalAddress] = useRecoilState(state);
  const inputValueRef = useRef<HTMLInputElement>(null);

  const handleInputSubmit: HandleSubmitEvent = (e) => {
    e.preventDefault();
    if (inputValueRef.current) {
      const inputValue = inputValueRef.current.value;
      if (inputValue.length === 0) return;
      setInputAddress(inputValue);
      inputValueRef.current.value = "";
    }
  };

  const handleListClick: HandleClickEvent = (e) => {
    const target = e.target as HTMLFormElement;
    console.log(target);
    const convertedGrid = xyConvert(
      Number(target.dataset.y),
      Number(target.dataset.x)
    );
    setSelectedAddress([
      String(target.textContent),
      String(convertedGrid.x),
      String(convertedGrid.y),
    ]);
  };

  const handleButtonConfirm: HandleClickEvent = (e) => {
    setSelectedFinalAddress(selectedAddress);
  };

  return (
    <ModalFrame>
      <Wrapper>
        <button
          onClick={() => {
            setPopLocationModal(false);
          }}
          className="close"
        >
          X
        </button>
        <form onSubmit={handleInputSubmit}>
          <section>
            <input
              ref={inputValueRef}
              name="findAddress"
              placeholder="주소를 입력해주세요"
            ></input>
            <button className="search_btn">검색</button>
          </section>
          {inputAddress.length !== 0 && (
            <ResultComponent
              address={inputAddress}
              handleListClick={handleListClick}
            />
          )}
          <section>
            <div className="selected">{selectedAddress?.[0]}</div>
            <div>
              <Link to="/main">
                <div className="button_container">
                  <button
                    className="cancle_button"
                    onClick={() => {
                      setPopLocationModal(false);
                    }}
                  >
                    취소
                  </button>
                  <button className="save_button" onClick={handleButtonConfirm}>
                    저장
                  </button>
                </div>
              </Link>
            </div>
          </section>
        </form>
      </Wrapper>
    </ModalFrame>
  );
};
const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  section {
    margin: auto;
    width: 90%;
  }
  .search_btn {
    border-radius: 5px;
    margin-left: 1rem;
  }
  .close {
    position: absolute;
    right: 1rem;
    border: none;
  }
  form {
    margin-top: 2rem;
  }
  .result_container {
    border: 2px solid #bebdbd;
    padding-top: 1rem;
    margin-top: 1rem;
    height: 10rem;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 5px;
    padding-left: 0.3rem;
    div {
      padding-bottom: 0.4rem;
      cursor: pointer;
    }
  }
  .selected {
    margin-top: 1rem;
    height: 1.5rem;
    overflow-y: hidden;
  }
  .button_container {
    margin-top: 0.5rem;
    display: flex;
    width: 12rem;
    height: 2rem;
    justify-content: space-around;
    button {
      width: 4rem;
      border-radius: 5px;
      border: 0.2px solid "#b5b4b43";
      color: white;
      &.cancle_button {
        color: #333;
      }
      &.save_button {
        background-color: #6d3dff;
      }
    }
  }
`;
export default Location;
