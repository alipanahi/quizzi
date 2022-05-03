import React,{memo} from "react"
import Answer from './Answer'
export default memo(function List(props){
    
    let {question,list} = props
    
    return (
        <div className="question-div">
            <p className="question">{atob(question)}</p>
            <div className="answers-div">
                <Answer options={list} question={question}/>
            </div>
            
        </div>
    )
})