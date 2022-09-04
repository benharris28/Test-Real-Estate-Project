import React from 'react';
import ApiContext from '../ApiContext'
import ListingDetail from './ListingDetail'

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
  
  showAnswer = (name) => {
    console.log(name)
    
    let show = false;
    
    const listingStructure = {
      city: 1,
      property_type: -1,
      num_units: 2,
      beds: 2,
      baths: 2,
      built: 2,
      sq_ft: 3,
      lot_size: 3,
      prev_sale_date: 4,
      prev_sale_price: 4,
      list_date: 5,
      list_price: 5,
    }
    
    if (this.context.currentGuess > listingStructure.name) {
       show = true
    }

    return show;
  }

  
  render() {

    const { listing } = this.state
    const updatedClass = "test"
    

    

    
    
    
    return (
      <div className="listing">
        <div className="listing-hero">
          This is the listing component
          <img className="listing-img" src={listing.listing_image_url} />
          <div className="listing-sale-date">
            Sold on {listing.prev_sale_date}
            
          </div>
        </div>

        <ListingDetail
          showAnswer={() => this.showAnswer}
          name="property_type"
          helptext="Property Type"
          detailTitle={listing.property_type}
        />

        <ListingDetail 
          showAnswer={() => this.showAnswer(name)}
          name="lot_size"
          helptext="Property Type"
          detailTitle={listing.lot_size}
        />

        
        
      </div>
    )
  }
  
}

export default Listing;