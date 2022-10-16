import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { dataState, InfoData, dnd } from "../../store/state/example";
import SelectedCard from "./SelectedCard";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Select = () => {
  const [info, setInfo] = useRecoilState(dataState);
  const [selected, setSelected] = useState<InfoData[]>([]);

  const [dnds, setDnds] = useRecoilState(dnd);

  // const initial = Array.from({ length: 10 }, (v, k) => k).map((k) => {
  //   const custom = {
  //     id: `id-${k}`,
  //     content: `Quote ${k}`,
  //   };
  //   return custom;
  // });

  // const grid = 8;

  // const reorder = (
  //   list: string | string[],
  //   startIndex: number,
  //   endIndex: number
  // ) => {
  //   const result = Array.from(list);
  //   const [removed] = result.splice(startIndex, 1);
  //   result.splice(endIndex, 0, removed);

  //   return result;
  // };

  // const QuoteItem = styled.div`
  //   width: 200px;
  //   border: 1px solid grey;
  //   margin-bottom: ${grid}px;
  //   background-color: lightblue;
  //   padding: ${grid}px;
  // `;

  // function Quote({ quote, index }) {
  //   return (
  //     <Draggable draggableId={quote.id} index={index}>
  //       {(provided) => (
  //         <QuoteItem
  //           ref={provided.innerRef}
  //           {...provided.draggableProps}
  //           {...provided.dragHandleProps}
  //         >
  //           {quote.content}
  //         </QuoteItem>
  //       )}
  //     </Draggable>
  //   );
  // }

  // const QuoteList = React.memo(function QuoteList({ quotes }) {
  //   return quotes.map((quote: QuoteType, index: number) => (
  //     <Quote quote={quote} index={index} key={quote.id} />
  //   ));
  // });

  function onDragEnd() {
    // if (!result.destination) {
    //   return;
    // }
    // if (result.destination.index === result.source.index) {
    //   return;
    // }
    // const quotes = reorder(
    //   dnds.quotes,
    //   result.source.index,
    //   result.destination.index
    // );
    // setDnds({ quotes });
  }

  return (
    <Container>
      <Title>날꾸를 마음대로 꾸며주세요!</Title>
      <DragDropContext onDragEnd={onDragEnd}>
        <SelectContainer>
          {dnds?.map((list: InfoData) => (
            <SelectedCard key={list.category} data={list} />
          ))}
        </SelectContainer>
      </DragDropContext>
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
