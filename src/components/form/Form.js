import React from "react"
export default class Form extends React.Component{
    state = {
        category:"",
        difficulty:""
    }
    
    handleChange = event=>{
        const {name, value} = event.target
        this.setState(prevDate=>{
            return {
                ...prevDate,
                [name]: value
            }
        })
    }

    handleSubmit = event =>{
        event.preventDefault()
        this.props.handleData(this.state)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Quizzical</h1>
                <select className="select" name="category" onChange={this.handleChange} value={this.state.category}>
                    <option value="">Select Category</option>
                    <option value="18">Science: computers</option>
                    <option value="21">Sports</option>
                    <option value="9">General Knowledge</option>
                    <option value="11">Entertainment: Film</option>
                    <option value="12">Entertainment: Music</option>
                    <option value="32">Entertainment: Cartoon & Animations</option>
                    <option value="22">Geography</option>
                    <option value="26">Celebrities</option>
                    
                </select>
                <br />
                <select className="select" name="difficulty" onChange={this.handleChange} value={this.state.difficulty}>
                    <option value="">Select Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <br />
                <button  className="btn">start Quiz</button>
            </form>
        )
    }
}