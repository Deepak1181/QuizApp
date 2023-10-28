import React from 'react'
import { QuizData } from '../Date/QuizData'
const Quiz = () => {
  return (
    <div>
        <h1 className='headingText'>Quiz App</h1>
         <div className='container'>
           <div className='question'>
            <span>1. </span>
           <p> {QuizData[0].question}</p>
           </div>
           <div className='option-Container'>
               {QuizData[0].option.map((option,i)=>{
                return(
                    <button className='option-btn'>
                      {option}
                    </button>
                )
               })}
           </div>
          <div className='btn'>
          <input className='btnType' type='button' value="Next"/>
          </div>
         </div>
    </div>
  )
}

export default Quiz