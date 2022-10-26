/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [title] = useState(['파스타가 맛있는 가게', '노브랜드 신상 버거: 맥앤치즈버거', '뫄뫄 타코야끼 후기']);
  let [like, likeCount] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [detailTitle, setTitle] = useState(0);

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>React-Study</h4>
      </div>

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
              <h4 onClick={ () => { modal == false ? setModal(true)||setTitle(i) : setModal(false) }}>{ title[i] }
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
        modal == true ? <Modal title={title} detailTitle={detailTitle}/> : null
      }
    </div>
  );
}
/*
  부모 -> 자식state 전송하는 방법
  1. <자식컴포넌트 컴포넌트명={state이름}>
  2. props 파라미터 등록 후 props.컴포넌트명 사용
  * props 전송은 부모 -> 자식만 가능(거꾸로 x)
  ** 컴포넌트1 -> 컴포넌트2도 x
*/
function Modal(props){
  // let [detailTitle, setTitle] = useState(0);
  /* state를 App말고 여기에 만들면 부모 -> 자식state 전송 필요x */
  // 근데 state가 Modal, App에서 둘다 필요하면 가장 상위 컴포넌트(App)에 만들어야함

  return(
    <div className='modal'>
      <h4>{props.title[props.detailTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      {/* <button onClick={ () => { 
        let copy = [...props.title];
        copy[0] = '디저트가 맛있는 카페';
        props.titleChange(copy);
        }}>글 수정</button> */}
    </div>
  )
}

export default App;
