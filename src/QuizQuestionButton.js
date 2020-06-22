import React, {Component} from 'react'

class QuizQuestionButton extends Component {
    handlerClick = () =>{
        this.props.clickHandler(this.props.button_text);
    }
    
    render(){
       
        return(
            <li>
                <button onClick={this.handlerClick.bind(this)}>{this.props.button_text}</button>
            </li>
        )
    }
}

export default QuizQuestionButton;