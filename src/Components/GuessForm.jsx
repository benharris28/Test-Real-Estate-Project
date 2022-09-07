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
    const { gameOver, currentGuess, gameResult } = this.context;
    
    return (
      <div>
        This is the GuessForm Component
        <div className="feedback-area">
          {!currentGuess && <div>Time to put in your first guess</div>}

          {currentGuess && !gameOver && <div>Time to put in your next guess</div>}

          {gameResult === 'win' && <div>You guessed correctly! You have a bright future as a realtor</div>}

          {gameResult === 'lose' && <div>Game over! You will never be a realtor!</div>}
        </div>

        {!gameOver && 
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
        }
     
      </div>
    )
  }
  
}

export default GuessForm;