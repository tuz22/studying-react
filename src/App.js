/* eslint-disable */
/* -> Lint 끄는 기능 */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [title, titleChange] = useState(['파스타가 맛있는 가게', '노브랜드 신상 버거: 맥앤치즈버거', '뫄뫄 타코야끼 후기']);
  let [like, likeCount] = useState(0);
  let [modal, setModal] = useState(false); // 모달창 안보이는 상태

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>React-Study</h4>
      </div>

      <button onClick={ () => {
        let copy = [...title];
        copy[0] = '디저트가 맛있는 카페';
        titleChange(copy);
      }}>🧁CLICK!
      </button>

      <div className='list'>
        <h4>{ title[0] } <span onClick={ () => {likeCount(like+1)} }>❤</span> {like} </h4>
        <h4>2022-10-24</h4>
      </div>
      <div className='list'>
        <h4>{ title[1] }</h4>
        <h4>2022-10-24</h4>
      </div>
      <div className='list'>
        <h4 onClick={ () => { modal == false ? setModal(true) : setModal(false) }}>{ title[2] }</h4>
        <h4>2022-10-24</h4>
      </div>

      {
        /* if 사용불가 - 삼항연산자 사용 */
        // 조건식 ? 참일 때 실행할 코드 : 거짓일 떄 실행할 코드
        modal == true ? <Modal/> : null
      }
      

    </div>
  );
}

function Modal(){ // Modal - 컴포넌트
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
