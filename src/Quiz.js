import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion.js";
import QuizEnd from "./QuizEnd.js";

let quizData = require("./quiz_data.json");

class Quiz extends Component {
  constructor(props) {
    super(props);
    //setting the state of the quiz component
    this.state = {
      quiz_position: 1,
    };
  }

  render() {
      const isQuizEnd = false;
    const display = (isQuizEnd) ? <QuizEnd /> : <QuizQuestion
    quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />;
    return (
      <div>
          
          
             {/* <QuizEnd />
          
             <QuizQuestion 
             quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}
           />
           */}
         {display}
        
       
      </div>
    );
  }
}

export default Quiz;
