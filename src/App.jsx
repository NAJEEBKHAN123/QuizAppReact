import { useState } from "react"
function App() {
  const [currentQuestion, setcurrentQuestion] = useState(0)
  const [score, setscore] = useState(0)
  const [showScore, setshowScore] = useState(false)
  
  const questons = [
    {
      question: 'when did pakistan gain its independence form British rule?',
      options:['1945', '1946', '1947', '1947'],
      correctAnswer: '1947',
    },
    {
      question: 'The Capital of Pakistan',
      options:['islamabad', 'karachi', 'peshawar', 'lahor'],
      correctAnswer: 'islamabad',
    },
    {
      question: 'Which one is most powerful country in the world',
      options:['america', 'china', 'india', 'russia'],
      correctAnswer: 'america',
    },
    {
      question: 'Where does sun rise',
      options:['north', 'south', 'east', 'west'],
      correctAnswer: 'east',
    },
    {
      question: 'The Answer is 45+6 ?',
      options:['50', '54', '51', '33'],
      correctAnswer: '51',
    },
    {
      question: 'National game of pakistan is ?',
      options:['cricket', 'hokey', 'velleyBall', 'baseBall'],
      correctAnswer: 'hokey',
    },
  ]
  function handleOptionClick(selectOption){
    // score :if selectOption === correctAnswer
    if(selectOption === questons[currentQuestion].correctAnswer){
      setscore(score + 1)
    }
    // next
    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questons.length){
      setcurrentQuestion(nextQuestion);
    }
    else{
      // if last q : show socre 
      setshowScore(true)
    }
  }
  
  return (
    <div className="main-container">
     {/* App heading */}
      <h1 className="main-heading">Quiz Application</h1>
      {showScore ? (
        <h4>You got {score} Questions right out of {questons.length}.</h4>
      ):(
       <>
        {/* current question  */}
      <h3 className="currentQuestion">{questons[currentQuestion].question}</h3>
  <div className="options-contaner">
  {/* current questions options */}
  {questons[currentQuestion].options.map((option,index)=>{
   return  <button key={index} onClick={()=>handleOptionClick(option)}>{option}</button>
  })}
      </div>
       </>
      )}
    </div>
  )
}

export default App

