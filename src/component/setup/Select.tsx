import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { dataState, InfoData } from "../../store/state/example";
import SelectedCard from "./SelectedCard";

const Select = () => {
  const [info, setInfo] = useRecoilState(dataState);
  const [selected, setSelected] = useState<InfoData[]>([]);

  useEffect(() => {}, []);
  const data = [
    {
      category: "POP",
      color: "#64B2E3",
      size: "2",
      sort: "강수",
      title: "ex1",
    },
    {
      category: "POP",
      color: "#64B2E3",
      size: "2",
      sort: "강수",
      title: "ex2",
    },
  ];
  return (
    <Container>
      <Title>날꾸를 마음대로 꾸며주세요!</Title>
      <SelectContainer>
        {data.map((data: InfoData, index: number) => (
          <SelectedCard key={index} data={data} />
        ))}
      </SelectContainer>
    </Container>
  );
};

export default Select;

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
