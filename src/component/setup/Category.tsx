import React from "react";

import { useRecoilState } from "recoil";
import { dataState } from "../../store/state/example";

import styled from "styled-components";

const Category = () => {
  const [info, setInfo] = useRecoilState(dataState);

  const infoSort = (name: string) => {
    let newArr = [];
    for (let i = 0; i < info.length; i++) {
      if (info.map((data) => data.sort)[i] === name) {
        newArr.push(info[i]);
      }
    }
    return newArr;
  };

  const alertProblems = () => {
    alert("아직 서비스 준비중입니다! 더 나은 날꾸를 기다려주세요!");
  };

  return (
    <CategoryContainer>
      <WeatherCategory>
        <WeatherCategoryTitle>🌤 대기</WeatherCategoryTitle>
        {infoSort("대기").map((data) => (
          <WeatherCategoryButton key={data.category} onClick={alertProblems}>
            <span>{data.title}</span>
            <DotsImage src="/assets/dots.png" alt="dots" />
          </WeatherCategoryButton>
        ))}
      </WeatherCategory>
      <WeatherCategory>
        <WeatherCategoryTitle>☔️ 강수</WeatherCategoryTitle>
        {infoSort("강수").map((data) => (
          <WeatherCategoryButton key={data.category} onClick={alertProblems}>
            <span>{data.title}</span>
            <DotsImage src="/assets/dots.png" alt="dots" />
          </WeatherCategoryButton>
        ))}
      </WeatherCategory>
      <WeatherCategory>
        <WeatherCategoryTitle>💨 바람</WeatherCategoryTitle>
        {infoSort("바람").map((data) => (
          <WeatherCategoryButton key={data.category}>
            <span>{data.title}</span>
            <DotsImage src="/assets/dots.png" alt="dots" />
          </WeatherCategoryButton>
        ))}
      </WeatherCategory>
    </CategoryContainer>
  );
};

const CategoryContainer = styled.div`
  padding-bottom: 4rem;
`;

const WeatherCategory = styled.div`
  margin: 0.3rem 0 1rem 0;
  padding: 1rem 0 0 0;
  border-top: 1px solid ${(props) => props.theme.colors.lightGray};
`;

const WeatherCategoryTitle = styled.p`
  margin: 0 0 0.5rem 0;
`;

const WeatherCategoryButton = styled.div`
  ${(props) => props.theme.flex.flexBox()};
  background-color: ${(props) => props.theme.colors.lightGray};
  display: flex;
  justify-content: space-between;
  border-radius: 0.6rem;
  border: 1px solid #cdcdcd;
  padding: 2rem 1rem;
  width: 100%;
  height: 2rem;
  margin: 0.3rem 0;
  cursor: pointer;
  &:hover {
    background-color: #e7e7e7;
  }
`;

const DotsImage = styled.img`
  width: 1rem;
  right: 0.5rem;
`;

export default Category;
