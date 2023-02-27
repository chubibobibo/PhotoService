import React from 'react';
import classess from './GalleryDisplay.module.css'

//bootstrap

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';




const GalleryDisplay = (props) => {
    console.log(props)
    return (
        <div className='mt-5'>
            <Container>
                <h1>GALLERY</h1>
                {props.images.map(allData =>
                    <Row key={allData.id} className='d-inline'>
                        <Card style={{ width: 'auto' }} className='mb-5 d-flex flex-row img-fluid shadow-2-strong rounded-4'>
                            <Col className="col-6 img-fluid">
                                <Card.Img variant="top" src={allData.image} />
                            </Col>
                            <Card.Body className='d-flex align-items-center'>
                                <Col className="col-8 mx-auto d-flex justify-content-center">
                                    <Card.Title className="d-flex align-items-center">
                                        <Link to={`/gallery/${allData.category}`} className="text-decoration-none">
                                            <h1>{allData.category.toUpperCase()}</h1>
                                        </Link>
                                    </Card.Title>
                                </Col>
                            </Card.Body>
                        </Card>
                    </Row>
                )}
            </Container>
        </div >
    );
}

export default GalleryDisplay;