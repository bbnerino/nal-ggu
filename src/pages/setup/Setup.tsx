import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import Category from "../../component/setup/Category";
import Header from "../../component/setup/Header";
import Select from "../../component/setup/Select";
import { dataState, InfoData, testState } from "../../store/state/example";

import {
  DragDropContext,
  DropResult,
  Droppable,
  Draggable,
} from "react-beautiful-dnd";

import styled from "styled-components";
import SelectedCard from "../../component/setup/SelectedCard";

const Setup = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [info, setInfo] = useRecoilState(dataState);

  const getData = async () => {
    const response = await fetch("/data.json", { method: "GET" });
    const data = await response.json();
    setInfo(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const oncloseModal = () => {
    setIsModalOpen(false);
  };

  // test 용
  const [cards, setCards] = useRecoilState(testState);

  // 드래그가 끝났을 때의 동작을 지정해주는 함수 --> test용이라 수정하셔도 됩니다!!!
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = [...cards];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCards(items);
  };

  return (
    <div>
      <Header />
      <DragDropContext onDragEnd={onDragEnd}>
        <Select cards={cards} />
      </DragDropContext>
      <Category />

      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        test modal
      </button>
    </div>
  );
};

export default Setup;
