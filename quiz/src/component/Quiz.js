import React, { useState } from 'react'
import { QuizData } from '../Date/QuizData'
const Quiz = () => {
     const [CurrentQuestion,setCurrentQuestion]= useState(0)
     const [score,setScore]= useState(0)
     const [click, setClick]=useState(0)
     const changeQuestion=()=>{
      updateScore()
         if(CurrentQuestion<QuizData.length-1){
          setCurrentQuestion(CurrentQuestion+1)
         }else{
          
         }
     }
     const updateScore= ()=>{
      if(click===QuizData[CurrentQuestion].answer){
        setScore(score+1)
      }

     }
  return (
    <div>
        <h1 className='headingText'>Quiz App</h1>
         <div className='container'>
           <div className='question'>
            <span>{CurrentQuestion+1}. </span>
           <p> {QuizData[CurrentQuestion].question}</p>
           </div>
           <div className='option-Container'>
               {QuizData[0].option.map((option,i)=>{
                return(
                    <button className='option-btn' key={i} onClick={()=>setClick(i+1)} >
                      {option}
                    </button>
                )
               })}
           </div>
          <div className='btn'>
          <input className='btnType' type='button' value="Next"onClick={changeQuestion} />
          </div>
         </div>
    </div>
  )
}

export default Quiz