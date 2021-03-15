import React from 'react';
import '../EventCard/CustomCard.css';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBCardLink } from 'mdb-react-ui-kit';

const CommitteeCard = () => {
  return (
    <div >
    <MDBCard className="myCard">
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.jpg' position='top' alt='...' />
      <MDBCardBody className="bgcolor">
        <span>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardLink style={{ color: '#F54B64'}} href='#'>KNOW MORE</MDBCardLink>
        </span>
      </MDBCardBody>
    </MDBCard>
    </div>
  );

}
export default CommitteeCard;