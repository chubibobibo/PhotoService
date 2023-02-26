import React from 'react';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const DetailsDisplay = (props) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="d-flex flex-wrap justify-content-center">
                        {props.categories.map(mappedCat =>
                            <div key={mappedCat.id}>
                                <Card className="mt-3 mx-2 d-flex align-items-start">
                                    <Card.Img variant="top" src={mappedCat.url} className="img-fluid shadow-4-strong rounded-1" />
                                </Card>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DetailsDisplay;

