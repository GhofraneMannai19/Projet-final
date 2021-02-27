import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Caro.css';
function Footer()
{
  return (
    <MDBFooter className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow id="small">
          <MDBCol md="6">
            <h5 className="title">Estore</h5>
            <p>
            Join us today and enjoy our offers and daily discounts!
            </p>
          </MDBCol>
         
          <MDBCol md="3">
            <ul id="liste">
              <li className="list-unstyled">
                <a href="#!"><i class="fab fa-facebook"></i></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><i class="fab fa-instagram"></i></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><i class="fab fa-linkedin-in"></i></a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Estore.com 
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
