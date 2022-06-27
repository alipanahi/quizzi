import React,{memo,useContext} from "react"
import UserContext from "../../userContext"
export default memo(function Answer(props){
    const dataConsumer = useContext(UserContext)
    //const {handleSelect} = useContext(UserContext)
    const answer = props.options.map(item=>{
        return (<span className={!item.isChecked ? "answer" : "answer-disabled"}
                style={{background:item.correctStyle}}
                onClick={!item.isChecked ? ()=>dataConsumer.handleSelect(item.key,props.question) : null}>{atob(item.name)}</span>)
    })
    return (
        <>
            {answer}
        </>
    )
})
