import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import './App.css';
import { exampleState } from './store/state/example';

function Home2() {
  const [myNum,setMyNum] = useRecoilState(exampleState)
  const  navigate = useNavigate()
  return (
    <NalGgu>
      <h1> 날꾸입니다 </h1>
      <button onClick={()=>{navigate(-1)}}> 
        뒤로
      </button>
      <h1>{myNum}</h1>
      <button onClick={()=>{setMyNum(myNum+1)}}>+</button>
      <div className='home'>
        <div className='back'>
          <Home3 해윙={myNum}/>
        </div>
      </div>
    </NalGgu>
  );
}

const NalGgu = styled.div`
  background-color: #83c4fd;
  h1{
    color: #124513;
  }
  .home{
    .back{
      background-color: #b9de70;
    }
  }
`


interface Props{
  해윙 : number
}

const Home3:React.FC<Props> = ({해윙}) => {
  const [example,setExample] = useRecoilState(exampleState)
  return (
    <div>
      prop한 데이터 : {해윙}
    </div>
  );
}



export default Home2;
