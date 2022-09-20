import React from 'react';
import ApiContext from '../ApiContext'
import Alert from 'react-bootstrap/Alert';
import { isWinningGuess, isCloseGuess } from '../Services/GameCalcs';


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

  handleFeedback = (guess) => {
    const { sold_price } = this.context.currentListing

    

    if (isWinningGuess(guess,sold_price)) {
      return <div>You guessed the price</div>
    } else if (isCloseGuess(guess,sold_price)) {
      return <div>So close</div>
    } else {
      return <div>Not even close</div>
    }
    
  }

 

  
  render() {

    console.log(this.state)
    const { gameOver, gameResult, userGameInfo } = this.context;
    
    const currentGuess = userGameInfo.guesses.length + 1
    
    return (
      <div className="margin-bottom medium">
     
        <div className="feedback-area margin-bottom">
          {this.handleFeedback(userGameInfo.lastGuess)}
          {!currentGuess && <Alert variant="success">Time to put in your first guess</Alert>}

          {currentGuess && !userGameInfo.gameOver && <div>Time to put in your next guess</div>}

          {gameResult === 'win' && <div>You guessed correctly! You have a bright future as a realtor</div>}

          {gameResult === 'lose' && <Alert variant="danger">Game over! You will never be a realtor!</Alert>}
        </div>

        {!userGameInfo.gameOver && 
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