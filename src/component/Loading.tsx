import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <LoadingWrapper>
        <LoadingImage src='/assets/sun.png' alt='Sun' />
        <LoadingText>NALGGU</LoadingText>
        <LoadingDots>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </LoadingDots>
      </LoadingWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 15rem;
  display: flex;
  justify-content: center;
`;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LoadingImage = styled.img`
  width: 7rem;
  margin-bottom: 2rem;

  @keyframes Sun-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: Sun-logo-spin cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite 2s
    both;
`;

const LoadingText = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
`;

const LoadingDots = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: black;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }

  div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;

export default Loading;
