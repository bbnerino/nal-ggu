import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SetHeader = () => {
  const navigate = useNavigate();
  const alertNotice = () => {
    alert("아직 서비스 준비중입니다! 더 나은 날꾸를 기다려주세요!");
  };

  return (
    <Wrapper>
      <div className="header">
        <img
          className="arrow_left"
          src="/assets/arrow-left.png"
          onClick={() => {
            navigate("/main");
          }}
        />
        <h1 className="location">커스텀</h1>
        <button className="save_btn" onClick={alertNotice}>
          저장
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  .header {
    position: fixed;
    width: 100%;
    max-width: 47rem;
    min-width: 22rem;
    background-color: #ffffff71;
    height: 4rem;
    box-shadow: 0px 1px 10px #00000029;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .arrow_left {
      height: 2.5rem;
      margin-left: 1rem;
      cursor: pointer;
    }
    .save_btn {
      margin-right: 1.5rem;
      height: 2.5rem;
      width: 5rem;
      font-size: 15px;
      border-radius: 5px;
      border: none;
      background-color: #6d3dff;
      color: white;
      cursor: pointer;
    }
  }
`;

export default SetHeader;
