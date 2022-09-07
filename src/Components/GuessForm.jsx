import React from 'react';
import ApiContext from '../ApiContext'
import Alert from 'react-bootstrap/Alert';


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
      <div className="margin-bottom medium">
     
        <div className="feedback-area margin-bottom">
          {!currentGuess && <Alert variant="success">Time to put in your first guess</Alert>}

          {currentGuess && !gameOver && <div>Time to put in your next guess</div>}

          {gameResult === 'win' && <div>You guessed correctly! You have a bright future as a realtor</div>}

          {gameResult === 'lose' && <Alert variant="danger">Game over! You will never be a realtor!</Alert>}
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