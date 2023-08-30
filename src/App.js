import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import Detail from './pages/Detail';
import { useState } from 'react';
import QuizList from './components/Quizlist';


function App() {
  
  const QuizLength = QuizList.length;
  console.log(QuizList)
  const [userName, setUserName] = useState("");
  const [quizList, setQuizeList] = useState(QuizList);
  const ChangeName = (data) =>{
    setUserName(data);
  }
  console.log(QuizList)

  return (
    <>
    <Routes>
      <Route path='/' element={<Main ChangeName={ChangeName} userName={userName} QuizLength={QuizLength} quizList={quizList} />}/>
      <Route path='/main' element={<Main/>}/>
      <Route path='/quiz' element={<Detail quizList={quizList} userName={userName} QuizLength={QuizLength} />}/>
    </Routes>
    </>
  );
}

export default App;