import React from 'react';
//bootstrap

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const GalleryDisplay = (props) => {
    return (
        <div>
            <Container>
                {props.images.map(allData =>
                    <Row className='d-inline'>
                        <Card style={{ width: 'auto' }} className='mx-auto mb-5 d-flex flex-row'>
                            <Col className="col-6 img-fluid">
                                <Card.Img variant="top" src={allData.image} />
                            </Col>

                            <Card.Body >
                                <Col className="col-8 mx-auto d-flex justify-content-center">
                                    <Card.Title className="d-flex align-items-center"><h1>{allData.category}</h1></Card.Title>
                                </Col>
                            </Card.Body>
                        </Card>
                    </Row>
                    // <div>
                    //     <h4>{allData.category}</h4>
                    //     <img src={allData.image} alt="" />
                    // </div>
                )}
            </Container>
        </div>
    );
}

export default GalleryDisplay;