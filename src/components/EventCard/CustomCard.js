import React from 'react';
import './CustomCard.css';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBCardLink } from 'mdb-react-ui-kit';

const CustomCard = () => {
  return (
    <div >
    <MDBCard className="myCard">
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.jpg' position='top' alt='...' />
      <MDBCardBody className="bgcolor">
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        
        <MDBCardLink classname="spacinglink"style={{ color: '#F54B64'}} href='#'>DJSCE ACM</MDBCardLink>
        <MDBCardLink style={{ color: '#F54B64'}} href='#'>KNOW MORE</MDBCardLink>
        
      </MDBCardBody>
    </MDBCard>
    </div>
  );

}
export default CustomCard;