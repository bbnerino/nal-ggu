import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { dataState, InfoData } from "../../store/state/example";
import SelectedCard from "./SelectedCard";

const Select = () => {
  const [info, setInfo] = useRecoilState(dataState);
  const [selected, setSelected] = useState<InfoData[]>([]);

  useEffect(() => {}, []);

  console.log(selected);

  return (
    <Container>
      <Title>날꾸를 마음대로 꾸며주세요!</Title>
      <SelectContainer>
        <SelectedCard />
        {/* {selected?.map((list: InfoData) => (
          <SelectedCard />
          // <SelectedCard key={list.category} data={list} />
        ))} */}
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
