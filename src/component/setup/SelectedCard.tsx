import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { dataState, InfoData } from "../../store/state/example";
import ColorModal from "../common/ColorModal";
import ModalFrame from "../common/ModalFrame";
import { Draggable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";

interface Item {
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
  item: Item;
  index: number;
}

const SelectedCard = ({ item, index }: Data) => {
  const [getSize, setSize] = useState<string>("");
  const [getCate, setCate] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const oncloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const sizeBox = document.getElementById("2");
    if (getSize === "1") {
      // size 1
    } else {
      // size 2
    }
    setCate("일출");
  }, []);

  const [info, setInfo] = useRecoilState(dataState);

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => {
        return (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <WeatherCategoryButton>
              <p>{item.id}</p>
              <Wrappper>
                <Item>
                  <label htmlFor="fstSize">
                    <RadioButton id="fstSize" type="radio" name="radio" />
                    <LabelText id="1">1x1</LabelText>
                  </label>
                </Item>
                <Item>
                  <label htmlFor="sndSize">
                    <RadioButton id="sndSize" type="radio" name="radio" />
                    <LabelText id="2">2x1</LabelText>
                  </label>
                </Item>
                <SelectColor
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                ></SelectColor>
                <DotsImage src="/assets/dots.png" alt="dots" />
                {isModalOpen ? (
                  <ModalFrame>
                    <ColorModal
                      onhandleModal={() => {
                        oncloseModal();
                      }}
                    />
                  </ModalFrame>
                ) : null}
              </Wrappper>
            </WeatherCategoryButton>
          </div>
        );
      }}
    </Draggable>
  );
};

export default SelectedCard;

const WeatherCategoryButton = styled.div`
  background-color: green;
  ${(props) => props.theme.flex.flexBox()};
  width: 100%;
  margin: 0.3rem 0 1rem 0;
  padding: 1rem 0 0 0;
  border: 1px solid black;
`;

const Wrappper = styled.div`
  ${(props) => props.theme.flex.flexBox()};
  flex-direction: row;
`;

const DotsImage = styled.img`
  width: 1rem;
  right: 0.5rem;
`;

const SelectColor = styled.div`
  background-color: #ecc332;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
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
  ${(props) => {
    switch (props) {
      default:
        return css`
          background-color: white;
          color: black;
          border-radius: 1.2rem;
          height: 1.2rem;
          ${RadioButton}:checked + && {
            background-color: purple;
            color: white;
          }
        `;
    }
  }}
`;
