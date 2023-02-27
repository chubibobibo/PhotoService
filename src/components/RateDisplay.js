//child of RateDipslay
import React from 'react';
// import classes from './RateDisplay.module.css';

//bootstrap
import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,

} from 'mdb-react-ui-kit';


const RateList = ({ rates }) => {
    return (
        <div className="vh-100 d-inline mx-auto">
            <h1 className='mt-5'>RATES</h1>
            <MDBContainer>
                <MDBRow>
                    <MDBCol className="mt-3 d-flex flex-wrap">
                        {rates.map(allRates => (
                            <MDBCard className='mt-3 mx-auto shadow-5' style={{ width: 600 }}>
                                <MDBCardBody>
                                    <div key={allRates.id}>
                                        <div>
                                            <h5>{allRates.title}</h5>
                                        </div>
                                        <div>
                                            Prix: <span>{allRates.price}</span>
                                        </div>
                                        <div>
                                            <span>{allRates.description}</span>
                                        </div>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        ))
                        }
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div >
    );
}

export default RateList;