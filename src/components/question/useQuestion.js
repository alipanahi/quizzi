import React from "react"
import List from './List'

function useQuestion(props){
    const {category,difficulty} = props

    const [dbData, setDbData] = React.useState([])
    const [answers, setAnswers] = React.useState([])
    const [questionElement, setQuestionElement] = React.useState([])
    const [isChecked,setIsChecked] = React.useState({
        checked : false,
        score : 0
    })
    React.useEffect(function(){
        let controller = new AbortController()
        fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple&encode=base64`,{signal: controller.signal})
            .then(res => res.json())
            .then(data=>setDbData(data.results))
        return function(){
            controller.abort()
        }
    },[])
    React.useEffect(function(){
        const answersElement = []
        for(let i=0;i<dbData.length;i++){
            let item = dbData[i]
            //make one array of asnwers from incorrect answers and correct answer
            item.incorrect_answers.push(item.correct_answer)
            //sort answers array randomly
            let list = item.incorrect_answers.sort(() => Math.random() - 0.5)
            const answersList =[]
            for(let i=0;i<4;i++){//add attributes to answers
                let isCorrect = list[i] === item.correct_answer ? true : false
                answersList[i]={"key":i,"name":list[i],"selected":false,"correctStyle":"","isCorrect":isCorrect,"isChecked":false}
            }
            answersElement[item.question] = answersList
        }
        setAnswers(answersElement)
        //cleanup
        return () =>{
            setAnswers([])
        }
        
    },[dbData])
    React.useEffect(function(){
        const questionElement = dbData.map(item => {
            return (<List key={item.question} list={answers[item.question]} {...item} />)
        })
        setQuestionElement(questionElement)
        //cleanup
        return () =>{
            setQuestionElement([])
        }
    },[answers])
    function checkAnswers(){
        const answersElement = []
        let totalScore = 0
        //loop through questions object
        for (const [key,answer] of Object.entries(answers)) {
            const answersList =[]
            //loop through every question answers object
            for (const [no, item] of Object.entries(answer)) {
                //add score if the correct answer is selected
                totalScore += item.isCorrect && item.selected ? 1 : 0 
                //apply design for correct and incorrect answers
                answersList[no] = 
                item.isCorrect ? 
                    {...item,correctStyle:"#94D7A2","isChecked":true}
                : item.selected ? {...item,correctStyle:"#F8BCBC","isChecked":true} : {...item,"isChecked":true}
            }
            answersElement[key] = answersList
        }
        setAnswers(answersElement)
        setIsChecked({
            checked : true,
            score : totalScore
        })
    }
    function handleSelect(id,name){
        const answersElement = []
        for (const [key,answer] of Object.entries(answers)) {
            
            if(key === name){//apply class of selected for current question only
                const answersList =[]
                for (const [no, item] of Object.entries(answer)) {
                    answersList[no] = 
                    item.key === id ? {...item,selected:true,correctStyle:"#D6DBF5"} : {...item,selected:false,correctStyle:""}
                    
                }
                answersElement[key] = answersList
            }
            else{//the other question remains the same
                answersElement[key] = answer
            }
            
        }
        setAnswers(answersElement)
        
    }
    return {handleSelect,questionElement,checkAnswers,isChecked}
}

export default useQuestion