/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [title, setTitle] = useState(['파스타가 맛있는 가게', '노브랜드 신상 버거: 맥앤치즈버거', '뫄뫄 타코야끼 후기']);
  let [like, likeCount] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [detailTitle, setDetailTitle] = useState(0);
  let [inputVal, setInputVal] = useState('');

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
              <h4 onClick={ () => { modal == false ? setModal(true)||setDetailTitle(i) : setModal(false) }}>{ title[i] }
                <span onClick={ (e) => {
                  e.stopPropagation(); // 상위 HTML로 퍼지는 이벤트 버블링을 막을 때 사용
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  likeCount(copy) }}>
                  ❤
                </span> {like[i]}
              </h4> {/* data = title[i] */}
              <h4>2022-10-24</h4>
              <button onClick={ () => {
                let copy = [...title];
                copy.splice(i, 1); // 배열에서 해당 자료 삭제
                setTitle(copy);
              }}>삭제</button>
            </div>
          )
        })
      }
      
      {/* <input>에 입력한 값 가져오는 방법  */}
      <input onChange={ (e) => { 
        setInputVal(e.target.value); // state변경함수는 늦게 처리됨 = 비동기처리
        // console.log(inputVal);
      
      }}/>

      <button onClick={ () => { 
        let copy = [...title];
        copy.unshift(inputVal); // 배열 맨 앞에 자료 추가
        setTitle(copy);
      }}>글 등록</button>

      {
        modal == true ? <Modal title={title} detailTitle={detailTitle}/> : null
      }
    </div>
  );
}

function Modal(props){

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
