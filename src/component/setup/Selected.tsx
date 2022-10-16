import React from "react";
import styled from "styled-components";

const Selected = () => {
  return (
    <Box>
      <Category>일출</Category>
      <Wrapper>
        <Item>
          <label htmlFor="fstSize">
            <RadioButton id="fstSize" type="radio" name="radio" />
            1x1
          </label>
        </Item>
        <Item>
          <label htmlFor="sndSize">
            <RadioButton id="sndSize" type="radio" name="radio" />
            2x1
          </label>
        </Item>
      </Wrapper>
      <SelectColor></SelectColor>
      <DragIcon>...</DragIcon>
    </Box>
  );
};

export default Selected;

const Box = styled.div`
  display: flex;
  font-size: 2rem;
  padding: 1em 2em;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  border: 1px solid #dbdbdb;
`;
const Category = styled.div`
  display: flex;
  font-weight: bold;
`;

const DragIcon = styled.div``;

const SelectColor = styled.div`
  background-color: #ecc332;
  border-radius: 50%;
  width: 2em;
  height: 2em;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`;

const RadioButton = styled.input`
  opacity: 0;
  border-radius: 50%;
  margin-right: 10px;
`;
