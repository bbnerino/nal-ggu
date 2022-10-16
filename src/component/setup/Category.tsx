import React from 'react';

import styled from 'styled-components';

const Category = () => {
  return (
    <CategoryContainer>
      <WeatherCategory>
        <WeatherCategoryTitle>🌞해</WeatherCategoryTitle>
        <WeatherCategoryButton>
          <span>일몰/일출</span>
          <DotsImage src="/assets/dots.png" alt="dots" />
        </WeatherCategoryButton>
        <WeatherCategoryButton>
          <span>자외선지수</span>
          <DotsImage src="/assets/dots.png" alt="dots" />
        </WeatherCategoryButton>
      </WeatherCategory>
      <WeatherCategory>
        <WeatherCategoryTitle>☔️비</WeatherCategoryTitle>
        <WeatherCategoryButton>
          <span>강수확률</span>
          <DotsImage src="/assets/dots.png" alt="dots" />
        </WeatherCategoryButton>
        <WeatherCategoryButton>
          <span>강수량</span>
          <DotsImage src="/assets/dots.png" alt="dots" />
        </WeatherCategoryButton>
      </WeatherCategory>
      <WeatherCategory>
        <WeatherCategoryTitle>😷대기</WeatherCategoryTitle>
        <WeatherCategoryButton>
          <span>미세먼지</span>
          <DotsImage src="/assets/dots.png" alt="dots" />
        </WeatherCategoryButton>
        <WeatherCategoryButton>
          <span>초미세먼지</span>
          <DotsImage src="/assets/dots.png" alt="dots" />
        </WeatherCategoryButton>
        <WeatherCategoryButton>
          <span>황사</span>
          <DotsImage src="/assets/dots.png" alt="dots" />
        </WeatherCategoryButton>
      </WeatherCategory>
    </CategoryContainer>
  );
};

const CategoryContainer = styled.div``;

const WeatherCategory = styled.div`
  margin: 0.3rem 0 1rem 0;
  padding: 1rem 0 0 0;
  border-top: 1px solid ${(props) => props.theme.colors.lightGray};
`;

const WeatherCategoryTitle = styled.p`
  margin: 0 0 0.5rem 0;
`;

const WeatherCategoryButton = styled.button`
  ${(props) => props.theme.flex.flexBox()};
  position: relative;
  width: 100%;
  height: 2rem;
  margin: 0.3rem 0;
`;

const DotsImage = styled.img`
  width: 1rem;
  position: absolute;
  right: 0.5rem;
`;

export default Category;
