import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  icon: string;
  color: string;
}

const StartSelectBox = ({ title, icon, color }: Props) => {
  return (
    <Wrapper color={color}>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
      <Color>{color}</Color>
    </Wrapper>
  );
};

interface ColorProps {
  color: string;
}

const Wrapper = styled.div<ColorProps>`
  border: solid 1px;
  background-color: ${(props) => props.color};
  height: 5rem;
  width: 30rem;
  margin-bottom: 2rem;
`;

const Icon = styled.div``;

const Color = styled.div``;

const Title = styled.span``;

export default StartSelectBox;
