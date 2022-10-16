import React from "react";
import styled, { css } from "styled-components";

const Selected = () => {
  return (
    <Box>
      <Category>일출</Category>
      <Wrapper>
        <Item>
          <label htmlFor="fstSize">
            <RadioButton id="fstSize" type="radio" name="radio" />
            <LabelText>1x1</LabelText>
          </label>
        </Item>
        <Item>
          <label htmlFor="sndSize">
            <RadioButton id="sndSize" type="radio" name="radio" />
            <LabelText>2x1</LabelText>
          </label>
        </Item>
      </Wrapper>
      <SelectColor></SelectColor>
      <DotsImage src="/assets/dots.png" alt="dots" />
    </Box>
  );
};

export default Selected;

const Box = styled.div`
  display: flex;
  font-size: 2rem;
  padding: 1rem 2rem;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  border: 1px solid #dbdbdb;
`;
const Category = styled.div`
  display: flex;
  font-weight: bold;
`;

const DotsImage = styled.img`
  width: 1rem;
  right: 0.5rem;
`;

const SelectColor = styled.div`
  background-color: #ecc332;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
`;
const RadioButton = styled.input.attrs({ type: "radio" })`
  opacity: 0;
`;

const LabelText = styled.span`
  ${(props) => {
    switch (props) {
      default:
        return css`
          background-color: white;
          color: black;
          border-radius: 1.2rem;
          height: 1.2rem;
          ${RadioButton}:checked + && {
            background-color: purple;
            color: white;
          }
        `;
    }
  }}
`;
