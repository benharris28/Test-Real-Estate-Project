import React from 'react';
import ApiContext from '../ApiContext'
import Listing from './Listing'
import GuessForm from './GuessForm'

class Game extends React.Component {
  static contextType = ApiContext;

  //Import listing data and component
  //Use a form to input guesses and format them to currency
  //Display feedback for each guess
  //Count guesses
  //Display remaining guesses

  state = {
    listing: this.context.listingData
  }

  //Should the game continue? Check guess number and compare to total fields
  
  
  render() {

    const listingTest = this.state.listing
    console.log(listingTest)

  
    const detailsToShow = []
    
    return (
      <div>
        <Listing />
        <GuessForm />
     
      </div>
    )
  }
  
}

export default Game;