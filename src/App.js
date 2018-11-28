import React, { Component } from 'react';
import Question from './Question';


class App extends Component {

  state = {
    questions: [
       { id: 'fdsd', title: 'Why is the sky blue?' },
       { id: 'adsf', title: 'Who invented pizza?' },
       { id: 'afdsf', title: 'Is green tea overrated?' },
    ],
       displayQuestions: false
  }

  

  render() {
    let questions = null;
    if ( this.state.displayQuestions ) {
      questions = (
      <div>
           { this.state.questions.map((question, index) => {
                return <Question key={question.id}
                title={question.title} />
           })}
      </div>
      )
    }

    return (

      <div className="App">
        <h1>Question Genie</h1>
        <button className="btn" onClick={this.displayQuestion}>View Unanswered Questions</button>
        {questions}
      </div>
      
    );
  }

  displayQuestion = () => {
    this.setState({
        displayQuestions: !this.state.displayQuestions
    })
  }

}

export default App;
