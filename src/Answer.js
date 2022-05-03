import React,{memo} from "react"
import UserContext from "./userContext"
export default memo(function Answer(props){
    
    return (
        <UserContext.Consumer>
            {data => (
                props.options.map(item=>{
                    return (<span className={!item.isChecked ? "answer" : "answer-disabled"}
                            style={{background:item.correctStyle}}
                            onClick={!item.isChecked ? ()=>data.handleSelect(item.key,props.question) : null}>{atob(item.name)}</span>)
                })
            )}
        </UserContext.Consumer>
    )
})