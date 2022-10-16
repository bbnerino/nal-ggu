import React, { useState } from "react";
import styled from "styled-components";

const color = [
  "#ECC332",
  "#FFA57A",
  "#64B2E3",
  "#56DFA4",
  "#9FA5DF",
  "#FFA3F0",
  "#F97373",
  "#B0ABB7",
];
interface IColorModal {
  // color: string;
  onhandleModal: () => void;
}
const ColorModal = ({ onhandleModal }: IColorModal) => {
  const [selectedColor, setSelectedColor] = useState<string>("");

  const onhandleColor = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <Container>
      <Title>색상 선택 모달</Title>
      <ColorSection>
        {color.map((color, idx) => {
          return color === selectedColor ? (
            <SelectedColorButton
              onClick={() => {
                onhandleColor(color);
              }}
              key={idx}
              color={color}
            />
          ) : (
            <ColorButton
              key={idx}
              color={color}
              onClick={() => {
                onhandleColor(color);
              }}
            />
          );
        })}
      </ColorSection>
      <ButtonSection>
        <Button onClick={onhandleModal}>취소</Button>
        <Button>저장</Button>
      </ButtonSection>
    </Container>
  );
};

export default ColorModal;

const Container = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  text-align: center;
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const ColorSection = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ColorButton = styled.button`
  width: 3rem;
  height: 3rem;
  background: ${(props) => props.color};
  border-radius: 50%;
  border: 3px solid ${(props) => props.color};
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
const SelectedColorButton = styled(ColorButton)`
  border: 3px solid #797979;
`;

const ButtonSection = styled.div`
  margin: auto;
  display: flex;
  gap: 2.5rem;
`;

const Button = styled.button`
  width: 5rem;
  padding: 0.5rem;
  border: 1px solid #898989;
  background-color: #efefef;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
