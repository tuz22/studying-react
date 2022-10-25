/* eslint-disable */
/* -> Lint 끄는 기능 */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [title, titleChange] = useState(['파스타가 맛있는 가게', '노브랜드 신상 버거: 맥앤치즈버거', '뫄뫄 타코야끼 후기']);
  let [like, likeCount] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  /*
    map

    1. array 자료 개수만큼 함수 안의 코드 실행
    [1, 2, 3].map(function(){
      console.log(aaa);
    })
    2. 함수의 파라미터는 array 안에 있던 자료
    [1, 2, 3].map(function(e){
      console.log(e);
    })
    3. return에 적은 값을 array에 담아줌
    [1, 2, 3].map(function(){
      return 'aaa'
    })
  */

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

      {/* <div className='list'>
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
      </div> */}

      
      {
        title.map(function(data, i){
          return (
            <div className='list' key={i}>
              <h4 onClick={ () => { modal == false ? setModal(true) : setModal(false) }}>{ title[i] }
                <span onClick={ () => {
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  likeCount(copy) }}>
                  ❤
                </span> {like[i]}
              </h4> {/* data = title[i] */}
              <h4>2022-10-24</h4>
            </div>
          )
        })
      }
      
      {
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
