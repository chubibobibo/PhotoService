//child of RateDipslay
import React from 'react';
// import classes from './RateDisplay.module.css';

//bootstrap
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const RateList = ({ rates }) => {
    return (
        <div className="vh-100 d-inline mx-auto">
            <Container>
                <Row>
                    <Col className="mt-3">
                        {rates.map(allRates => (
                            <Card className='mt-3 mx-auto' style={{ width: 600 }}>
                                <Card.Body>
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
                                </Card.Body>
                            </Card>
                        ))
                        }
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default RateList;