import React from 'react';
import ApiContext from '../ApiContext'


class GuessForm extends React.Component {
  static contextType = ApiContext;

  //Add validation to form

  //Format the guess
  

  state = {
    listing: this.context.listingData,
    guessValue: ''
  }

  handleCurrentGuess = (guess) => {
        this.setState({
            guessValue: guess
        })
    }

  handleSubmit = (e) => {
    e.preventDefault()

    const newGuess = this.state.guessValue
    this.context.updateGuess(newGuess)

    this.setState({
      guessValue: ''
    })
  }


  
  render() {

    console.log(this.state)
  
    
    return (
      <div>
        This is the GuessForm Component
        <div className="feedback-area">
          
        </div>
        <form
          className="guess-form"
        >
          <input
            name="guess"
            className="guess-form-input"
            type="number"
            value={this.state.guessValue}
            onChange={(e) => this.handleCurrentGuess(e.target.value)}
            >
          </input>
          <button
            className="guess-form-submit-button"
            onClick={this.handleSubmit}
            >
            Guess
          </button>
        </form>
     
      </div>
    )
  }
  
}

export default GuessForm;