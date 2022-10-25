/* eslint-disable */
/* -> Lint 끄는 기능 */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '서브웨이 조합 추천';
  let [title, titleChange] = useState(['파스타가 맛있는 가게', '노브랜드 신상 버거: 맥앤치즈버거', '뫄뫄 타코야끼 후기']);
  let [like, likeCount] = useState(0);

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
        <h4>{ title[2] }</h4>
        <h4>2022-10-24</h4>
      </div>

      <Modal></Modal> {/* <Modal />과 같음 */}
      

    </div>
  );
}

/* 
  컴포넌트 만드는 방법
  1. function 만들기
  2. return() 안에 HTML 담기
  3. <함수명></함수명> 쓰기
*/

function Modal(){ // Modal - 컴포넌트
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

// <div>를 굳이 병렬로 사용해야한다면? - 밖에 <div>로 감싸주기
// 의미 없는 <div>가 싫다면? - <Fragment> 사용하기 

function Modal2(){
  return(
    <> {/* <- Fragment 단축 */}
      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}

// 컴포넌트를 만드는 방법2
// const Modal = () => {
//   return (
//     <div></div>
//   )
// }

/* 
  컴포넌트 사용하기 좋을 때
  1. 반복적인 HTML을 축약할 때
  2. 페이지 전환을 할때 사용하는 큰 페이지들
  3. 자주 변경되는 것들
*/

/* 
  컴포넌트 단점
  1. state를 가져다 쓸 때 문제가 생김 ex) not defined... <- 변수의 범위가 함수라서 가져다 쓸 수 없음..
*/

export default App;
