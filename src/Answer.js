import React from "react"

export default function Answer(props){
    
    const answers = props.options.map(item=>{
        return (<span className={!item.isChecked ? "answer" : "answer-disabled"}
                style={{background:item.correctStyle}}
                onClick={!item.isChecked ? ()=>props.onClickHandler(item.key) : null}>{atob(item.name)}</span>)
    })
    return (
        <>
        {answers}
        </>
    )
}