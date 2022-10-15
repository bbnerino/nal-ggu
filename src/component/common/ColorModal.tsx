import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: green;
`;
const ColorSection = styled.div``;
const Color = styled.div`
  width: 1rem;
  height: 1rem;
  border: 50%;
  background-color: ${(props) => props.color};
`;

const ColorModal = () => {
  return (
    <Container>
      <ColorSection>
        <Color />
      </ColorSection>
    </Container>
  );
};

export default ColorModal;
