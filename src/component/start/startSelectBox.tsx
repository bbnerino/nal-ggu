import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  icon: string;
  color: string;
}

const StartSelectBox: React.FC<Props> = ({ title, icon, color }) => {
  return (
    <Wrapper color={color}>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
    </Wrapper>
  );
};

interface ColorProps {
  color: string;
}

const Wrapper = styled.div<ColorProps>`
  display: flex;
  border: solid ${(props) => props.color} 2px;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 30px;
  cursor: pointer;

  @media screen and (max-width: 32rem) {
    height: 3rem;
  }
`;

const Icon = styled.div`
  font-size: 2.5rem;
  margin-right: 1rem;
  @media screen and (max-width: 32rem) {
    font-size: 1.5rem;
  }
`;

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  @media screen and (max-width: 32rem) {
    font-size: 0.5rem;
  }
`;

export default StartSelectBox;
