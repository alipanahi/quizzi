import React from "react"
import Answer from './Answer'
export default function List(props){
    
    let {question,list,onSelect} = props
    
    function selectAnswer(id){
        //refer the select handle to parent
        onSelect(id,question)
    }
    
    return (
        <div className="question-div">
            <p className="question">{atob(question)}</p>
            <div className="answers-div">
                <Answer options={list} onClickHandler={selectAnswer}/>
            </div>
            
        </div>
    )
}
