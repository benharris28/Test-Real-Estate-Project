import React from 'react';
import ApiContext from '../ApiContext'

class Listing extends React.Component {
  static contextType = ApiContext;

  state = {
    listing: this.context.listingData
  }
  //Import listing data and component
  //Use a form to input guesses and format them to currency
  //Display feedback for each guess
  //Count guesses
  //Display remaining guesses
  
  
  
  render() {

    const { listing } = this.state
    
    return (
      <div className="listing">
        <div className="listing-hero">
          This is the listing component
          <img className="listing-img" src={listing.listing_image_url} />
          <div className="listing-sale-date">
            Sold on {listing.prev_sale_date}
            
          </div>
        </div>

        
        
      </div>
    )
  }
  
}

export default Listing;