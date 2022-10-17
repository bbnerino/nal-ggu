import React from "react";

import styled from "styled-components";
import { InfoData } from "../../store/state/example";
import SelectedCard from "./SelectedCard";

// import { Droppable, Draggable } from "react-beautiful-dnd";

const Select = ({ cards }: { cards: InfoData[] }) => {
  return (
    <Container>
      {/* <Title>{prefix}</Title>
      <Droppable droppableId={`${prefix}`}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {elements.map((item: any, index: number) => (
              <SelectedCard key={item.id} item={item} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable> */}

      <Title>날꾸를 마음대로 꾸며주세요!</Title>

      {cards.map((e: any, i: number) => (
        <SelectedCard key={i} data={e} index={i} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding-top: 80px;
`;

const Title = styled.p`
  text-align: center;
  padding: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

export default Select;
