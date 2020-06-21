import React, {Component} from 'react'

let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props){
        super(props);
        //setting the state of the quiz component
        this.state = {
            quiz_position: 1
        }
    }

    render(){
        return(
            <div className="QuizQuestion">
                {quizData.quiz_questions[0].instruction_text}
            </div>
        )
    }
}

export default Quiz