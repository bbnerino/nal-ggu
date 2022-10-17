import React, { useEffect, useState } from "react";

import { useRecoilState } from "recoil";
import styled from "styled-components";
import { dataState, InfoData, testState } from "../../store/state/example";
import SelectedCard from "./SelectedCard";

import { Droppable, Draggable } from "react-beautiful-dnd";

const Select = ({
  cards,
  prefix,
  elements,
}: {
  cards: InfoData[];
  prefix: string;
  elements: string[];
}) => {
  const [info, setInfo] = useRecoilState(dataState);
  const [test, setTest] = useRecoilState(testState);

  return (
    <Container>
      <Title>{prefix}</Title>
      {/* <Droppable droppableId={`${prefix}`}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {elements.map((item: InfoData, index: number) => (
              <SelectedCard key={item.id} item={item} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable> */}

      {/* <Title>날꾸를 마음대로 꾸며주세요!</Title>
      드롭이 일어날 영역을 래핑
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
      </Droppable> */}
    </Container>
  );
};

const Container = styled.div`
  background-color: #ff9d9d;
`;

const Title = styled.p`
  text-align: center;
  padding: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const SelectContainer = styled.div`
  background-color: green;
  padding: 2rem;
`;

export default Select;
