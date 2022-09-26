import React from 'react';
import ApiContext from '../ApiContext'
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
      return <div>You win! The selling price was ${sold_price}</div>
    } else if (isCloseGuess(guess,sold_price)) {
      if (guess < sold_price) {
        return <div>So close! Try a bit higher</div>
      } else {
        return <div>So close! Try a bit lower</div>
      }
      
    } else if (guess > sold_price) {
      return <div>Try a lot lower</div>
    } else if (guess < sold_price) {
      return <div>Try a lot higher</div>
    }
    
  }

 

  
  render() {

    console.log(this.state)
    const { gameOver, win, userGameInfo, currentListing } = this.context;

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

            {userGameInfo.gameOver && userGameInfo.win && <p>You did it!</p>}

            {userGameInfo.gameOver && !userGameInfo.win && <p>Sorry! You didn't guess correctly! The property sold for ${currentListing.sold_price}. You can visit the listing here. A new listing will be posted tomorrow! </p>}

            
          </Alert>
          

          
          
        </div>

        {!userGameInfo.gameOver && 
        <form
          className="guess-form"
        >
          <Container>
            <Row>
              <Col xs={8} md={8} className="guess-form-column">
            
          <input
            name="guess"
            className="guess-form-input"
            type="number"
            placeholder="Type your guess"
            value={this.state.guessValue}
            onChange={(e) => this.handleCurrentGuess(e.target.value)}
            >
          </input>
                </Col>
              <Col>
          <button
            className="guess-form-submit-button"
            onClick={this.handleSubmit}
            >
            Guess
          </button>
                </Col>
              </Row>
            </Container>
        </form>
        }
     
      </div>
    )
  }
  
}

export default GuessForm;