import React from "react";
import styled from "styled-components";
import Selected from "./Selected";

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

const Select = () => {
  return (
    <Container>
      <Title>날꾸를 마음대로 꾸며주세요!</Title>
      <SelectContainer>
        <Selected />
      </SelectContainer>
    </Container>
  );
};

export default Select;
