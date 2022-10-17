import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import Category from "../../component/setup/Category";
import Header from "../../component/setup/Header";
import Select from "../../component/setup/Select";
import { dataState, InfoData, testState } from "../../store/state/example";

import { DragDropContext, DropResult } from "react-beautiful-dnd";

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
  // const [cards, setCards] = useRecoilState(testState);

  // 드래그가 끝났을 때의 동작을 지정해주는 함수 --> test용이라 수정하셔도 됩니다!!!
  // const onDragEnd = (result: DropResult) => {
  //   if (!result.destination) return;
  //   const items = [...info];
  //   const [reorderedItem] = items.splice(result.source.index, 1);
  //   items.splice(result.destination.index, 0, reorderedItem);
  //   setInfo(items);
  // };

  // fake data generator
  const getItems = (count: number, prefix: string) =>
    Array.from({ length: count }, (v, k) => k).map((k) => {
      const randomId = Math.floor(Math.random() * 1000);
      return {
        id: `item-${randomId}`,
        prefix,
        content: `item ${randomId}`,
      };
    });

  const removeFromList = (list: string[], index: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(index, 1);
    return [removed, result];
  };

  const addToList = (
    list: string[],
    index: number,
    element: string | string[] | any
  ) => {
    const result = Array.from(list);
    result.splice(index, 0, element);
    return result;
  };

  const lists: any = [
    "날꾸를 마음대로 꾸며주세요!",
    "🌤 대기",
    "☔️ 강수",
    "💨 바람",
  ];

  const generateLists = () =>
    lists.reduce(
      (acc: any, listKey: string) => ({
        ...acc,
        [listKey]: getItems(10, listKey),
      }),
      {}
    );

  const [elements, setElements] = useState(generateLists());

  useEffect(() => {
    setElements(generateLists());
  }, []);

  console.log(elements[lists[0]]);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const listCopy = { ...elements };

    const sourceList = listCopy[source.droppableId];

    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );

    listCopy[source.droppableId] = newSourceList;

    const destinationList = listCopy[destination.droppableId];

    listCopy[destination.droppableId] = addToList(
      destinationList,
      destination.index,
      removedElement
    );

    setElements(listCopy);
  };

  return (
    <div>
      <Header />
      <DragDropContext onDragEnd={onDragEnd}>
        {lists.map((listKey: string, index: number) => (
          <Select
            elements={elements[listKey[index]]}
            key={listKey}
            prefix={listKey}
            cards={info}
          />
        ))}
      </DragDropContext>

      {/* <Category info={info} /> */}

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
