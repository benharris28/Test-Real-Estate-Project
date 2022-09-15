import React from 'react';
import ApiContext from '../ApiContext'
import ListingDetail from './ListingDetail'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Listing extends React.Component {
  static contextType = ApiContext;

  state = {
    listing: this.context.currentListing
  }
  //Import listing data and component
  //Use a form to input guesses and format them to currency
  //Display feedback for each guess
  //Count guesses
  //Display remaining guesses
  
  showAnswer = (name) => {
    console.log(name)
    
    let show = false;

    const detailsList = ['location', 'property_type', 'beds', 'sq_ft', 'lot_size']
    const totalGuesses = this.context.guesses.length
    
    
    if (totalGuesses > detailsList.indexOf(name) && this.context.currentGuess) {
       show = true
    }

    return show;
  }

  
  render() {

    const listing = this.context.currentListing
    console.log(listing)
   
    

    

    
    
    
    return (
      <div className="listing margin-bottom">
        <Card>
          <Card.Img variant="top" src={listing.listing_image_url} />
        <div className="listing-hero">
          
          
         
        </div>

          <Card.ImgOverlay>
        <Card.Title>Sold on {listing.prev_sale_date} </Card.Title>
       
      </Card.ImgOverlay>

        <Card.Body>

      
        
           <Card className="margin-bottom">
          <Card.Title>Location</Card.Title>

        <ListingDetail
          showAnswer={this.showAnswer}
          name="location"
          helpText="Location"
          detailTitle={listing.property_type}
          value={`${listing.city}, ${listing.province}`}
        />
         </Card>

        <Card className="margin-bottom">
          <Card.Title>Property Type</Card.Title>
        <ListingDetail
          showAnswer={this.showAnswer}
          name="property_type"
          helpText="Property Type"
          detailTitle={listing.property_type}
          value={listing.property_type}
        />
        </Card>


          <Card className="margin-bottom">
          <Card.Title>Bedrooms</Card.Title>
        <ListingDetail 
          showAnswer={this.showAnswer}
          name="beds"
          helpText="Bedrooms"
          detailTitle={listing.beds}
          value={listing.beds}
        />
        </Card>

           <Card className="margin-bottom">
          <Card.Title>Square Ft</Card.Title>
        <ListingDetail 
          showAnswer={this.showAnswer}
          name="sq_ft"
          helpText="Square Feet"
          detailTitle={listing.sq_ft}
          value={listing.sq_ft}
        />
        </Card>
          
        <Card>
          <Card.Title>Lot Size</Card.Title>
        <ListingDetail 
          showAnswer={this.showAnswer}
          name="lot_size"
          helpText="Lot Size"
          detailTitle={listing.lot_size}
          value={listing.lot_size}
        />
        </Card>

        

        </Card.Body>
        </Card>
     
      </div>
    )
  }
  
}

export default Listing;