import React, {useState,useEffect} from 'react';

import './App.css'
function App()
{
const questions=[
  {questionText:'Who is CEO of Google?',
    answerOptions:[{answerText:'Sundar Pichai',isCorrect:true},
      {answerText:'Mark Antony',isCorrect:false},
      {answerText:'Jackson Durai',isCorrect:false},
      {answerText:' Manik Bhasha',isCorrect:false}
    ]
},
{questionText:'Who is current CEO of TATA group?',
  answerOptions:[{answerText:'Tim Cook',isCorrect:false},
    {answerText:'Adam Mosseri',isCorrect:false},
    {answerText:'Natarajan Chandrasekaran',isCorrect:true},
    {answerText:'Neal Mohan',isCorrect:false}
  ]},
{
  questionText:'What does HTML stand for?',
    answerOptions:[{answerText:'Hyperlinks and Text Markup Language',isCorrect:false},
      {answerText:'Hyper Text Markup Language',isCorrect:true},
      {answerText:'Hack Text Markup Language',isCorrect:false},
      {answerText:'Home Tool Markup Language',isCorrect:false}
    ]
},

{
  questionText:'who is making the Web standards?',
    answerOptions:[{answerText:'Google',isCorrect:false},
      {answerText:'Mozilla',isCorrect:false},
      {answerText:'The World Wide Web Consortium',isCorrect:true},
      {answerText:'Microsoft',isCorrect:false}
    ]
},
{
  questionText:'Which HTML tag is used to define an internal style sheet?',
    answerOptions:[{answerText:'<body>',isCorrect:false},
      {answerText:'<style>',isCorrect:true},
      {answerText:'<CSS>',isCorrect:false},
      {answerText:'<script>',isCorrect:false}
    ]
},
{
  questionText:'How do you select an element with class name test?',
    answerOptions:[{answerText:'test',isCorrect:false},
      {answerText:'#test',isCorrect:false},
      {answerText:'%test',isCorrect:false},
      {answerText:'.test',isCorrect:true}
    ]
},
{
  questionText:'Which event occurs when the user clicks on an HTML element?',
    answerOptions:[{answerText:'onmouseclick',isCorrect:false},
      {answerText:'onchange',isCorrect:false},
      {answerText:'onclick',isCorrect:true},
      {answerText:'onmouseover',isCorrect:false}
    ]
},
{
  questionText:'Who is Prime minister of India?',
    answerOptions:[{answerText:'Manmohan Singh',isCorrect:false},
      {answerText:'Narendra Singh Modi',isCorrect:true},
      {answerText:'Jeyalalitha',isCorrect:false},
      {answerText:'Indira Gandhi',isCorrect:false}
    ]
},
{
  questionText:'Inside which HTML element do we put the JavaScript',
    answerOptions:[{answerText:'<Script>',isCorrect:true},
      {answerText:'<Javascript>',isCorrect:false},
      {answerText:'<>',isCorrect:false},
      {answerText:'<js>',isCorrect:false}
    ]
},
{
  questionText:'Who is Chief Minister of Tamilnadu?',
    answerOptions:[{answerText:'Annamalai',isCorrect:false},
      {answerText:'M.K.Stalin',isCorrect:true},
      {answerText:'Thalapathy Vijay',isCorrect:false},
      {answerText:'Seeman',isCorrect:false}
    ]
}
]
const [score,setScore]=useState(0);
const [currentQuestion,setCurrentQuestion]=useState(0);
const [showScore,setShowScore]=useState(false);
const [timer,setTimer]=useState(20);

useEffect(() => {
  let interval;
  if(timer > 0 && !showScore) {
    interval = setInterval(() => {
    setTimer((prevTimer) => prevTimer - 1);
  },1000);
}else {
  clearInterval(interval);
  setShowScore(true);
} 
return () => clearInterval(interval);

},[timer, showScore]);

const handleclick=(isCorrect)=>
{
  if(isCorrect == true)
  {
    setScore(score+1)
    
  }
  if(isCorrect == false)
  {
    setScore(score-0.5)
  }
  const nextQuestion=currentQuestion+1;
  if(nextQuestion < questions.length)
  {
   setCurrentQuestion(nextQuestion);
   setTimer(20);
   
  }
  
  else{
    setShowScore(true);
  }
};
const handleResetquiz = () => {
  setCurrentQuestion(0);
  setScore(0);
  setShowScore(false);
  setTimer(20);
};

  return(
    <div>
      <h1>Quiz Application using React JS</h1>
      <div className='app'>
        {
          showScore ?(
            <div className='score-section'>
              <h1>You have Scored {score} out of {questions.length}</h1>
              <button className='mice' onClick={handleResetquiz}>Reset</button>
            </div>
          )
          :
          (
            <>
            <div className='question-section'>
              <h1 className='question'>Questions<span className='cat'>{currentQuestion+1}</span>/{questions.length}</h1>
              <div className='Question-text'>
                {questions[currentQuestion].questionText}
              </div>

            </div>
            <div className='answer-section'>
            {
              questions[currentQuestion].answerOptions.map((answerOptions)  =>
            (
            <button onClick={() => handleclick(answerOptions.isCorrect)}>
              {answerOptions.answerText}
            </button>
            )
            )
          }
<div className="timer">Time Left:<span>{timer}s</span></div>
          
            </div>
             
            </>
            
          )
        }

      </div>
    </div>
  )
}

export default App