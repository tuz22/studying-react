/* eslint-disable */
/* -> Lint 끄는 기능 */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  /* 
    state 사용방법
    1. import {useState}
    2. useState(보관할 자료)
    3. let[변수1, 변수2]
        - 변수1: state에 보관했던 자료
        - 변수2: state 변경을 도와주는 함수
    
    state 사용 이유
    - 변수의 경우 변수 값이 변경되면 직접 변경시켜줘야함
    - state의 경우 값이 변경되면 state를 사용하던 HTML이 자동으로 재렌더링됨

    state 변경시
    - 등호로 변경 x

    state 변경함수 특징
    - 기존state == 신규state의 경우 변경 안해줌

    array/object 특징
    - array/object를 저장한 변수에 화살표만 저장
      (= 여기에 이 값이 있다~ 정도)

  */

  let post = '서브웨이 조합 추천';
  let [title, titleChange] = useState(['파스타가 맛있는 가게', '노브랜드 신상 버거: 맥앤치즈버거', '뫄뫄 타코야끼 후기']);
  let [like, likeCount] = useState(0);

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>React-Study</h4>
      </div>

      <button onClick={ () => {
        // title = [...title];
        // title[0] = '디저트가 맛있는 카페';
        // titleChange(title);
        let copy = [...title]; // ... 사용이유
        copy[0] = '디저트가 맛있는 카페';  // copy란 state가 변경 되는 게 아니라, copy[0]의 값이 '디저트~'로 변경되었다는 것이기 때문 => title == copy로 간주되어 변경안해줌
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
        <h4>{ title[2] }</h4>
        <h4>2022-10-24</h4>
      </div>
    </div> /* return() 안에는 병렬로 태그 2개이상 x */
  );
}

export default App;
