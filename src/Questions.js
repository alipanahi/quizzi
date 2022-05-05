import React from "react"
import UserContext from './userContext';
import useQuestion from "./useQuestion";

export default function Questions(props){
    const {handleSelect,questionElement,checkAnswers,isChecked} = useQuestion(props)
    return (
        
        <div className="main-div">
            <UserContext.Provider value={{handleSelect:handleSelect}}>
                {questionElement}
            </UserContext.Provider>
            <div className="result-div">
                <button onClick={checkAnswers} className="btn btn-answer">check Answers</button>
                {isChecked.checked && <p className="score">You scored {isChecked.score}/10 correct answers</p>}
            </div>
        </div>
        
    )
}