import React from 'react';
import ApiContext from '../ApiContext'
import ListingDetail from './ListingDetail'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';

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

    const detailsList = ['one', 'two', 'three', 'four', 'five', 'location', 'property_type', 'beds', 'sq_ft', 'lot_size']
    const totalGuesses = this.context.userGameInfo.guesses.length
    const { gameOver } = this.context.userGameInfo
    const guessNumber = totalGuesses + 1

    if (totalGuesses > detailsList.indexOf(name) && guessNumber || gameOver) {
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
          <Carousel>
            <Carousel.Item>
              <Card.Img variant="top" src={listing.listing_image_url} />
            </Carousel.Item>
            <Carousel.Item>
              <Card.Img variant="top" src={listing.listing_image_url} />
            </Carousel.Item>
          </Carousel>
        
          <div className="listing-hero">



          </div>

          <Card.ImgOverlay>
            <div className="date-sold-container">
                Sold on {listing.prev_sale_date}
            </div>
            

          </Card.ImgOverlay>

          <Card.Body className="listing-card-body">
            <Container className="listing-card-container">
              <Row>
                <Col>
                  <Card className="listing-card margin-bottom">


                    <ListingDetail
                      showAnswer={this.showAnswer}
                      name="location"
                      revealGroup="one"
                      helpText="Location"
                      detailTitle={listing.property_type}
                      value={`${listing.city}, ${listing.province}`}
                    />
                    <div className="feature-title">Location</div>
                  </Card>
                </Col>

                <Col>
                  <Card className="listing-card margin-bottom">

                    <ListingDetail
                      showAnswer={this.showAnswer}
                      name="property_type"
                      revealGroup="two"
                      helpText="Property Type"
                      detailTitle={listing.property_type}
                      value={listing.property_type}
                    />
                    <div className="feature-title">Property Type</div>
                  </Card>
                </Col>
              </Row>

              <Row>
                <Col className="feature-group">
                  <Card className="listing-card margin-bottom feature-group-item">

                    <ListingDetail
                      showAnswer={this.showAnswer}
                      name="beds"
                      revealGroup="three"
                      helpText="Bedrooms"
                      detailTitle={listing.beds}
                      value={listing.beds}
                    />
                    <div className="feature-title">Beds</div>
                  </Card>

                  <Card className="listing-card margin-bottom">

                    <ListingDetail
                      showAnswer={this.showAnswer}
                      name="beds"
                      revealGroup="three"
                      helpText="Bedrooms"
                      detailTitle={listing.beds}
                      value={listing.baths}
                    />
                    <div className="feature-title">Baths</div>
                  </Card>

                </Col>
                <Col className="feature-group">
                  <Card className="listing-card margin-bottom feature-group-item">

                    <ListingDetail
                      showAnswer={this.showAnswer}
                      name="sq_ft"
                      revealGroup="four"
                      helpText="Square Feet"
                      detailTitle={listing.sq_ft}
                      value={listing.sq_ft}
                    />
                    <div className="feature-title">Sq Ft</div>
                  </Card>

                  <Card className="listing-card margin-bottom">

                    <ListingDetail
                      showAnswer={this.showAnswer}
                      name="lot_size"
                      revealGroup="four"
                      helpText="Lot Size"
                      detailTitle={listing.lot_size}
                      value={listing.lot_size}
                    />
                    <div className="feature-title">Lot Size</div>
                  </Card>

                </Col>
              </Row>
              <Row>
                <Col className="feature-group">
                  <Card className="listing-card margin-bottom feature-group-item">

                    <ListingDetail
                      showAnswer={this.showAnswer}
                      name="prev_sale_date"
                      revealGroup="five"
                      helpText="Prev Sale"
                      detailTitle={listing.prev_sale_date}
                      value={listing.prev_sale_date}
                    />
                    <div className="feature-title">Prev Sale</div>
                  </Card>

                  <Card className="listing-card margin-bottom">

                    <ListingDetail
                      showAnswer={this.showAnswer}
                      name="lot_size"
                      revealGroup="five"
                      helpText="Lot Size"
                      detailTitle={listing.lot_size}
                      value={ `$${listing.prev_sale_price}`}
                    />
                    <div className="feature-title">Prev Price</div>
                  </Card>
                </Col>
              </Row>











            </Container>
          </Card.Body>
        </Card>

      </div>
    )
  }

}

export default Listing;