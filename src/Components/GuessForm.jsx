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

    const maxGuesses = 5
    const currentGuess = userGameInfo.guesses.length
    const guessesLeft = maxGuesses - currentGuess
    console.log(guessesLeft)
    
    return (
      <div className="margin-bottom medium">
     
        <div className="feedback-area margin-bottom">
          <Alert variant="success">
            {!currentGuess && <p>Time to put in your first guess. You have a total of 5 guesses</p>}
            
            {currentGuess > 0 && !userGameInfo.gameOver && this.handleFeedback(userGameInfo.lastGuess)}
         
            {!userGameInfo.gameOver && currentGuess > 0 &&
              <p>You have {guessesLeft} more guesses</p>
            }

            {userGameInfo.gameOver && userGameInfo.gameResult === 'win' && <p>You did it!</p>}

            {userGameInfo.gameOver && userGameInfo.gameResult === 'lose' && <p>Sorry! You didn't guess correctly! The price of the property sold for ${sold_price}. You can visit the listing here </p>}

            
          </Alert>
          

          
          
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