import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { InfoData } from "../../store/state/example";
import ColorModal from "../common/ColorModal";
import ModalFrame from "../common/ModalFrame";
import { Draggable } from "react-beautiful-dnd";

interface Data {
  data: InfoData;
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

  return (
    <Draggable
      draggableId={`test-${data.category}`}
      index={index}
      key={`test-${data.category}`}
    >
      {(provided) => {
        return (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
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
                <DotsImage src="/assets/dots.png" alt="dots" />
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
          </div>
        );
      }}
    </Draggable>
  );
};

export default SelectedCard;

const WeatherCategoryButton = styled.div`
  ${(props) => props.theme.flex.flexBox()};
  background-color: ${(props) => props.theme.colors.lightGray};
  border-radius: 0.2rem;
  border: 1px solid black;
  justify-content: space-between;
  width: 100%;
  height: 2rem;
  margin: 0.3rem 0;
`;

const Wrappper = styled.div`
  ${(props) => props.theme.flex.flexBox()};
  flex-direction: row;
`;

const DotsImage = styled.img`
  width: 1rem;
  right: 0.5rem;
`;

const SelectColor = styled.div.attrs((props) => ({
  bgColor: props.color,
}))`
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

const Item = styled.div`
  ${(props) => props.theme.flex.flexBox()};
  flex-direction: row;
`;
const RadioButton = styled.input.attrs({ type: "radio" })`
  opacity: 0;
`;

const LabelText = styled.span`
  color: black;
  border-radius: 0.2rem;
  padding: 0.1rem;
  ${RadioButton}:checked + && {
    background-color: purple;
    color: white;
  }
`;
