import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import Detail from './pages/Detail';
import { useEffect, useState } from 'react';
import QuizList from './components/Quizlist';


function App() {
  
  const [userName, setUserName] = useState("User");
  const [quizList, setQuizeList] = useState(QuizList);
  const quiz = [...QuizList];
  const [selected, setSelected] = useState(4);
  const [quizCnt, setQuizCnt] = useState(QuizList.length);
  const [TypeTxt, setTypetxt] = useState("전체");

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
          return Math.random() -0.5}).slice(0, selected))
         : setQuizeList([...QuizList]).slice(0, selected))
        // 0~1 사이의 값을 반환 > 0.5의 평균값
      break;
      case classValue.includes("cnt") :
      setSelected(dataValue);
      console.log("개수 바뀜")
      break;
      case classValue.includes("type") :
       (dataValue === "전체" ? setQuizeList([...QuizList].slice(0, selected)) : setQuizeList([...QuizList].filter((e)=>{
        return e.type === dataValue
       }).slice(0, selected)))
       setTypetxt(dataValue);
      break;
      default:
      // console.log("데이터가 없습니다.");
        console.log(TypeTxt)
    }
  }

  
  useEffect(()=>{
    setQuizeList([...QuizList].slice(0, selected));
    setQuizCnt([...QuizList].filter((e)=>{
      return TypeTxt === "전체" ? true : e.type === TypeTxt;
    }).length);
    //console.log(quizList)
  },[TypeTxt, selected])
 


  return (
    <>
    <Routes>
      <Route path='/' element={<Main ChangeEvent={ChangeEvent} userName={userName} quiz={quiz} quizList={quizList} selected={selected} quizCnt={quizCnt} />}/>
      <Route path='/main' element={<Main/>}/>
      <Route path='/quiz' element={<Detail quizList={quizList} userName={userName} />}/>
    </Routes>
    </>
  );
}

export default App;