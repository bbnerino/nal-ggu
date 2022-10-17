import React, { useEffect, useState } from "react";

import { useRecoilState } from "recoil";
import styled from "styled-components";
import { dataState, InfoData, testState } from "../../store/state/example";
import SelectedCard from "./SelectedCard";

import { Droppable, Draggable } from "react-beautiful-dnd";

const Select = ({ cards }: any) => {
  const [info, setInfo] = useRecoilState(dataState);
  const [test, setTest] = useRecoilState(testState);
  return (
    <Container>
      <Title>날꾸를 마음대로 꾸며주세요!</Title>
      {/* 드롭이 일어날 영역을 래핑 */}
      <h1>선택된 데이터</h1>
      <Droppable droppableId="cardlists">
        {(provided) => (
          <div
            className="cardlists"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {cards.map((e: any, i: number) => (
              <SelectedCard key={i} data={e} index={i} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Container>
  );
};

export default Select;

const Container = styled.div`
  padding-top: 80px;
`;

const Title = styled.p`
  text-align: center;
  padding-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 600;
`;
