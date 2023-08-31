import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import Detail from './pages/Detail';
import { useEffect, useState } from 'react';
import QuizList from './components/Quizlist';


function App() {
  
  const [userName, setUserName] = useState("해찬");
  const [quizList, setQuizeList] = useState(QuizList);
  const quiz = [...QuizList];

  const ChangeEvent = (data) =>{
    //한꺼번에 묶겠다
    const classValue = data.target.className;
    const dataValue = data.target.value;

    switch(true){
      //includes("값") > 해당 문자열이 있는지 체크
      case classValue.includes("name") : 
        setUserName(dataValue)
      break;
      case classValue.includes("random") : 
        //console.log(dataValue)
        (dataValue === "1" ? setQuizeList([...QuizList].sort(()=>{
          return Math.random() -0.5
        })) : setQuizeList([...QuizList]))
        // 0~1 사이의 값을 반환 > 0.5의 평균값
      break;
      case classValue.includes("cnt") :
      console.log("개수 바뀜")
      break;
      case classValue.includes("type") :
      console.log("문제 바뀜")
      break;
      default:
      // console.log("데이터가 없습니다.");
    }
  }
  
  useEffect(()=>{
    console.log(quizList)
  },[quizList])
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Main ChangeEvent={ChangeEvent} userName={userName} quiz={quiz} quizList={quizList} />}/>
      <Route path='/main' element={<Main/>}/>
      <Route path='/quiz' element={<Detail quizList={quizList} userName={userName} />}/>
    </Routes>
    </>
  );
}

export default App;