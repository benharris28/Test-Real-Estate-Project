import React from 'react';
import ApiContext from '../ApiContext'
import Listing from './Listing'
import GuessForm from './GuessForm'
import * as dayjs from 'dayjs'



class Game extends React.Component {
  static contextType = ApiContext;

  //Import listing data and component
  //Use a form to input guesses and format them to currency
  //Display feedback for each guess
  //Count guesses
  //Display remaining guesses
  //End game after guesses is complete

  state = {
    listing: this.context.currentListing,
    
  }

  //Should the game continue? Check guess number and compare to total fields
  //Create Feedback Component


 componentDidMount = () => {
   //Pull in the correct listing where date of listing matches today date

   //Add listing to state
   //Pull in localstorage for that user and add to state (and add nothing if local storage doesn't exist)
   //Check ID of listing in user local storage and compare to current listing
   //If IDs don't match, start a new game
   //If Ids match, set user state to null
  
 }
  
  render() {

    const maxGuesses = 5
    const { listings, currentDate } = this.context
    const todayListing = listings.filter(listing => listing.display_date == currentDate)
    console.log(todayListing)
    
  

  
    const detailsToShow = []
    
    return (
      <div className="game">
        <Listing />
        <GuessForm />
     
      </div>
    )
  }
  
}

export default Game;