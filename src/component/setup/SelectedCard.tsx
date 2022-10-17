import React, { useState } from "react";
import styled from "styled-components";

import ColorModal from "../common/ColorModal";
import ModalFrame from "../common/ModalFrame";

interface ItemType {
  id: string;
  prefix: string;
  content: string;
  sort: string;
  title: string;
  size: string;
  color: string;
  category: string;
}

interface Data {
  data: ItemType;
  index: number;
}
const SelectedCard = ({ data, index }: Data) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [saveColor, setSaveColor] = useState<string>(data.color);

  const getEl = document.getElementById(`${data.size}${data.title}`);
  getEl?.setAttribute("checked", "true");

  const oncloseModal = () => {
    setIsModalOpen(false);
  };

  const onSetColor = (colorData: string) => {
    setSaveColor(colorData);
  };

  const alertNotice = () => {
    alert("아직 서비스 준비중입니다! 더 나은 날꾸를 기다려주세요!");
  };

  return (
    <>
      <WeatherCategoryButton>
        <span>{data.title}</span>
        <Wrappper>
          <Item>
            <label htmlFor={`1${data.title}`}>
              <RadioButton
                id={`1${data.title}`}
                type="radio"
                name={data.title}
              />
              <LabelText id="1">1x1</LabelText>
            </label>
          </Item>
          <Item>
            <label htmlFor={`2${data.title}`}>
              <RadioButton
                id={`2${data.title}`}
                type="radio"
                name={data.title}
              />
              <LabelText id="2">2x1</LabelText>
            </label>
          </Item>
          <SelectColor
            color={saveColor}
            onClick={() => {
              setIsModalOpen(true);
            }}
          ></SelectColor>
          <DotsImage src="/assets/dots.png" alt="dots" onClick={alertNotice} />
        </Wrappper>
      </WeatherCategoryButton>
      {isModalOpen ? (
        <ModalFrame>
          <ColorModal
            setSave={onSetColor}
            saveColor={saveColor}
            onhandleModal={() => {
              oncloseModal();
            }}
          />
        </ModalFrame>
      ) : null}
    </>
  );
};

export default SelectedCard;

const WeatherCategoryButton = styled.div`
  ${(props) => props.theme.flex.flexBox()};
  background-color: ${(props) => props.theme.colors.lightGray};
  border-radius: 0.6rem;
  border: 1px solid #cdcdcd;
  justify-content: space-between;
  width: 100%;
  height: 2rem;
  margin: 0.3rem 0;
  padding: 2rem 1rem;

  &:hover {
    background-color: #e7e7e7;
  }
`;

const Wrappper = styled.div`
  ${(props) => props.theme.flex.flexBox()};
  flex-direction: row;
`;

const DotsImage = styled.img`
  width: 1rem;
  right: 0.5rem;
  cursor: pointer;
`;

const SelectColor = styled.div.attrs((props) => ({
  bgColor: props.color,
}))`
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
`;

const Item = styled.div`
  ${(props) => props.theme.flex.flexBox()};
  flex-direction: row;
`;

const RadioButton = styled.input.attrs({ type: "radio" })`
  opacity: 0;
  display: none;
`;

const LabelText = styled.span`
  color: black;
  border-radius: 0.4rem;
  padding: 0.3rem 1rem;
  margin-right: 1rem;
  cursor: pointer;
  ${RadioButton}:checked + && {
    background-color: #6d3dff;
    color: white;
  }
`;
