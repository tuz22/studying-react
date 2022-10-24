import logo from './logo.svg';
import './App.css';

function App() {

  let post = '서브웨이 조합 추천';

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>Blog</h4>
      </div>
      {/* 블로그 글 제목 */}
      <h4>{ post }</h4>
    </div>
  );
}

export default App;
