import React from 'react';
import './App.css';
import Form from './Form' 
import Questions from './Questions'
function App() {
  const [quiz, setQuiz] = React.useState(
    {
      category:"",
      difficulty:"",
      quiz:false
    }
  )
  function handleData(formData){//it is called from form.js
      setQuiz(
        {
          category:formData.category,
          difficulty:formData.difficulty,
          quiz:true
        }
      ) 
  }
  return (
    <main className="App">
      {
        quiz.quiz ?
        <Questions category={quiz.category} difficulty={quiz.difficulty}/>
        :
        <Form handleData={handleData}/>
      }
    </main>
    
  );
}

export default App;
