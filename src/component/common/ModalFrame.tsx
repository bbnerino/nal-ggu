import { type } from "os";
import React from "react";
import styled from "styled-components";

interface IModal {
  children: React.ReactNode;
}

const ModalFrame = ({ children, ...rest }: IModal) => {
  return (
    <Container>
      <Background />
      <ModalBlock {...rest}>
        <Contents>{children}</Contents>
      </ModalBlock>
    </Container>
  );
};

export default ModalFrame;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(3px);
  animation: modal-bg-show 1s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalBlock = styled.div`
  position: absolute;
  top: 4rem;
  border-radius: 5px;
  padding: 0.5rem;
  background-color: white;
  width: 20rem;
  height: 20rem;
  min-height: 20rem;
  animation: modal-show 0.5s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
