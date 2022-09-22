import React from 'react';
import ApiContext from '../ApiContext'
import Listing from './Listing'
import GuessForm from './GuessForm'
import * as dayjs from 'dayjs'



class Game extends React.Component {
  static contextType = ApiContext;

  
 
  
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